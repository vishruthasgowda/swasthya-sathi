const currentLang = localStorage.getItem("appLang") || "en";



const translations = {
    hi: {

        "Login": "लॉगिन",
        "Your Family's Health, Now in Your Hands": "आपके परिवार का स्वास्थ्य, अब आपके हाथ में",
        "Empowering ASHA Workers with digital tools for better healthcare delivery": "बेहतर स्वास्थ्य सेवा वितरण के लिए आशा कार्यकर्ताओं को डिजिटल उपकरणों के साथ सशक्त बनाना",
        

        "What We Do": "हम क्या करते हैं",
        "Digital Family Records": "डिजिटल परिवार रिकॉर्ड",
        "Maintain complete health records of families in your area with easy access and updates.": "आसान पहुंच और अपडेट के साथ अपने क्षेत्र के परिवारों का पूरा स्वास्थ्य रिकॉर्ड बनाए रखें।",
        "Real-time Monitoring": "वास्तविक समय की निगरानी",
        "Track vaccinations, maternal health, child growth, and chronic diseases instantly.": "टीकाकरण, मातृ स्वास्थ्य, बच्चों के विकास और पुरानी बीमारियों पर तुरंत नज़र रखें।",
        "Smart Alerts": "स्मार्ट अलर्ट",
        "Get automatic notifications for due vaccinations, health camps, and follow-ups.": "नियत टीकाकरण, स्वास्थ्य शिविरों और फॉलो-अप के लिए स्वचालित सूचनाएं प्राप्त करें।",
        "Easy Reporting": "आसान रिपोर्टिंग",
        "Generate reports and submit data to health authorities with one click.": "रिपोर्ट तैयार करें और एक क्लिक के साथ स्वास्थ्य अधिकारियों को डेटा जमा करें।",
        

        "ASHA Worker Login": "आशा कार्यकर्ता लॉगिन",
        "Worker ID": "कार्यकर्ता आईडी",
        "Enter your Worker ID": "अपनी कार्यकर्ता आईडी दर्ज करें",
        "Password": "पासवर्ड",
        "Enter your password": "अपना पासवर्ड दर्ज करें",
        "Contact your supervisor if you forgot your credentials": "यदि आप अपनी साख (credentials) भूल गए हैं तो अपने पर्यवेक्षक से संपर्क करें",
        

        "Invalid Worker ID or Password!": "अमान्य कार्यकर्ता आईडी या पासवर्ड!"
    },




    kn: {

        "Login": "ಲಾಗಿನ್",
        "Your Family's Health, Now in Your Hands": "ನಿಮ್ಮ ಕುಟುಂಬದ ಆರೋಗ್ಯ, ಈಗ ನಿಮ್ಮ ಕೈಯಲ್ಲಿ",
        "Empowering ASHA Workers with digital tools for better healthcare delivery": "ಉತ್ತಮ ಆರೋಗ್ಯ ರಕ್ಷಣೆಗಾಗಿ ಆಶಾ ಕಾರ್ಯಕರ್ತೆಯರನ್ನು ಡಿಜಿಟಲ್ ಪರಿಕರಗಳೊಂದಿಗೆ ಸಬಲೀಕರಣಗೊಳಿಸುವುದು",
        

        "What We Do": "ನಾವು ಏನು ಮಾಡುತ್ತೇವೆ",
        "Digital Family Records": "ಡಿಜಿಟಲ್ ಕುಟುಂಬ ದಾಖಲೆಗಳು",
        "Maintain complete health records of families in your area with easy access and updates.": "ನಿಮ್ಮ ಪ್ರದೇಶದ ಕುಟುಂಬಗಳ ಸಂಪೂರ್ಣ ಆರೋಗ್ಯ ದಾಖಲೆಗಳನ್ನು ಸುಲಭವಾಗಿ ನಿರ್ವಹಿಸಿ ಮತ್ತು ನವೀಕರಿಸಿ.",
        "Real-time Monitoring": "ನೈಜ-ಸಮಯದ ಮೇಲ್ವಿಚಾರಣೆ",
        "Track vaccinations, maternal health, child growth, and chronic diseases instantly.": "ಲಸಿಕೆಗಳು, ತಾಯಿಯ ಆರೋಗ್ಯ, ಮಕ್ಕಳ ಬೆಳವಣಿಗೆ ಮತ್ತು ದೀರ್ಘಕಾಲದ ಕಾಯಿಲೆಗಳನ್ನು ತಕ್ಷಣವೇ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
        "Smart Alerts": "ಸ್ಮಾರ್ಟ್ ಎಚ್ಚರಿಕೆಗಳು",
        "Get automatic notifications for due vaccinations, health camps, and follow-ups.": "ಬಾಕಿ ಇರುವ ಲಸಿಕೆಗಳು, ಆರೋಗ್ಯ ಶಿಬಿರಗಳು ಮತ್ತು ಅನುಸರಣೆಗಳಿಗಾಗಿ ಸ್ವಯಂಚಾಲಿತ ಅಧಿಸೂಚನೆಗಳನ್ನು ಪಡೆಯಿರಿ.",
        "Easy Reporting": "ಸುಲಭ ವರದಿ",
        "Generate reports and submit data to health authorities with one click.": "ವರದಿಗಳನ್ನು ರಚಿಸಿ ಮತ್ತು ಒಂದೇ ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಆರೋಗ್ಯ ಅಧಿಕಾರಿಗಳಿಗೆ ಡೇಟಾವನ್ನು ಸಲ್ಲಿಸಿ.",
        

        "ASHA Worker Login": "ಆಶಾ ಕಾರ್ಯಕರ್ತೆ ಲಾಗಿನ್",
        "Worker ID": "ಕಾರ್ಯಕರ್ತೆ ಐಡಿ",
        "Enter your Worker ID": "ನಿಮ್ಮ ಕಾರ್ಯಕರ್ತೆ ಐಡಿಯನ್ನು ನಮೂದಿಸಿ",
        "Password": "ಪಾಸ್‌ವರ್ಡ್",
        "Enter your password": "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
        "Contact your supervisor if you forgot your credentials": "ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನೀವು ಮರೆತಿದ್ದರೆ ನಿಮ್ಮ ಮೇಲ್ವಿಚಾರಕರನ್ನು ಸಂಪರ್ಕಿಸಿ",
        
        "Invalid Worker ID or Password!": "ಅಮಾನ್ಯ ಕಾರ್ಯಕರ್ತೆ ID ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್!"
    }
};




function fullPageTranslate() {
    if (currentLang === 'en') return;

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            let node;
        while(node = walker.nextNode()) {
            const text = node.nodeValue.trim();
            if (translations[currentLang][text]) {
                node.nodeValue = node.nodeValue.replace(text, translations[currentLang][text]);
            }
        }

        document.querySelectorAll('input[placeholder]').forEach(input => {
            const pText = input.getAttribute('placeholder');
            if (translations[currentLang][pText]) {
                input.setAttribute('placeholder', translations[currentLang][pText]);
            }
        });
    }






    document.addEventListener('DOMContentLoaded', () => {
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = currentLang;
            languageSelect.addEventListener('change', (e) => {
                localStorage.setItem("appLang", e.target.value);
                window.location.reload(); 
            });
        }

        const loginBtn = document.getElementById('loginBtn');
        const loginModal = document.getElementById('loginModal');
        const closeBtn = document.querySelector('.close-btn');
        const ashaLoginSubmit = document.getElementById('ashaLogin');

        
        loginBtn?.addEventListener('click', () => {
            if (loginModal) loginModal.style.display = 'flex';
        });


        closeBtn?.addEventListener('click', () => {
            if (loginModal) loginModal.style.display = 'none';
        });


        ashaLoginSubmit?.addEventListener('click', (e) => {
            e.preventDefault();
            const workerId = document.getElementById('workerId')?.value;
            const password = document.getElementById('password')?.value;

            if (workerId && password) {
                localStorage.setItem("currentUser", JSON.stringify({ name: "ASHA Worker", id: workerId }));
                window.location.href = "asha.html"; 
            } else {
                const errorMsg = (translations[currentLang] && translations[currentLang]["Invalid Worker ID or Password!"]) || "Invalid Worker ID or Password!";
                alert(errorMsg);
            }
        });

        fullPageTranslate();
    });