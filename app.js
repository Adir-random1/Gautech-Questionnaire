document.addEventListener('DOMContentLoaded', () => {
    
    // Add dynamic listeners for checkboxes/radio styles to trigger UI updates
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const card = input.closest('.form-card');
            if(card) {
                card.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                card.style.boxShadow = '0 30px 60px rgba(0,0,0,0.4)';
            }
        });
        
        input.addEventListener('blur', () => {
            const card = input.closest('.form-card');
            if(card) {
                card.style.borderColor = 'rgba(46, 204, 113, 0.15)';
                card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
            }
        });
    });

    function getFormEntries() {
        const form = document.getElementById('questionnaire-form');
        const formData = new FormData(form);
        const entries = {};
        for (let [key, value] of formData.entries()) {
            if(!entries[key]) {
                entries[key] = [];
            }
            if(value.trim() !== '') {
                entries[key].push(value);
            }
        }
        return entries;
    }

    function generateFormData(format = 'text') {
        const entries = getFormEntries();
        const safeGet = (key) => entries[key]?.[0] || '___';
        const safeArr = (key) => entries[key] ? entries[key].join(', ') : 'No answer selected';
        
        const sections = [
            {
                title: '1. CORE POSITIONING',
                content: [
                    `1.1 Definition: "GauTech is a ${safeGet('1.1_val1')} platform that connects ${safeGet('1.1_val2')} with ${safeGet('1.1_val3')} to create ${safeGet('1.1_val4')}."`,
                    `1.2 Immediate Understanding: ${safeGet('1.2_understanding')}`,
                    `1.3 Positioned Primarily As: ${safeArr('1.3_position')}`,
                    `1.4 Priority Order: ${safeGet('1.4_priority')}`
                ]
            },
            {
                title: '2. VISION & ECOSYSTEM CLARITY',
                content: [
                    `2.1 Long-term Vision: ${safeGet('2.1_vision')}`,
                    `2.2 Change in Rural India: ${safeGet('2.2_change')}`,
                    `2.3 Ecosystem Parts: ${safeArr('2.3_eco')}`,
                    `2.4 Step-by-Step Connection: ${safeGet('2.4_connection')}`
                ]
            },
            {
                title: '3. RURAL INTEGRATION MODEL',
                content: [
                    `3.1 Onboarding Gaupalaks: ${safeGet('3.1_onboarding')}`,
                    `3.2 Support Provided: ${safeArr('3.2_support')} (Details: ${safeGet('3.2_support_extra')})`,
                    `3.3 Fair Pricing & Trust: ${safeGet('3.3_fairness')}`,
                    `3.4 Working With: ${safeArr('3.4_working_with')}`,
                    `3.5 Partnerships in Place: ${safeGet('3.5_partnerships')}`
                ]
            },
            {
                title: '4. PRODUCT & VALUE CHAIN',
                content: [
                    `4.1 Categories: ${safeArr('4.1_cat')} (Others: ${safeGet('4.1_cat_other')})`,
                    `4.2 Approach: ${safeArr('4.2_approach')}`,
                    `4.3 Role of Khet: ${safeGet('4.3_khet')}`
                ]
            },
            {
                title: '5. SUPPLY CHAIN & QUALITY CONTROL',
                content: [
                    `5.1 Collection & Checking: ${safeGet('5.1_collection')}`,
                    `5.2 Centralized Units: ${safeGet('5.2_units')}`,
                    `5.3 Standardization & Hygiene: ${safeGet('5.3_standardization')}`,
                    `5.4 Certifications Planned: ${safeGet('5.4_certifications')}`
                ]
            },
            {
                title: '6. COMMERCIAL BUSINESS MODEL',
                content: [
                    `6.1 Revenue Streams: ${safeArr('6.1_revenue')} (Others: ${safeGet('6.1_rev_other')})`,
                    `6.2 Expected Margins: ${safeGet('6.2_margins')}`,
                    `6.3 Operational Model: ${safeArr('6.3_model')}`
                ]
            },
            {
                title: '7. GO-TO-MARKET STRATEGY',
                content: [
                    `7.1 Primary Customer: ${safeArr('7.1_customer')}`,
                    `7.2 Building Trust: ${safeGet('7.2_trust')}`,
                    `7.3 Distribution Channels: ${safeArr('7.3_channels')}`,
                    `7.4 Marketing Focus: ${safeArr('7.4_marketing')}`
                ]
            },
            {
                title: '8. BRAND PHILOSOPHY',
                content: [
                    `8.1 Brand Purpose: "Our brand exists to ${safeGet('8.1_brand_purpose')}."`,
                    `8.2 Customers Should Feel: ${safeGet('8.2_feel')}`,
                    `8.3 Most Important: ${safeArr('8.3_importance')}`,
                    `8.4 Top Keywords: ${safeArr('8.4_keywords')}`
                ]
            },
            {
                title: '9. ETHICAL FRAMEWORK',
                content: [
                    `9.1 Ensuring No Exploitation: ${safeGet('9.1_exploitation')}`,
                    `9.2 Ethical Commitments: ${safeArr('9.2_commitments')}`,
                    `9.3 Communicating Ethical Framework: ${safeGet('9.3_communicate')}`
                ]
            },
            {
                title: '10. SCALE VISION',
                content: [
                    `10.1 Pan-India Look: ${safeGet('10.1_pan_india')}`,
                    `10.2 Phase 1 Expansion: ${safeGet('10.2_phase1')}`,
                    `10.2 Phase 2 Expansion: ${safeGet('10.2_phase2')}`,
                    `10.2 Phase 3 Expansion: ${safeGet('10.2_phase3')}`,
                    `10.3 Target Numbers: Farmers (${safeGet('10.3_num_farmers')}), Cities (${safeGet('10.3_num_cities')}), Dist. Points (${safeGet('10.3_num_dist')})`
                ]
            },
            {
                title: '11. TRACTION / CURRENT STAGE',
                content: [
                    `11.1 Already In Place: Network (${safeGet('11.1_network')}), Products (${safeGet('11.1_products')}), Partnerships (${safeGet('11.1_partnerships')}), Revenue (${safeGet('11.1_revenue')})`,
                    `11.2 In Planning Stage: ${safeGet('11.2_planning')}`
                ]
            },
            {
                title: '12. FUNDING & GROWTH',
                content: [
                    `12.1 Planning to Raise: ${safeGet('12.1_raise')}`,
                    `12.2 Amount Required: ${safeGet('12.2_amount')}`,
                    `12.3 Use of Funds (%): Supply (${safeGet('12.3_supply')}), Branding (${safeGet('12.3_branding')}), Tech (${safeGet('12.3_tech')}), Marketing (${safeGet('12.3_marketing')})`
                ]
            },
            {
                title: '13. BRAND & DESIGN DIRECTION',
                content: [
                    `13.1 Preferred Tone: ${safeArr('13.1_tone')}`,
                    `13.2 Reference Brands: ${safeGet('13.2_references')}`,
                    `13.3 Design Blend: ${safeArr('13.3_design')}`
                ]
            },
            {
                title: '14. SUPPORTING MATERIALS',
                content: [
                    `14.1 Docs Attached: ${safeArr('14.1_docs')}`,
                    `14.1 Drive Links: ${safeGet('14.1_links')}`
                ]
            }
        ];

        if (format === 'html') {
            let htmlResult = `
            <div style="background-color: #ffffff; color: #000000; font-family: 'Helvetica', 'Arial', sans-serif; padding: 40px; width: 750px; margin: 0 auto;">
                <h1 style="color: #1a4a38; text-align: center; border-bottom: 2px solid #1a4a38; padding-bottom: 15px; margin-bottom: 30px; font-size: 24px; letter-spacing: 1px;">GAUTECH STRATEGIC SUBMISSION</h1>
            `;
            sections.forEach(sec => {
                htmlResult += `<div style="page-break-inside: avoid; margin-bottom: 25px;">`;
                htmlResult += `<h2 style="color: #2c9460; margin-top: 20px; border-bottom: 1.5px solid #eee; padding-bottom: 8px; font-size: 18px; text-transform: uppercase; letter-spacing: 0.5px;">${sec.title}</h2>`;
                sec.content.forEach(line => {
                    const parts = line.split(':');
                    const label = parts[0];
                    const value = line.substring(line.indexOf(':') + 1).trim();
                    htmlResult += `<div style="margin: 12px 0; line-height: 1.6; font-size: 14px; page-break-inside: avoid; display: block;">
                        <span style="font-weight: bold; color: #333; min-width: 180px; display: inline-block;">${label}:</span>
                        <span style="color: #555; display: inline;">${value || 'Not provided'}</span>
                    </div>`;
                });
                htmlResult += `</div>`;
            });
            htmlResult += `</div>`;
            return htmlResult;
        } else {
            let textResult = "========================================\nGAUTECH ECOSYSTEM & COMMERCIAL STRATEGY\n========================================\n\n";
            sections.forEach(sec => {
                textResult += `============== ${sec.title} ==============\n`;
                textResult += sec.content.join('\n') + '\n\n';
            });
            return textResult;
        }
    }

    // Export PDF button
    document.getElementById('export-btn').addEventListener('click', () => {
        const htmlData = generateFormData('html');
        
        // Create an unattached element which html2pdf can parse directly
        const element = document.createElement('div');
        element.innerHTML = htmlData;
        
        // Export to PDF
        const opt = {
            margin:       [10, 0, 10, 0],
            filename:     'GauTech_Strategy_Answers.pdf',
            image:        { type: 'jpeg', quality: 1 },
            pagebreak:    { mode: ['css', 'avoid-all'] },
            html2canvas:  { scale: 2, backgroundColor: '#ffffff', y: 0, scrollY: 0 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        const btn = document.getElementById('export-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Generating PDF...';
        
        html2pdf().set(opt).from(element).save().then(() => {
            btn.innerHTML = originalText;
        }).catch(err => {
            console.error('PDF generation error:', err);
            btn.innerHTML = 'Error Generarting';
            setTimeout(() => { btn.innerHTML = originalText; }, 3000);
        });
    });

});
