const currentLang = localStorage.getItem("appLang") || "en";
const dictionary = {
    hi: {
        "ASHA Connect": "आशा कनेक्ट",
        "Loading...": "लोड हो रहा है...",
        "Logout": "लॉगआउट",
        "+ HealthCare": "+ स्वास्थ्य सेवा",
        "Dashboard": "डैशबोर्ड",
        "Patient Directory": "मरीज निर्देशिका",
        "CBAC Form": "CBAC फॉर्म",
        "Payments": "भुगतान",
        "Welcome back,": "वापस स्वागत है,",
        "Here is your overview for today.": "यहाँ आज का आपका विवरण है।",
        "Tasks Today": "आज के कार्य",
        "High Risk Patients": "उच्च जोखिम वाले मरीज",
        "Credited Earnings": "जमा हुई कमाई",
        "Today's Priority Tasks": "आज के प्राथमिकता वाले कार्य",
        "✅ Follow-up: Radha Sharma (ANC)": "✅ फॉलो-अप: राधा शर्मा (ANC)",
        "✅ Administer DOTS: Suresh Kumar": "✅ डॉट्स प्रशासन: सुरेश कुमार",
        "⏰ Submit 2 CBAC forms for Ward 4": "⏰ वार्ड 4 के लिए 2 CBAC फॉर्म जमा करें",
        "⏰ Village Health Sanitation meeting at 4 PM": "⏰ शाम 4 बजे ग्राम स्वास्थ्य स्वच्छता बैठक",
        "Search by name, village, or status...": "नाम, गाँव या स्थिति से खोजें...",
        "Age": "आयु",
        "Village": "गाँव",
        "Status": "स्थिति",
        "Risk": "जोखिम",
        "Score": "स्कोर",
        "Low": "कम",
        "Medium": "मध्यम",
        "High": "उच्च",
        "Radha Sharma": "राधा शर्मा",
        "Suresh Kumar": "सुरेश कुमार",
        "Ramesh Patel": "रमेश पटेल",
        "Anekal Taluk": "अनेकल तालुक",
        "Devanahalli Taluk": "देवनहल्ली तालुक",
        "Nelamangala Taluk": "नेलमंगला तालुक",
        "Pregnant - 2nd Trimester": "गर्भवती - दूसरी तिमाही",
        "TB Treatment Ongoing": "टीबी का इलाज जारी है",
        "Hypertension Check": "उच्च रक्तचाप की जांच",
        "CBAC Health Assessment": "CBAC स्वास्थ्य मूल्यांकन",
        "Community Based Assessment Checklist for NCDs": "NCDs के लिए समुदाय आधारित मूल्यांकन चेकलिस्ट",
        "Patient Name": "मरीज का नाम",
        "Village / Sector": "गाँव / क्षेत्र",
        "Age (Years)": "आयु (वर्ष)",
        "Gender": "लिंग",
        "Select Gender": "लिंग चुनें",
        "Male": "पुरुष",
        "Female": "महिला",
        "Vitals": "वाइटल्स (Vitals)",
        "Blood Pressure (e.g. 120/80)": "रक्तचाप (जैसे 120/80)",
        "Systolic/Diastolic": "सिस्टोलिक/डायस्टोलिक",
        "Random Blood Sugar (mg/dL)": "रैंडम ब्लड शुगर (mg/dL)",
        "Risk Factors (Scoring)": "जोखिम कारक (स्कोरिंग)",
        "Tobacco Use": "तंबाकू का उपयोग",
        "Never (0 pts)": "कभी नहीं (0 अंक)",
        "Past / Sometimes (1 pt)": "पहले / कभी-कभी (1 अंक)",
        "Daily (2 pts)": "रोजाना (2 अंक)",
        "Alcohol Consumption": "शराब का सेवन",
        "No (0 pts)": "नहीं (0 अंक)",
        "Yes (1 pt)": "हाँ (1 अंक)",
        "Waist Circumference (cm)": "कमर की परिधि (cm)",
        "Enter in cm": "सेमी में दर्ज करें",
        "Physical Activity (Per Week)": "शारीरिक गतिविधि (प्रति सप्ताह)",
        "150 mins or more (0 pts)": "150 मिनट या अधिक (0 अंक)",
        "Less than 150 mins (1 pt)": "150 मिनट से कम (1 अंक)",
        "Family History (BP/Diabetes/Heart)": "पारिवारिक इतिहास (बीपी/मधुमेह/हृदय)",
        "Yes (2 pts)": "हाँ (2 अंक)",
        "Calculate Score & Save Patient": "स्कोर की गणना करें और मरीज को सहेजें",
        "Payments & Incentives": "भुगतान और प्रोत्साहन",
        "Claim your pending incentives via OTP verification.": "OTP सत्यापन के माध्यम से अपने लंबित प्रोत्साहन का दावा करें।",
        "Claim Incentive": "दावा करें",
        "Pending": "लंबित",
        "Credited": "जमा हुआ",
        "Enter OTP": "OTP दर्ज करें",
        "Verify": "सत्यापित करें",
        "Routine Immunization Drive": "नियमित टीकाकरण अभियान",
        "TB Patient DOTS Provider": "टीबी मरीज डॉट्स प्रदाता",
        "NCD Screening (Ward 4)": "NCD स्क्रीनिंग (वार्ड 4)"
    },
    kn: {
        "ASHA Connect": "ಆಶಾ ಕನೆಕ್ಟ್",
        "Loading...": "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
        "Logout": "ಲಾಗ್ ಔಟ್",
        "+ HealthCare": "+ ಆರೋಗ್ಯ ಸೇವೆ",
        "Dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        "Patient Directory": "ರೋಗಿಗಳ ಡೈರೆಕ್ಟರಿ",
        "CBAC Form": "CBAC ಫಾರ್ಮ್",
        "Payments": "ಪಾವತಿಗಳು",
        "Welcome back,": "ಮರಳಿ ಸ್ವಾಗತ,",
        "Here is your overview for today.": "ಇಂದು ನಿಮ್ಮ ಕಾರ್ಯಗಳ ಅವಲೋಕನ ಇಲ್ಲಿದೆ.",
        "Tasks Today": "ಇಂದಿನ ಕೆಲಸಗಳು",
        "High Risk Patients": "ಹೆಚ್ಚಿನ ಅಪಾಯದ ರೋಗಿಗಳು",
        "Credited Earnings": "ಜಮಾ ಆದ ಗಳಿಕೆ",
        "Today's Priority Tasks": "ಇಂದಿನ ಆದ್ಯತೆಯ ಕೆಲಸಗಳು",
        "✅ Follow-up: Radha Sharma (ANC)": "✅ ಫಾಲೋ-ಅಪ್: ರಾಧಾ ಶರ್ಮಾ (ANC)",
        "✅ Administer DOTS: Suresh Kumar": "✅ ಡಾಟ್ಸ್ ಚಿಕಿತ್ಸೆ: ಸುರೇಶ್ ಕುಮಾರ್",
        "⏰ Submit 2 CBAC forms for Ward 4": "⏰ ವಾರ್ಡ್ 4 ಕ್ಕ್ಕೆ 2 CBAC ಫಾರ್ಮ್‌ಗಳನ್ನು ಸಲ್ಲಿಸಿ",
        "⏰ Village Health Sanitation meeting at 4 PM": "⏰ ಸಂಜೆ 4 ಗಂಟೆಗೆ ಗ್ರಾಮ ಆರೋಗ್ಯ ನೈರ್ಮಲ್ಯ ಸಭೆ",
        "Search by name, village, or status...": "ಹೆಸರು, ಗ್ರಾಮ ಅಥವಾ ಸ್ಥಿತಿಯ ಮೂಲಕ ಹುಡುಕಿ...",
        "Age": "ವಯಸ್ಸು",
        "Village": "ಗ್ರಾಮ",
        "Status": "ಸ್ಥಿತಿ",
        "Risk": "ಅಪಾಯ",
        "Score": "ಸ್ಕೋರ್",
        "Low": "ಕಡಿಮೆ",
        "Medium": "ಮಧ್ಯಮ",
        "High": "ಹೆಚ್ಚು",
        "Radha Sharma": "ರಾಧಾ ಶರ್ಮಾ",
        "Suresh Kumar": "ಸುರೇಶ್ ಕುಮಾರ್",
        "Ramesh Patel": "ರಮೇಶ್ ಪಟೇಲ್",
        "Anekal Taluk": "ಆನೇಕಲ್ ತಾಲೂಕು",
        "Devanahalli Taluk": "ದೇವನಹಳ್ಳಿ ತಾಲೂಕು",
        "Nelamangala Taluk": "ನೆಲಮಂಗಲ ತಾಲೂಕು",
        "Pregnant - 2nd Trimester": "ಗರ್ಭಿಣಿ - 2ನೇ ತ್ರೈಮಾಸಿಕ",
        "TB Treatment Ongoing": "ಟಿಬಿ ಚಿಕಿತ್ಸೆ ನಡೆಯುತ್ತಿದೆ",
        "Hypertension Check": "ಅಧಿಕ ರಕ್ತದೊತ್ತಡ ತಪಾಸಣೆ",
        "CBAC Health Assessment": "CBAC ಆರೋಗ್ಯ ಮೌಲ್ಯಮಾಪನ",
        "Community Based Assessment Checklist for NCDs": "ಅಸಾಂಕ್ರಾಮಿಕ ಕಾಯಿಲೆಗಳಿಗಾಗಿ ಸಮುದಾಯ ಆಧಾರಿತ ಮೌಲ್ಯಮಾಪನ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ",
        "Patient Name": "ರೋಗಿಯ ಹೆಸರು",
        "Village / Sector": "ಗ್ರಾಮ / ವಲಯ",
        "Age (Years)": "ವಯಸ್ಸು (ವರ್ಷಗಳು)",
        "Gender": "ಲಿಂಗ",
        "Select Gender": "ಲಿಂಗವನ್ನು ಆರಿಸಿ",
        "Male": "ಪುರುಷ",
        "Female": "ಮಹಿಳೆ",
        "Vitals": "ವೈಟಲ್ಸ್ (Vitals)",
        "Blood Pressure (e.g. 120/80)": "ರಕ್ತದೊತ್ತಡ (ಉದಾ. 120/80)",
        "Systolic/Diastolic": "ಸಿಸ್ಟೊಲಿಕ್/ಡಯಾಸ್ಟೊಲಿಕ್",
        "Random Blood Sugar (mg/dL)": "ರಕ್ತದ ಸಕ್ಕರೆ ಮಟ್ಟ (mg/dL)",
        "Risk Factors (Scoring)": "ಅಪಾಯದ ಅಂಶಗಳು (ಸ್ಕೋರಿಂಗ್)",
        "Tobacco Use": "ತಂಬಾಕು ಬಳಕೆ",
        "Never (0 pts)": "ಎಂದಿಗೂ ಇಲ್ಲ (0 ಅಂಕಗಳು)",
        "Past / Sometimes (1 pt)": "ಹಿಂದೆ / ಕೆಲವೊಮ್ಮೆ (1 ಅಂಕ)",
        "Daily (2 pts)": "ಪ್ರತಿದಿನ (2 ಅಂಕಗಳು)",
        "Alcohol Consumption": "ಮದ್ಯಪಾನ",
        "No (0 pts)": "ಇಲ್ಲ (0 ಅಂಕಗಳು)",
        "Yes (1 pt)": "ಹೌದು (1 ಅಂಕ)",
        "Waist Circumference (cm)": "ಸೊಂಟದ ಸುತ್ತಳತೆ (ಸೆಂ.ಮೀ)",
        "Enter in cm": "ಸೆಂ.ಮೀ ನಲ್ಲಿ ನಮೂದಿಸಿ",
        "Physical Activity (Per Week)": "ದೈಹಿಕ ಚಟುವಟಿಕೆ (ವಾರಕ್ಕೆ)",
        "150 mins or more (0 pts)": "150 ನಿಮಿಷ ಅಥವಾ ಹೆಚ್ಚು (0 ಅಂಕಗಳು)",
        "Less than 150 mins (1 pt)": "150 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ (1 ಅಂಕ)",
        "Family History (BP/Diabetes/Heart)": "ಕುಟುಂಬದ ಇತಿಹಾಸ (ಬಿಪಿ/ಮಧುಮೇಹ/ಹೃದಯ)",
        "Yes (2 pts)": "ಹೌದು (2 ಅಂಕಗಳು)",
        "Calculate Score & Save Patient": "ಸ್ಕೋರ್ ಲೆಕ್ಕ ಹಾಕಿ ಮತ್ತು ರೋಗಿಯ ವಿವರ ಉಳಿಸಿ",
        "Payments & Incentives": "ಪಾವತಿಗಳು ಮತ್ತು ಪ್ರೋತ್ಸಾಹಧನ",
        "Claim your pending incentives via OTP verification.": "OTP ಪರಿಶೀಲನೆಯ ಮೂಲಕ ನಿಮ್ಮ ಬಾಕಿ ಇರುವ ಪ್ರೋತ್ಸಾಹಧನವನ್ನು ಪಡೆಯಿರಿ.",
        "Claim Incentive": "ಪ್ರೋತ್ಸಾಹಧನ ಪಡೆಯಿರಿ",
        "Pending": "ಬಾಕಿ ಇದೆ",
        "Credited": "ಜಮಾ ಮಾಡಲಾಗಿದೆ",
        "Enter OTP": "OTP ನಮೂದಿಸಿ",
        "Verify": "ಪರಿಶೀಲಿಸಿ",
        "Routine Immunization Drive": "ನಿಯಮಿತ ಲಸಿಕಾ ಅಭಿಯಾನ",
        "TB Patient DOTS Provider": "ಟಿಬಿ ರೋಗಿ ಡಾಟ್ಸ್ ಪೂರೈಕೆದಾರ",
        "NCD Screening (Ward 4)": "NCD ಸ್ಕ್ರೀನಿಂಗ್ (ವಾರ್ಡ್ 4)"
    }
};







    function t(key) {
        return (dictionary[currentLang] && dictionary[currentLang][key]) || key;
    }

    function translateStaticUI() {
        if (currentLang === 'en') return;
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        let node;
        while (node = walker.nextNode()) {
            const text = node.nodeValue.trim();
            if (dictionary[currentLang][text]) {
                node.nodeValue = node.nodeValue.replace(text, dictionary[currentLang][text]);
            }
        }
        document.querySelectorAll('input[placeholder]').forEach(input => {
            const pText = input.getAttribute('placeholder');
            if (dictionary[currentLang][pText]) {
                input.setAttribute('placeholder', dictionary[currentLang][pText]);
            }
        });
        document.querySelectorAll('select option').forEach(option => {
            const oText = option.textContent.trim();
            if (dictionary[currentLang][oText]) {
                option.textContent = dictionary[currentLang][oText];
            }
        });
    }






    document.addEventListener('DOMContentLoaded', () => {
        translateStaticUI();

        const healthForm = document.getElementById('healthForm');
        const scoreResult = document.getElementById('scoreResult');

        healthForm?.addEventListener('submit', (e) => {
            e.preventDefault(); // STOP the page from refreshing


            const age = parseInt(document.getElementById('age').value);
            const tobaccoScore = parseInt(document.getElementById('tobacco').value);
            const alcoholScore = parseInt(document.getElementById('alcohol').value);
            const waist = parseInt(document.getElementById('waist').value);
            const activityScore = parseInt(document.getElementById('activity').value);
            const historyScore = parseInt(document.getElementById('history').value);
            const gender = document.getElementById('gender').value;


            let totalScore = 0;

            if (age >= 50) totalScore += 3;
            else if (age >= 40) totalScore += 2;
            else if (age >= 30) totalScore += 1;

            if (gender === 'male' && waist > 90) totalScore += 2;
            else if (gender === 'female' && waist > 80) totalScore += 2;


            totalScore += tobaccoScore + alcoholScore + activityScore + historyScore;

            let risk = "Low";
            let bgColor = "#e8f5e9"; 
            let textColor = "#2e7d32";

            if (totalScore >= 4) {
                risk = "High";
                bgColor = "#ffebee"; 
                textColor = "#c62828";
            } 
            
            else if (totalScore >= 3) {
                risk = "Medium";
                bgColor = "#fff3e0"; // 
                textColor = "#ef6c00";
            }
            


            document.getElementById('finalScoreText').textContent = `Total Score: ${totalScore}`;
            const riskText = document.getElementById('riskCategoryText');
            riskText.textContent = `Risk Level: ${risk}`;
            
            scoreResult.style.display = "block";
            scoreResult.style.backgroundColor = bgColor;
            scoreResult.style.color = textColor;


            const newPatient = {
                id: Date.now(),
                name: document.getElementById('patientName').value,
                age: age,
                village: document.getElementById('patientVillage').value,
                status: "NCD Screening Done",
                risk: risk,
                score: totalScore
            };

            patients.unshift(newPatient);
            renderPatients(); 
            updateDashboardStats(); 

            alert("Assessment saved successfully!");
            healthForm.reset();
        });


    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');

    menuToggle?.addEventListener('click', () => {
        sidebar?.classList.toggle('show');
    });

    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navButtons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            btn.classList.add('active');
            const target = btn.getAttribute('data-section');
            const targetSection = document.querySelector(`.section[data-section="${target}"]`);
            if (targetSection) targetSection.classList.add('active');
            if (window.innerWidth <= 768) sidebar?.classList.remove('show');
        });
    });




    const storedUserData = localStorage.getItem("currentUser");
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('dashName').textContent = userData.name;
    } else {
        window.location.href = "index.html";
    }

    let patients = [
        { id: 1, name: "Radha Sharma", age: 28, village: "Anekal Taluk", status: "Pregnant - 2nd Trimester", risk: "Low", score: 1 },
        { id: 2, name: "Suresh Kumar", age: 45, village: "Devanahalli Taluk", status: "TB Treatment Ongoing", risk: "Medium", score: 3 },
        { id: 3, name: "Ramesh Patel", age: 55, village: "Nelamangala Taluk", status: "Hypertension Check", risk: "High", score: 6 }
    ];

    let payments = [
        { id: 101, task: "Routine Immunization Drive", amount: 1500, status: "Credited" },
        { id: 102, task: "TB Patient DOTS Provider", amount: 1000, status: "Pending" },
        { id: 103, task: "NCD Screening (Ward 4)", amount: 500, status: "Pending" }
    ];


    function updateDashboardStats() {
        const totalCredited = payments.filter(p => p.status === 'Credited').reduce((sum, p) => sum + p.amount, 0);
        const highRiskCount = patients.filter(p => p.risk === 'High').length;
        document.getElementById('dashEarnings').textContent = `₹${totalCredited.toLocaleString('en-IN')}`;
        document.getElementById('dashHighRisk').textContent = highRiskCount;
    }




    function renderPatients(list = patients) {
        const patientListEl = document.getElementById('patientList');
        if (!patientListEl) return;
        patientListEl.innerHTML = '';
        list.forEach(patient => {
            let borderStyle = patient.risk === "High" ? "2px solid #ee1f1f" : "1px solid #ddd";
            const card = document.createElement('div');
            card.className = 'patient-card';
            card.style.border = borderStyle;
            card.innerHTML = `
                <h3>${t(patient.name)}</h3>
                <p><strong>${t("Age")}:</strong> ${patient.age}</p>
                <p><strong>${t("Village")}:</strong> ${t(patient.village)}</p>
                <p><strong>${t("Status")}:</strong> ${t(patient.status)}</p>
                <div style="margin-top:10px; font-weight:bold;">
                    ${t("Risk")}: ${t(patient.risk)} (${t("Score")}: ${patient.score})
                </div>`;
            patientListEl.appendChild(card);
        });
    }




    const searchInput = document.getElementById('patientSearch');
    searchInput?.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = patients.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.village.toLowerCase().includes(term) || 
            p.status.toLowerCase().includes(term)
        );
        renderPatients(filtered);
    });




    function renderPayments() {
        const paymentHistoryEl = document.getElementById('paymentHistory');
        if (!paymentHistoryEl) return;
        paymentHistoryEl.innerHTML = '';
        payments.forEach(payment => {
            const card = document.createElement('div');
            card.className = 'payment-card';
            let statusColor = payment.status === 'Pending' ? '#f57c00' : '#388e3c';
            let actionHtml = payment.status === 'Pending' ? `<div id="actionBox-${payment.id}"><button class="claim-btn" onclick="startOtpFlow(${payment.id})">${t("Claim Incentive")}</button></div>` : '';
            card.innerHTML = `
                <div class="payment-info">
                <h4>${t(payment.task)}</h4>
                <p>${t("Status")}: <span style="color: ${statusColor}">${t(payment.status)}</span></p>
                </div>
                <div class="amount" style="color: ${statusColor}">₹${payment.amount}</div>
                ${actionHtml}`;
            paymentHistoryEl.appendChild(card);
        });
    }



    updateDashboardStats();
    renderPatients();
    renderPayments();

    window.startOtpFlow = function(paymentId) {
        const simOtp = Math.floor(1000 + Math.random() * 9000);
        alert(`OTP: ${simOtp}`);
        document.getElementById(`actionBox-${paymentId}`).innerHTML = `
            <input type="text" id="otpInput-${paymentId}" placeholder="${t("Enter OTP")}" maxlength="4" style="width:80px; padding:5px;">
            <button onclick="verifyOtp(${paymentId}, ${simOtp})" style="padding:5px;">${t("Verify")}</button>`;
    };

    window.verifyOtp = function(paymentId, correctOtp) {
    const input = document.getElementById(`otpInput-${paymentId}`);


        if(parseInt(input.value) === correctOtp) {
        const pay = payments.find(p => p.id === paymentId);
            if(pay) pay.status = "Credited";
            renderPayments();
            updateDashboardStats();
        } 
        
        else {
            alert("Wrong OTP!");
        }
    };



    document.getElementById('logout')?.addEventListener('click', () => {
        localStorage.removeItem("currentUser");
        window.location.href = "home.html";
    });
});