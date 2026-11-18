
/* =====================================================
   FUTURELAB KIDS
   COMPLETE CENTRAL MULTI-LANGUAGE SYSTEM
   12 LANGUAGES
   File: language.js
===================================================== */

(function () {
"use strict";

const STORAGE_KEY = "futurelabLanguage";

const languages = {
    en: "English",
    bn: "বাংলা",
    zh: "中文",
    hi: "हिन्दी",
    es: "Español",
    ar: "العربية",
    fr: "Français",
    pt: "Português",
    ru: "Русский",
    ur: "اردو",
    id: "Indonesia",
    ja: "日本語"
};

const translations = {

/* ================= ENGLISH ================= */

en: {
welcome:"Your Future Starts Here!",
welcomeText:"Explore, build and discover amazing things.",
start:"START ADVENTURE",
language:"Language",
achievements:"Achievements",
progress:"My Progress",
help:"Help Center",
tagline:"BUILD • DISCOVER • INVENT",
learnBuildTestCreate:"Learn • Build • Test • Create",
explore:"Explore the World of Innovation",
chooseCategory:"Choose a world and start your adventure!",
engineering:"Engineering World",
engineeringDesc:"Build vehicles and machines",
aviation:"Aviation & Pilot",
aviationDesc:"Explore aircraft",
computer:"Computer Science & Technology",
computerDesc:"Build computers",
medical:"Medical Science & Technology",
medicalDesc:"Discover medical machines",
space:"Space & Science",
spaceDesc:"Explore the universe",
agriculture:"Agriculture World",
agricultureDesc:"Explore farming machines",
sports:"Sports World",
sportsDesc:"Explore fitness equipment",
juniorBuilder:"Junior Builder",
juniorIntro:"Build your own amazing vehicles!",
aviationWorld:"Aviation World",
aviationIntro:"Build aircraft and discover aviation!",
computerTitle:"Computer Technology",
computerIntro:"Discover computer hardware and technology!",
medicalTitle:"Medical Science",
medicalIntro:"Discover medical machines and equipment!",
spaceTitle:"Space & Science",
spaceIntro:"Explore rockets and space technology!",
agricultureTitle:"Agriculture World",
agricultureIntro:"Build machines for modern farming!",
sportsTitle:"Sports World",
sportsIntro:"Explore fitness and sports equipment!",
progressTitle:"My Progress",
learningJourney:"Your Learning Journey",
completedProjects:"Completed Projects",
keepBuilding:"Keep building and exploring!",
achievementsTitle:"Your Achievements",
achievementStart:"Start building to earn achievements!",
achievementDone:"You have completed {count} project(s)!",
helpTitle:"Welcome to FutureLab Kids!",
helpChoose:"Choose a category and open a Builder.",
helpFollow:"Follow the instructions in each project.",
helpComplete:"Complete the required activities to unlock the next Builder.",
helpSaved:"Your progress is saved on your device.",
settingsTitle:"Settings",
languageSettings:"Language Settings",
changeLanguage:"Change Language",
selectLanguage:"Select Language",
choosePreferred:"Choose your preferred language",
close:"Close",
completed:"Completed",
completePrevious:"Complete the previous builder first!",
sportsCar:"Sports Car Builder",
jeep:"Jeep Builder",
bus:"Volvo AC Bus",
train:"Train Builder",
helicopter:"Helicopter Builder",
airplane:"Airplane Builder",
bomber:"Bomber Builder",
fighterJet:"Fighter Jet Builder",
laptopBuilder:"Laptop Builder",
desktopBuilder:"Desktop PC Builder",
xray:"X-Ray Machine",
ultrasound:"Ultrasound Machine",
ctScan:"CT Scan Machine",
eeg:"EEG Machine",
dental:"Dental Equipment",
eye:"Eye Examination Equipment",
rocketBuilder:"Rocket Builder",
satelliteBuilder:"Satellite Builder",
miniTractor:"Mini Tractor Builder",
powerTiller:"Power Tiller Builder",
treadmill:"Treadmill Builder",
fiveStationGym:"Five Station Gym"
},

/* ================= BANGLA ================= */

bn: {
welcome:"আপনার ভবিষ্যৎ শুরু হোক এখান থেকে!",
welcomeText:"নতুন কিছু জানুন, তৈরি করুন এবং আবিষ্কার করুন।",
start:"অ্যাডভেঞ্চার শুরু করুন",
language:"ভাষা",
achievements:"অর্জনসমূহ",
progress:"আমার অগ্রগতি",
help:"সাহায্য কেন্দ্র",
tagline:"তৈরি করুন • আবিষ্কার করুন • উদ্ভাবন করুন",
learnBuildTestCreate:"শিখুন • তৈরি করুন • পরীক্ষা করুন • আবিষ্কার করুন",
explore:"উদ্ভাবনের জগৎ ঘুরে দেখুন",
chooseCategory:"আপনার পছন্দের জগৎ নির্বাচন করুন!",
engineering:"ইঞ্জিনিয়ারিং বিশ্ব",
engineeringDesc:"যানবাহন ও মেশিন তৈরি করুন",
aviation:"বিমান ও পাইলট",
aviationDesc:"বিমান সম্পর্কে জানুন",
computer:"কম্পিউটার বিজ্ঞান ও প্রযুক্তি",
computerDesc:"কম্পিউটার তৈরি করুন",
medical:"মেডিকেল বিজ্ঞান ও প্রযুক্তি",
medicalDesc:"চিকিৎসা যন্ত্রপাতি সম্পর্কে জানুন",
space:"মহাকাশ ও বিজ্ঞান",
spaceDesc:"মহাবিশ্ব ঘুরে দেখুন",
agriculture:"কৃষি বিশ্ব",
agricultureDesc:"কৃষিকাজের মেশিন সম্পর্কে জানুন",
sports:"খেলাধুলার বিশ্ব",
sportsDesc:"ফিটনেস সরঞ্জাম সম্পর্কে জানুন",
juniorBuilder:"জুনিয়র বিল্ডার",
juniorIntro:"নিজের পছন্দের যানবাহন তৈরি করুন!",
aviationWorld:"এভিয়েশন বিশ্ব",
aviationIntro:"বিমান তৈরি করুন এবং বিমান সম্পর্কে জানুন!",
computerTitle:"কম্পিউটার প্রযুক্তি",
computerIntro:"কম্পিউটারের যন্ত্রাংশ ও প্রযুক্তি সম্পর্কে জানুন!",
medicalTitle:"মেডিকেল বিজ্ঞান",
medicalIntro:"চিকিৎসা যন্ত্রপাতি সম্পর্কে জানুন!",
spaceTitle:"মহাকাশ ও বিজ্ঞান",
spaceIntro:"রকেট ও মহাকাশ প্রযুক্তি সম্পর্কে জানুন!",
agricultureTitle:"কৃষি বিশ্ব",
agricultureIntro:"আধুনিক কৃষির জন্য মেশিন তৈরি করুন!",
sportsTitle:"খেলাধুলার বিশ্ব",
sportsIntro:"ফিটনেস ও খেলাধুলার সরঞ্জাম সম্পর্কে জানুন!",
progressTitle:"আমার অগ্রগতি",
learningJourney:"আপনার শেখার যাত্রা",
completedProjects:"সম্পন্ন প্রজেক্ট",
keepBuilding:"তৈরি করতে থাকুন এবং নতুন কিছু শিখুন!",
achievementsTitle:"আপনার অর্জনসমূহ",
achievementStart:"অর্জন পেতে বিল্ডার তৈরি করা শুরু করুন!",
achievementDone:"আপনি {count}টি প্রজেক্ট সম্পন্ন করেছেন!",
helpTitle:"FutureLab Kids-এ স্বাগতম!",
helpChoose:"একটি বিভাগ নির্বাচন করে বিল্ডার খুলুন।",
helpFollow:"প্রতিটি প্রজেক্টের নির্দেশনা অনুসরণ করুন।",
helpComplete:"পরবর্তী বিল্ডার আনলক করতে প্রয়োজনীয় কাজ সম্পন্ন করুন।",
helpSaved:"আপনার অগ্রগতি ডিভাইসে সংরক্ষিত থাকে।",
settingsTitle:"সেটিংস",
languageSettings:"ভাষার সেটিংস",
changeLanguage:"ভাষা পরিবর্তন করুন",
selectLanguage:"ভাষা নির্বাচন করুন",
choosePreferred:"আপনার পছন্দের ভাষা নির্বাচন করুন",
close:"বন্ধ করুন",
completed:"সম্পন্ন হয়েছে",
completePrevious:"আগে আগের বিল্ডারটি সম্পন্ন করুন!",
sportsCar:"স্পোর্টস কার বিল্ডার",
jeep:"জিপ বিল্ডার",
bus:"ভলভো এসি বাস",
train:"ট্রেন বিল্ডার",
helicopter:"হেলিকপ্টার বিল্ডার",
airplane:"বিমান বিল্ডার",
bomber:"বোমারু বিমান বিল্ডার",
fighterJet:"ফাইটার জেট বিল্ডার",
laptopBuilder:"ল্যাপটপ বিল্ডার",
desktopBuilder:"ডেস্কটপ পিসি বিল্ডার",
xray:"এক্স-রে মেশিন",
ultrasound:"আল্ট্রাসাউন্ড মেশিন",
ctScan:"সিটি স্ক্যান মেশিন",
eeg:"ইইজি মেশিন",
dental:"দাঁতের চিকিৎসার সরঞ্জাম",
eye:"চোখ পরীক্ষার সরঞ্জাম",
rocketBuilder:"রকেট বিল্ডার",
satelliteBuilder:"স্যাটেলাইট বিল্ডার",
miniTractor:"মিনি ট্রাক্টর বিল্ডার",
powerTiller:"পাওয়ার টিলার বিল্ডার",
treadmill:"ট্রেডমিল বিল্ডার",
fiveStationGym:"ফাইভ স্টেশন জিম"
},

/* ================= CHINESE ================= */

zh: {
welcome:"你的未来从这里开始！",
welcomeText:"探索、建造并发现精彩事物。",
start:"开始冒险",
language:"语言",
achievements:"成就",
progress:"我的进度",
help:"帮助中心",
tagline:"建造 • 探索 • 创新",
learnBuildTestCreate:"学习 • 建造 • 测试 • 创造",
explore:"探索创新世界",
chooseCategory:"选择一个世界，开始你的冒险！",
engineering:"工程世界",
engineeringDesc:"建造车辆和机器",
aviation:"航空与飞行员",
aviationDesc:"探索飞机",
computer:"计算机科学与技术",
computerDesc:"组装电脑",
medical:"医学科学与技术",
medicalDesc:"探索医疗设备",
space:"太空与科学",
spaceDesc:"探索宇宙",
agriculture:"农业世界",
agricultureDesc:"探索农业机械",
sports:"运动世界",
sportsDesc:"探索健身设备",
juniorBuilder:"初级建造者",
juniorIntro:"建造属于你自己的精彩车辆！",
aviationWorld:"航空世界",
aviationIntro:"建造飞机并探索航空知识！",
computerTitle:"计算机技术",
computerIntro:"探索计算机硬件和技术！",
medicalTitle:"医学科学",
medicalIntro:"探索医疗机器和设备！",
spaceTitle:"太空与科学",
spaceIntro:"探索火箭和太空技术！",
agricultureTitle:"农业世界",
agricultureIntro:"建造现代农业机械！",
sportsTitle:"运动世界",
sportsIntro:"探索健身和运动设备！",
progressTitle:"我的进度",
learningJourney:"你的学习旅程",
completedProjects:"已完成项目",
keepBuilding:"继续建造和探索！",
achievementsTitle:"你的成就",
achievementStart:"开始建造以获得成就！",
achievementDone:"你已经完成了 {count} 个项目！",
helpTitle:"欢迎来到 FutureLab Kids！",
helpChoose:"选择一个类别并打开建造项目。",
helpFollow:"按照每个项目中的说明操作。",
helpComplete:"完成所需活动以解锁下一个项目。",
helpSaved:"你的进度已保存在设备上。",
settingsTitle:"设置",
languageSettings:"语言设置",
changeLanguage:"更改语言",
selectLanguage:"选择语言",
choosePreferred:"选择你喜欢的语言",
close:"关闭",
completed:"已完成",
completePrevious:"请先完成上一个建造项目！",
sportsCar:"跑车建造",
jeep:"吉普车建造",
bus:"沃尔沃空调巴士",
train:"火车建造",
helicopter:"直升机建造",
airplane:"飞机建造",
bomber:"轰炸机建造",
fighterJet:"战斗机建造",
laptopBuilder:"笔记本电脑建造",
desktopBuilder:"台式电脑建造",
xray:"X光机",
ultrasound:"超声波设备",
ctScan:"CT扫描仪",
eeg:"脑电图设备",
dental:"牙科设备",
eye:"眼科检查设备",
rocketBuilder:"火箭建造",
satelliteBuilder:"卫星建造",
miniTractor:"迷你拖拉机建造",
powerTiller:"动力耕耘机建造",
treadmill:"跑步机建造",
fiveStationGym:"五站式健身器材"
},

/* ================= HINDI ================= */

hi: {
welcome:"आपका भविष्य यहाँ से शुरू होता है!",
welcomeText:"खोजें, बनाएँ और नई चीज़ें जानें।",
start:"रोमांच शुरू करें",
language:"भाषा",
achievements:"उपलब्धियाँ",
progress:"मेरी प्रगति",
help:"सहायता केंद्र",
tagline:"बनाएँ • खोजें • आविष्कार करें",
learnBuildTestCreate:"सीखें • बनाएँ • जाँचें • रचें",
explore:"नवाचार की दुनिया देखें",
chooseCategory:"अपनी पसंद की दुनिया चुनें!",
engineering:"इंजीनियरिंग की दुनिया",
engineeringDesc:"वाहन और मशीनें बनाएँ",
aviation:"विमानन और पायलट",
aviationDesc:"विमानों की खोज करें",
computer:"कंप्यूटर विज्ञान और तकनीक",
computerDesc:"कंप्यूटर बनाएँ",
medical:"चिकित्सा विज्ञान और तकनीक",
medicalDesc:"चिकित्सा मशीनों को जानें",
space:"अंतरिक्ष और विज्ञान",
spaceDesc:"ब्रह्मांड की खोज करें",
agriculture:"कृषि की दुनिया",
agricultureDesc:"कृषि मशीनों को जानें",
sports:"खेल की दुनिया",
sportsDesc:"फिटनेस उपकरण देखें",
juniorBuilder:"जूनियर बिल्डर",
juniorIntro:"अपनी शानदार गाड़ियाँ बनाएँ!",
aviationWorld:"विमानन की दुनिया",
aviationIntro:"विमान बनाएँ और विमानन सीखें!",
computerTitle:"कंप्यूटर तकनीक",
computerIntro:"कंप्यूटर हार्डवेयर और तकनीक जानें!",
medicalTitle:"चिकित्सा विज्ञान",
medicalIntro:"चिकित्सा मशीनों और उपकरणों को जानें!",
spaceTitle:"अंतरिक्ष और विज्ञान",
spaceIntro:"रॉकेट और अंतरिक्ष तकनीक की खोज करें!",
agricultureTitle:"कृषि की दुनिया",
agricultureIntro:"आधुनिक खेती के लिए मशीनें बनाएँ!",
sportsTitle:"खेल की दुनिया",
sportsIntro:"फिटनेस और खेल उपकरण देखें!",
progressTitle:"मेरी प्रगति",
learningJourney:"आपकी सीखने की यात्रा",
completedProjects:"पूरे किए गए प्रोजेक्ट",
keepBuilding:"बनाते रहें और नई चीजें खोजें!",
achievementsTitle:"आपकी उपलब्धियाँ",
achievementStart:"उपलब्धियाँ पाने के लिए निर्माण शुरू करें!",
achievementDone:"आपने {count} प्रोजेक्ट पूरे किए हैं!",
helpTitle:"FutureLab Kids में आपका स्वागत है!",
helpChoose:"एक श्रेणी चुनें और बिल्डर खोलें।",
helpFollow:"हर प्रोजेक्ट के निर्देशों का पालन करें।",
helpComplete:"अगला बिल्डर खोलने के लिए आवश्यक गतिविधियाँ पूरी करें।",
helpSaved:"आपकी प्रगति आपके डिवाइस में सहेजी जाती है।",
settingsTitle:"सेटिंग्स",
languageSettings:"भाषा सेटिंग्स",
changeLanguage:"भाषा बदलें",
selectLanguage:"भाषा चुनें",
choosePreferred:"अपनी पसंदीदा भाषा चुनें",
close:"बंद करें",
completed:"पूरा हुआ",
completePrevious:"पहले पिछला बिल्डर पूरा करें!",
sportsCar:"स्पोर्ट्स कार बिल्डर",
jeep:"जीप बिल्डर",
bus:"वोल्वो एसी बस",
train:"ट्रेन बिल्डर",
helicopter:"हेलीकॉप्टर बिल्डर",
airplane:"हवाई जहाज बिल्डर",
bomber:"बॉम्बर बिल्डर",
fighterJet:"फाइटर जेट बिल्डर",
laptopBuilder:"लैपटॉप बिल्डर",
desktopBuilder:"डेस्कटॉप पीसी बिल्डर",
xray:"एक्स-रे मशीन",
ultrasound:"अल्ट्रासाउंड मशीन",
ctScan:"सीटी स्कैन मशीन",
eeg:"ईईजी मशीन",
dental:"दंत चिकित्सा उपकरण",
eye:"आँखों की जाँच के उपकरण",
rocketBuilder:"रॉकेट बिल्डर",
satelliteBuilder:"उपग्रह बिल्डर",
miniTractor:"मिनी ट्रैक्टर बिल्डर",
powerTiller:"पावर टिलर बिल्डर",
treadmill:"ट्रेडमिल बिल्डर",
fiveStationGym:"फाइव स्टेशन जिम"
},

/* ================= SPANISH ================= */

es: {
welcome:"¡Tu futuro comienza aquí!",
welcomeText:"Explora, construye y descubre cosas increíbles.",
start:"COMENZAR AVENTURA",
language:"Idioma",
achievements:"Logros",
progress:"Mi progreso",
help:"Centro de ayuda",
tagline:"CONSTRUIR • DESCUBRIR • INVENTAR",
learnBuildTestCreate:"Aprender • Construir • Probar • Crear",
explore:"Explora el mundo de la innovación",
chooseCategory:"¡Elige un mundo y comienza tu aventura!",
engineering:"Mundo de la ingeniería",
engineeringDesc:"Construye vehículos y máquinas",
aviation:"Aviación y pilotos",
aviationDesc:"Explora aeronaves",
computer:"Ciencia y tecnología informática",
computerDesc:"Construye computadoras",
medical:"Ciencia y tecnología médica",
medicalDesc:"Descubre máquinas médicas",
space:"Espacio y ciencia",
spaceDesc:"Explora el universo",
agriculture:"Mundo agrícola",
agricultureDesc:"Explora máquinas agrícolas",
sports:"Mundo del deporte",
sportsDesc:"Explora equipos de fitness",
juniorBuilder:"Constructor junior",
juniorIntro:"¡Construye tus propios vehículos increíbles!",
aviationWorld:"Mundo de la aviación",
aviationIntro:"¡Construye aeronaves y descubre la aviación!",
computerTitle:"Tecnología informática",
computerIntro:"¡Descubre el hardware y la tecnología informática!",
medicalTitle:"Ciencia médica",
medicalIntro:"¡Descubre máquinas y equipos médicos!",
spaceTitle:"Espacio y ciencia",
spaceIntro:"¡Explora cohetes y tecnología espacial!",
agricultureTitle:"Mundo agrícola",
agricultureIntro:"¡Construye máquinas para la agricultura moderna!",
sportsTitle:"Mundo del deporte",
sportsIntro:"¡Explora equipos deportivos y de fitness!",
progressTitle:"Mi progreso",
learningJourney:"Tu viaje de aprendizaje",
completedProjects:"Proyectos completados",
keepBuilding:"¡Sigue construyendo y explorando!",
achievementsTitle:"Tus logros",
achievementStart:"¡Comienza a construir para conseguir logros!",
achievementDone:"¡Has completado {count} proyecto(s)!",
helpTitle:"¡Bienvenido a FutureLab Kids!",
helpChoose:"Elige una categoría y abre un constructor.",
helpFollow:"Sigue las instrucciones de cada proyecto.",
helpComplete:"Completa las actividades necesarias para desbloquear el siguiente constructor.",
helpSaved:"Tu progreso se guarda en tu dispositivo.",
settingsTitle:"Configuración",
languageSettings:"Configuración de idioma",
changeLanguage:"Cambiar idioma",
selectLanguage:"Seleccionar idioma",
choosePreferred:"Elige tu idioma preferido",
close:"Cerrar",
completed:"Completado",
completePrevious:"¡Completa primero el constructor anterior!",
sportsCar:"Constructor de coches deportivos",
jeep:"Constructor de Jeep",
bus:"Autobús Volvo AC",
train:"Constructor de trenes",
helicopter:"Constructor de helicópteros",
airplane:"Constructor de aviones",
bomber:"Constructor de bombarderos",
fighterJet:"Constructor de cazas",
laptopBuilder:"Constructor de portátiles",
desktopBuilder:"Constructor de PC de escritorio",
xray:"Máquina de rayos X",
ultrasound:"Máquina de ultrasonido",
ctScan:"Máquina de tomografía",
eeg:"Máquina EEG",
dental:"Equipo dental",
eye:"Equipo de examen ocular",
rocketBuilder:"Constructor de cohetes",
satelliteBuilder:"Constructor de satélites",
miniTractor:"Constructor de mini tractores",
powerTiller:"Constructor de motocultores",
treadmill:"Constructor de cintas de correr",
fiveStationGym:"Gimnasio de cinco estaciones"
},

/* ================= ARABIC ================= */

ar: {
welcome:"مستقبلك يبدأ من هنا!",
welcomeText:"استكشف وابنِ واكتشف أشياء رائعة.",
start:"ابدأ المغامرة",
language:"اللغة",
achievements:"الإنجازات",
progress:"تقدمي",
help:"مركز المساعدة",
tagline:"ابنِ • اكتشف • ابتكر",
learnBuildTestCreate:"تعلم • ابنِ • اختبر • ابتكر",
explore:"استكشف عالم الابتكار",
chooseCategory:"اختر عالماً وابدأ مغامرتك!",
engineering:"عالم الهندسة",
engineeringDesc:"ابنِ المركبات والآلات",
aviation:"الطيران والطيارون",
aviationDesc:"استكشف الطائرات",
computer:"علوم الكمبيوتر والتكنولوجيا",
computerDesc:"ابنِ أجهزة الكمبيوتر",
medical:"العلوم والتكنولوجيا الطبية",
medicalDesc:"اكتشف الأجهزة الطبية",
space:"الفضاء والعلوم",
spaceDesc:"استكشف الكون",
agriculture:"عالم الزراعة",
agricultureDesc:"اكتشف الآلات الزراعية",
sports:"عالم الرياضة",
sportsDesc:"اكتشف معدات اللياقة",
juniorBuilder:"البنّاء الصغير",
juniorIntro:"ابنِ مركباتك الرائعة بنفسك!",
aviationWorld:"عالم الطيران",
aviationIntro:"ابنِ الطائرات واكتشف عالم الطيران!",
computerTitle:"تكنولوجيا الكمبيوتر",
computerIntro:"اكتشف مكونات الكمبيوتر والتكنولوجيا!",
medicalTitle:"العلوم الطبية",
medicalIntro:"اكتشف الأجهزة والمعدات الطبية!",
spaceTitle:"الفضاء والعلوم",
spaceIntro:"استكشف الصواريخ وتكنولوجيا الفضاء!",
agricultureTitle:"عالم الزراعة",
agricultureIntro:"ابنِ آلات للزراعة الحديثة!",
sportsTitle:"عالم الرياضة",
sportsIntro:"اكتشف معدات الرياضة واللياقة!",
progressTitle:"تقدمي",
learningJourney:"رحلة التعلم الخاصة بك",
completedProjects:"المشاريع المكتملة",
keepBuilding:"واصل البناء والاستكشاف!",
achievementsTitle:"إنجازاتك",
achievementStart:"ابدأ البناء للحصول على الإنجازات!",
achievementDone:"لقد أكملت {count} مشروعاً!",
helpTitle:"مرحباً بك في FutureLab Kids!",
helpChoose:"اختر فئة وافتح مشروع بناء.",
helpFollow:"اتبع التعليمات في كل مشروع.",
helpComplete:"أكمل الأنشطة المطلوبة لفتح المشروع التالي.",
helpSaved:"يتم حفظ تقدمك على جهازك.",
settingsTitle:"الإعدادات",
languageSettings:"إعدادات اللغة",
changeLanguage:"تغيير اللغة",
selectLanguage:"اختر اللغة",
choosePreferred:"اختر لغتك المفضلة",
close:"إغلاق",
completed:"مكتمل",
completePrevious:"أكمل المشروع السابق أولاً!",
sportsCar:"بناء سيارة رياضية",
jeep:"بناء سيارة جيب",
bus:"حافلة فولفو مكيفة",
train:"بناء قطار",
helicopter:"بناء مروحية",
airplane:"بناء طائرة",
bomber:"بناء قاذفة",
fighterJet:"بناء طائرة مقاتلة",
laptopBuilder:"بناء حاسوب محمول",
desktopBuilder:"بناء كمبيوتر مكتبي",
xray:"جهاز الأشعة السينية",
ultrasound:"جهاز الموجات فوق الصوتية",
ctScan:"جهاز التصوير المقطعي",
eeg:"جهاز تخطيط الدماغ",
dental:"معدات طب الأسنان",
eye:"معدات فحص العين",
rocketBuilder:"بناء صاروخ",
satelliteBuilder:"بناء قمر صناعي",
miniTractor:"بناء جرار صغير",
powerTiller:"بناء محراث آلي",
treadmill:"جهاز المشي",
fiveStationGym:"جهاز رياضي بخمس محطات"
},

/* ================= FRENCH ================= */

fr: {
welcome:"Votre avenir commence ici !",
welcomeText:"Explorez, construisez et découvrez des choses incroyables.",
start:"COMMENCER L'AVENTURE",
language:"Langue",
achievements:"Réalisations",
progress:"Ma progression",
help:"Centre d'aide",
tagline:"CONSTRUIRE • DÉCOUVRIR • INVENTER",
learnBuildTestCreate:"Apprendre • Construire • Tester • Créer",
explore:"Explorez le monde de l'innovation",
chooseCategory:"Choisissez un monde et commencez votre aventure !",
engineering:"Monde de l'ingénierie",
engineeringDesc:"Construisez des véhicules et des machines",
aviation:"Aviation et pilotes",
aviationDesc:"Explorez les aéronefs",
computer:"Informatique et technologie",
computerDesc:"Construisez des ordinateurs",
medical:"Sciences et technologies médicales",
medicalDesc:"Découvrez les machines médicales",
space:"Espace et sciences",
spaceDesc:"Explorez l'univers",
agriculture:"Monde agricole",
agricultureDesc:"Découvrez les machines agricoles",
sports:"Monde du sport",
sportsDesc:"Découvrez les équipements de fitness",
juniorBuilder:"Constructeur junior",
juniorIntro:"Construisez vos propres véhicules incroyables !",
aviationWorld:"Monde de l'aviation",
aviationIntro:"Construisez des avions et découvrez l'aviation !",
computerTitle:"Technologie informatique",
computerIntro:"Découvrez le matériel et la technologie informatique !",
medicalTitle:"Sciences médicales",
medicalIntro:"Découvrez les machines et équipements médicaux !",
spaceTitle:"Espace et sciences",
spaceIntro:"Explorez les fusées et la technologie spatiale !",
agricultureTitle:"Monde agricole",
agricultureIntro:"Construisez des machines pour l'agriculture moderne !",
sportsTitle:"Monde du sport",
sportsIntro:"Découvrez les équipements sportifs et de fitness !",
progressTitle:"Ma progression",
learningJourney:"Votre parcours d'apprentissage",
completedProjects:"Projets terminés",
keepBuilding:"Continuez à construire et à explorer !",
achievementsTitle:"Vos réalisations",
achievementStart:"Commencez à construire pour gagner des récompenses !",
achievementDone:"Vous avez terminé {count} projet(s) !",
helpTitle:"Bienvenue dans FutureLab Kids !",
helpChoose:"Choisissez une catégorie et ouvrez un constructeur.",
helpFollow:"Suivez les instructions de chaque projet.",
helpComplete:"Terminez les activités requises pour débloquer le constructeur suivant.",
helpSaved:"Votre progression est enregistrée sur votre appareil.",
settingsTitle:"Paramètres",
languageSettings:"Paramètres de langue",
changeLanguage:"Changer de langue",
selectLanguage:"Choisir la langue",
choosePreferred:"Choisissez votre langue préférée",
close:"Fermer",
completed:"Terminé",
completePrevious:"Terminez d'abord le constructeur précédent !",
sportsCar:"Constructeur de voiture de sport",
jeep:"Constructeur de Jeep",
bus:"Bus Volvo climatisé",
train:"Constructeur de train",
helicopter:"Constructeur d'hélicoptère",
airplane:"Constructeur d'avion",
bomber:"Constructeur de bombardier",
fighterJet:"Constructeur d'avion de chasse",
laptopBuilder:"Constructeur d'ordinateur portable",
desktopBuilder:"Constructeur de PC de bureau",
xray:"Appareil à rayons X",
ultrasound:"Appareil à ultrasons",
ctScan:"Scanner CT",
eeg:"Appareil EEG",
dental:"Équipement dentaire",
eye:"Équipement d'examen des yeux",
rocketBuilder:"Constructeur de fusée",
satelliteBuilder:"Constructeur de satellite",
miniTractor:"Constructeur de mini-tracteur",
powerTiller:"Constructeur de motoculteur",
treadmill:"Constructeur de tapis roulant",
fiveStationGym:"Appareil de musculation cinq postes"
},

/* ================= PORTUGUESE ================= */

pt: {
welcome:"Seu futuro começa aqui!",
welcomeText:"Explore, construa e descubra coisas incríveis.",
start:"COMEÇAR A AVENTURA",
language:"Idioma",
achievements:"Conquistas",
progress:"Meu progresso",
help:"Central de ajuda",
tagline:"CONSTRUIR • DESCOBRIR • INVENTAR",
learnBuildTestCreate:"Aprender • Construir • Testar • Criar",
explore:"Explore o mundo da inovação",
chooseCategory:"Escolha um mundo e comece sua aventura!",
engineering:"Mundo da engenharia",
engineeringDesc:"Construa veículos e máquinas",
aviation:"Aviação e pilotos",
aviationDesc:"Explore aeronaves",
computer:"Ciência da computação e tecnologia",
computerDesc:"Construa computadores",
medical:"Ciência e tecnologia médica",
medicalDesc:"Descubra máquinas médicas",
space:"Espaço e ciência",
spaceDesc:"Explore o universo",
agriculture:"Mundo agrícola",
agricultureDesc:"Explore máquinas agrícolas",
sports:"Mundo dos esportes",
sportsDesc:"Explore equipamentos de fitness",
juniorBuilder:"Construtor júnior",
juniorIntro:"Construa seus próprios veículos incríveis!",
aviationWorld:"Mundo da aviação",
aviationIntro:"Construa aeronaves e descubra a aviação!",
computerTitle:"Tecnologia de computadores",
computerIntro:"Descubra o hardware e a tecnologia dos computadores!",
medicalTitle:"Ciência médica",
medicalIntro:"Descubra máquinas e equipamentos médicos!",
spaceTitle:"Espaço e ciência",
spaceIntro:"Explore foguetes e tecnologia espacial!",
agricultureTitle:"Mundo agrícola",
agricultureIntro:"Construa máquinas para a agricultura moderna!",
sportsTitle:"Mundo dos esportes",
sportsIntro:"Explore equipamentos esportivos e de fitness!",
progressTitle:"Meu progresso",
learningJourney:"Sua jornada de aprendizagem",
completedProjects:"Projetos concluídos",
keepBuilding:"Continue construindo e explorando!",
achievementsTitle:"Suas conquistas",
achievementStart:"Comece a construir para ganhar conquistas!",
achievementDone:"Você concluiu {count} projeto(s)!",
helpTitle:"Bem-vindo ao FutureLab Kids!",
helpChoose:"Escolha uma categoria e abra um construtor.",
helpFollow:"Siga as instruções de cada projeto.",
helpComplete:"Conclua as atividades necessárias para desbloquear o próximo construtor.",
helpSaved:"Seu progresso é salvo no seu dispositivo.",
settingsTitle:"Configurações",
languageSettings:"Configurações de idioma",
changeLanguage:"Alterar idioma",
selectLanguage:"Selecionar idioma",
choosePreferred:"Escolha seu idioma preferido",
close:"Fechar",
completed:"Concluído",
completePrevious:"Conclua o construtor anterior primeiro!",
sportsCar:"Construtor de carros esportivos",
jeep:"Construtor de Jeep",
bus:"Ônibus Volvo com ar-condicionado",
train:"Construtor de trens",
helicopter:"Construtor de helicóptero",
airplane:"Construtor de avião",
bomber:"Construtor de bombardeiro",
fighterJet:"Construtor de caça",
laptopBuilder:"Construtor de laptop",
desktopBuilder:"Construtor de PC desktop",
xray:"Máquina de raio-X",
ultrasound:"Máquina de ultrassom",
ctScan:"Máquina de tomografia",
eeg:"Máquina de EEG",
dental:"Equipamentos odontológicos",
eye:"Equipamentos para exame ocular",
rocketBuilder:"Construtor de foguetes",
satelliteBuilder:"Construtor de satélites",
miniTractor:"Construtor de mini trator",
powerTiller:"Construtor de motocultivador",
treadmill:"Construtor de esteira",
fiveStationGym:"Academia de cinco estações"
},

/* ================= RUSSIAN ================= */

ru: {
welcome:"Твоё будущее начинается здесь!",
welcomeText:"Исследуй, создавай и открывай удивительные вещи.",
start:"НАЧАТЬ ПРИКЛЮЧЕНИЕ",
language:"Язык",
achievements:"Достижения",
progress:"Мой прогресс",
help:"Центр помощи",
tagline:"СОЗДАВАЙ • ИССЛЕДУЙ • ИЗОБРЕТАЙ",
learnBuildTestCreate:"Учись • Строй • Проверяй • Создавай",
explore:"Исследуй мир инноваций",
chooseCategory:"Выбери мир и начни своё приключение!",
engineering:"Мир инженерии",
engineeringDesc:"Создавай транспорт и машины",
aviation:"Авиация и пилоты",
aviationDesc:"Изучай летательные аппараты",
computer:"Информатика и технологии",
computerDesc:"Собирай компьютеры",
medical:"Медицинская наука и технологии",
medicalDesc:"Изучай медицинские аппараты",
space:"Космос и наука",
spaceDesc:"Исследуй Вселенную",
agriculture:"Мир сельского хозяйства",
agricultureDesc:"Изучай сельскохозяйственные машины",
sports:"Мир спорта",
sportsDesc:"Изучай фитнес-оборудование",
juniorBuilder:"Юный конструктор",
juniorIntro:"Создавай собственные удивительные автомобили!",
aviationWorld:"Мир авиации",
aviationIntro:"Создавай самолёты и изучай авиацию!",
computerTitle:"Компьютерные технологии",
computerIntro:"Изучай компьютерные детали и технологии!",
medicalTitle:"Медицинская наука",
medicalIntro:"Изучай медицинские машины и оборудование!",
spaceTitle:"Космос и наука",
spaceIntro:"Исследуй ракеты и космические технологии!",
agricultureTitle:"Мир сельского хозяйства",
agricultureIntro:"Создавай машины для современного сельского хозяйства!",
sportsTitle:"Мир спорта",
sportsIntro:"Изучай спортивное и фитнес-оборудование!",
progressTitle:"Мой прогресс",
learningJourney:"Твой путь к знаниям",
completedProjects:"Завершённые проекты",
keepBuilding:"Продолжай создавать и исследовать!",
achievementsTitle:"Твои достижения",
achievementStart:"Начни создавать проекты, чтобы получить достижения!",
achievementDone:"Ты завершил(а) {count} проект(ов)!",
helpTitle:"Добро пожаловать в FutureLab Kids!",
helpChoose:"Выбери категорию и открой конструктор.",
helpFollow:"Следуй инструкциям в каждом проекте.",
helpComplete:"Выполни необходимые задания, чтобы открыть следующий конструктор.",
helpSaved:"Твой прогресс сохраняется на устройстве.",
settingsTitle:"Настройки",
languageSettings:"Настройки языка",
changeLanguage:"Изменить язык",
selectLanguage:"Выбрать язык",
choosePreferred:"Выбери предпочитаемый язык",
close:"Закрыть",
completed:"Завершено",
completePrevious:"Сначала заверши предыдущий проект!",
sportsCar:"Конструктор спортивного автомобиля",
jeep:"Конструктор джипа",
bus:"Автобус Volvo с кондиционером",
train:"Конструктор поезда",
helicopter:"Конструктор вертолёта",
airplane:"Конструктор самолёта",
bomber:"Конструктор бомбардировщика",
fighterJet:"Конструктор истребителя",
laptopBuilder:"Конструктор ноутбука",
desktopBuilder:"Конструктор настольного ПК",
xray:"Рентгеновский аппарат",
ultrasound:"Аппарат УЗИ",
ctScan:"Компьютерный томограф",
eeg:"Аппарат ЭЭГ",
dental:"Стоматологическое оборудование",
eye:"Оборудование для проверки зрения",
rocketBuilder:"Конструктор ракеты",
satelliteBuilder:"Конструктор спутника",
miniTractor:"Конструктор мини-трактора",
powerTiller:"Конструктор мотокультиватора",
treadmill:"Беговая дорожка",
fiveStationGym:"Пятистанционный тренажёр"
},

/* ================= URDU ================= */

ur: {
welcome:"آپ کا مستقبل یہاں سے شروع ہوتا ہے!",
welcomeText:"دریافت کریں، بنائیں اور حیرت انگیز چیزیں سیکھیں۔",
start:"مہم شروع کریں",
language:"زبان",
achievements:"کامیابیاں",
progress:"میری پیش رفت",
help:"مدد مرکز",
tagline:"بنائیں • دریافت کریں • ایجاد کریں",
learnBuildTestCreate:"سیکھیں • بنائیں • آزمائیں • تخلیق کریں",
explore:"جدت کی دنیا دریافت کریں",
chooseCategory:"ایک دنیا منتخب کریں اور اپنی مہم شروع کریں!",
engineering:"انجینئرنگ کی دنیا",
engineeringDesc:"گاڑیاں اور مشینیں بنائیں",
aviation:"ہوا بازی اور پائلٹ",
aviationDesc:"ہوائی جہاز دریافت کریں",
computer:"کمپیوٹر سائنس اور ٹیکنالوجی",
computerDesc:"کمپیوٹر بنائیں",
medical:"طبی سائنس اور ٹیکنالوجی",
medicalDesc:"طبی مشینیں دریافت کریں",
space:"خلاء اور سائنس",
spaceDesc:"کائنات دریافت کریں",
agriculture:"زراعت کی دنیا",
agricultureDesc:"زرعی مشینیں دریافت کریں",
sports:"کھیلوں کی دنیا",
sportsDesc:"فٹنس کے آلات دریافت کریں",
juniorBuilder:"جونیئر بلڈر",
juniorIntro:"اپنی حیرت انگیز گاڑیاں خود بنائیں!",
aviationWorld:"ہوا بازی کی دنیا",
aviationIntro:"ہوائی جہاز بنائیں اور ہوا بازی سیکھیں!",
computerTitle:"کمپیوٹر ٹیکنالوجی",
computerIntro:"کمپیوٹر کے حصے اور ٹیکنالوجی دریافت کریں!",
medicalTitle:"طبی سائنس",
medicalIntro:"طبی مشینیں اور آلات دریافت کریں!",
spaceTitle:"خلاء اور سائنس",
spaceIntro:"راکٹ اور خلائی ٹیکنالوجی دریافت کریں!",
agricultureTitle:"زراعت کی دنیا",
agricultureIntro:"جدید زراعت کے لیے مشینیں بنائیں!",
sportsTitle:"کھیلوں کی دنیا",
sportsIntro:"کھیل اور فٹنس کے آلات دریافت کریں!",
progressTitle:"میری پیش رفت",
learningJourney:"آپ کا تعلیمی سفر",
completedProjects:"مکمل کیے گئے منصوبے",
keepBuilding:"بناتے رہیں اور دریافت کرتے رہیں!",
achievementsTitle:"آپ کی کامیابیاں",
achievementStart:"کامیابیاں حاصل کرنے کے لیے بنانا شروع کریں!",
achievementDone:"آپ نے {count} منصوبے مکمل کیے ہیں!",
helpTitle:"FutureLab Kids میں خوش آمدید!",
helpChoose:"ایک زمرہ منتخب کریں اور بلڈر کھولیں۔",
helpFollow:"ہر منصوبے کی ہدایات پر عمل کریں۔",
helpComplete:"اگلا بلڈر کھولنے کے لیے ضروری سرگرمیاں مکمل کریں۔",
helpSaved:"آپ کی پیش رفت آپ کے آلے میں محفوظ ہوتی ہے۔",
settingsTitle:"ترتیبات",
languageSettings:"زبان کی ترتیبات",
changeLanguage:"زبان تبدیل کریں",
selectLanguage:"زبان منتخب کریں",
choosePreferred:"اپنی پسندیدہ زبان منتخب کریں",
close:"بند کریں",
completed:"مکمل",
completePrevious:"پہلے پچھلا بلڈر مکمل کریں!",
sportsCar:"اسپورٹس کار بلڈر",
jeep:"جیپ بلڈر",
bus:"وولوو اے سی بس",
train:"ٹرین بلڈر",
helicopter:"ہیلی کاپٹر بلڈر",
airplane:"ہوائی جہاز بلڈر",
bomber:"بمبار طیارہ بلڈر",
fighterJet:"لڑاکا طیارہ بلڈر",
laptopBuilder:"لیپ ٹاپ بلڈر",
desktopBuilder:"ڈیسک ٹاپ پی سی بلڈر",
xray:"ایکس رے مشین",
ultrasound:"الٹراساؤنڈ مشین",
ctScan:"سی ٹی اسکین مشین",
eeg:"ای ای جی مشین",
dental:"دانتوں کے علاج کے آلات",
eye:"آنکھوں کے معائنے کے آلات",
rocketBuilder:"راکٹ بلڈر",
satelliteBuilder:"سیٹلائٹ بلڈر",
miniTractor:"منی ٹریکٹر بلڈر",
powerTiller:"پاور ٹلر بلڈر",
treadmill:"ٹریڈمل بلڈر",
fiveStationGym:"فائیو اسٹیشن جم"
},

/* ================= INDONESIAN ================= */

id: {
welcome:"Masa depanmu dimulai di sini!",
welcomeText:"Jelajahi, bangun, dan temukan hal-hal menakjubkan.",
start:"MULAI PETUALANGAN",
language:"Bahasa",
achievements:"Pencapaian",
progress:"Progres Saya",
help:"Pusat Bantuan",
tagline:"MEMBANGUN • MENJELAJAHI • BERINOVASI",
learnBuildTestCreate:"Belajar • Membangun • Menguji • Mencipta",
explore:"Jelajahi dunia inovasi",
chooseCategory:"Pilih dunia dan mulai petualanganmu!",
engineering:"Dunia Teknik",
engineeringDesc:"Bangun kendaraan dan mesin",
aviation:"Penerbangan dan Pilot",
aviationDesc:"Jelajahi pesawat",
computer:"Ilmu Komputer dan Teknologi",
computerDesc:"Bangun komputer",
medical:"Ilmu dan Teknologi Medis",
medicalDesc:"Temukan mesin medis",
space:"Antariksa dan Sains",
spaceDesc:"Jelajahi alam semesta",
agriculture:"Dunia Pertanian",
agricultureDesc:"Jelajahi mesin pertanian",
sports:"Dunia Olahraga",
sportsDesc:"Jelajahi peralatan kebugaran",
juniorBuilder:"Perakit Junior",
juniorIntro:"Bangun kendaraan menakjubkan milikmu sendiri!",
aviationWorld:"Dunia Penerbangan",
aviationIntro:"Bangun pesawat dan pelajari dunia penerbangan!",
computerTitle:"Teknologi Komputer",
computerIntro:"Pelajari perangkat keras dan teknologi komputer!",
medicalTitle:"Ilmu Kedokteran",
medicalIntro:"Temukan mesin dan peralatan medis!",
spaceTitle:"Antariksa dan Sains",
spaceIntro:"Jelajahi roket dan teknologi luar angkasa!",
agricultureTitle:"Dunia Pertanian",
agricultureIntro:"Bangun mesin untuk pertanian modern!",
sportsTitle:"Dunia Olahraga",
sportsIntro:"Jelajahi peralatan olahraga dan kebugaran!",
progressTitle:"Progres Saya",
learningJourney:"Perjalanan Belajarmu",
completedProjects:"Proyek yang Selesai",
keepBuilding:"Terus membangun dan menjelajah!",
achievementsTitle:"Pencapaianmu",
achievementStart:"Mulai membangun untuk mendapatkan pencapaian!",
achievementDone:"Kamu telah menyelesaikan {count} proyek!",
helpTitle:"Selamat datang di FutureLab Kids!",
helpChoose:"Pilih kategori dan buka sebuah Builder.",
helpFollow:"Ikuti petunjuk di setiap proyek.",
helpComplete:"Selesaikan aktivitas yang diperlukan untuk membuka Builder berikutnya.",
helpSaved:"Progresmu disimpan di perangkat.",
settingsTitle:"Pengaturan",
languageSettings:"Pengaturan Bahasa",
changeLanguage:"Ubah Bahasa",
selectLanguage:"Pilih Bahasa",
choosePreferred:"Pilih bahasa yang kamu sukai",
close:"Tutup",
completed:"Selesai",
completePrevious:"Selesaikan Builder sebelumnya terlebih dahulu!",
sportsCar:"Perakit Mobil Sport",
jeep:"Perakit Jeep",
bus:"Bus Volvo AC",
train:"Perakit Kereta",
helicopter:"Perakit Helikopter",
airplane:"Perakit Pesawat",
bomber:"Perakit Pesawat Pengebom",
fighterJet:"Perakit Jet Tempur",
laptopBuilder:"Perakit Laptop",
desktopBuilder:"Perakit PC Desktop",
xray:"Mesin Sinar-X",
ultrasound:"Mesin Ultrasonografi",
ctScan:"Mesin CT Scan",
eeg:"Mesin EEG",
dental:"Peralatan Kedokteran Gigi",
eye:"Peralatan Pemeriksaan Mata",
rocketBuilder:"Perakit Roket",
satelliteBuilder:"Perakit Satelit",
miniTractor:"Perakit Traktor Mini",
powerTiller:"Perakit Power Tiller",
treadmill:"Perakit Treadmill",
fiveStationGym:"Alat Gym Lima Stasiun"
},

/* ================= JAPANESE ================= */

ja: {
welcome:"あなたの未来はここから始まります！",
welcomeText:"探検し、作り、素晴らしい発見をしましょう。",
start:"冒険を始める",
language:"言語",
achievements:"実績",
progress:"進捗状況",
help:"ヘルプセンター",
tagline:"作る • 発見する • 発明する",
learnBuildTestCreate:"学ぶ • 作る • 試す • 創造する",
explore:"イノベーションの世界を探検しよう",
chooseCategory:"世界を選んで冒険を始めましょう！",
engineering:"エンジニアリングの世界",
engineeringDesc:"乗り物や機械を作ろう",
aviation:"航空とパイロット",
aviationDesc:"航空機を探検しよう",
computer:"コンピューター科学と技術",
computerDesc:"コンピューターを作ろう",
medical:"医療科学と技術",
medicalDesc:"医療機器を発見しよう",
space:"宇宙と科学",
spaceDesc:"宇宙を探検しよう",
agriculture:"農業の世界",
agricultureDesc:"農業機械を探検しよう",
sports:"スポーツの世界",
sportsDesc:"フィットネス機器を探検しよう",
juniorBuilder:"ジュニアビルダー",
juniorIntro:"自分だけの素晴らしい乗り物を作ろう！",
aviationWorld:"航空の世界",
aviationIntro:"航空機を作って航空について学ぼう！",
computerTitle:"コンピューター技術",
computerIntro:"コンピューターの部品と技術を学ぼう！",
medicalTitle:"医療科学",
medicalIntro:"医療機器や装置を発見しよう！",
spaceTitle:"宇宙と科学",
spaceIntro:"ロケットと宇宙技術を探検しよう！",
agricultureTitle:"農業の世界",
agricultureIntro:"現代農業の機械を作ろう！",
sportsTitle:"スポーツの世界",
sportsIntro:"スポーツとフィットネス機器を探検しよう！",
progressTitle:"進捗状況",
learningJourney:"あなたの学習の旅",
completedProjects:"完了したプロジェクト",
keepBuilding:"作り続けて、新しい発見をしよう！",
achievementsTitle:"あなたの実績",
achievementStart:"実績を獲得するためにビルダーを始めよう！",
achievementDone:"{count} 個のプロジェクトを完了しました！",
helpTitle:"FutureLab Kidsへようこそ！",
helpChoose:"カテゴリーを選択してビルダーを開いてください。",
helpFollow:"各プロジェクトの説明に従ってください。",
helpComplete:"次のビルダーを解除するには必要な作業を完了してください。",
helpSaved:"進捗状況は端末に保存されます。",
settingsTitle:"設定",
languageSettings:"言語設定",
changeLanguage:"言語を変更",
selectLanguage:"言語を選択",
choosePreferred:"お好みの言語を選択してください",
close:"閉じる",
completed:"完了",
completePrevious:"先に前のビルダーを完了してください！",
sportsCar:"スポーツカーを組み立てる",
jeep:"ジープを組み立てる",
bus:"ボルボACバス",
train:"列車を組み立てる",
helicopter:"ヘリコプターを組み立てる",
airplane:"飛行機を組み立てる",
bomber:"爆撃機を組み立てる",
fighterJet:"戦闘機を組み立てる",
laptopBuilder:"ノートパソコンを組み立てる",
desktopBuilder:"デスクトップPCを組み立てる",
xray:"X線装置",
ultrasound:"超音波診断装置",
ctScan:"CTスキャン装置",
eeg:"脳波測定装置",
dental:"歯科医療機器",
eye:"眼科検査機器",
rocketBuilder:"ロケットを組み立てる",
satelliteBuilder:"人工衛星を組み立てる",
miniTractor:"ミニトラクターを組み立てる",
powerTiller:"耕うん機を組み立てる",
treadmill:"トレッドミルを組み立てる",
fiveStationGym:"5ステーションジム"
}

};

/* =====================================================
   LANGUAGE ENGINE
===================================================== */

let currentLanguage = "en";

try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved && translations[saved]) {
        currentLanguage = saved;
    }
} catch (error) {
    console.warn("Language storage unavailable.");
}

/* GET CURRENT LANGUAGE */

function getLanguage() {
    return currentLanguage;
}

/* TRANSLATION */

function t(key, values) {

    let translated =
        translations[currentLanguage]?.[key] ??
        translations.en[key] ??
        key;

    if (values && typeof translated === "string") {
        Object.keys(values).forEach(function (name) {
            translated = translated.replaceAll(
                "{" + name + "}",
                String(values[name])
            );
        });
    }

    return translated;
}

/* RTL SUPPORT */

function applyDirection() {

    const isRTL =
        currentLanguage === "ar" ||
        currentLanguage === "ur";

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    if (document.body) {
        document.body.dir = isRTL ? "rtl" : "ltr";
        document.body.classList.toggle("rtl", isRTL);
    }
}

/* TRANSLATE HTML DATA ATTRIBUTES */

function applyAttributes() {

    document.querySelectorAll("[data-i18n]").forEach(function(element) {

        const key = element.getAttribute("data-i18n");

        if (translations.en[key] !== undefined) {
            element.textContent = t(key);
        }

    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(element) {

        const key = element.getAttribute("data-i18n-placeholder");

        element.placeholder = t(key);

    });

    document.querySelectorAll("[data-i18n-title]").forEach(function(element) {

        const key = element.getAttribute("data-i18n-title");

        element.title = t(key);

    });
}

/* TRANSLATE CURRENT INDEX.HTML ELEMENTS */

function applyPageTranslations() {

    const map = {

        ".tagline": "tagline",

        ".category-card:nth-child(1) .project-text small": "engineeringDesc",
        ".category-card:nth-child(2) .project-text small": "aviationDesc",
        ".category-card:nth-child(3) .project-text small": "computerDesc",
        ".category-card:nth-child(4) .project-text small": "medicalDesc",
        ".category-card:nth-child(5) .project-text small": "spaceDesc",
        ".category-card:nth-child(6) .project-text small": "agricultureDesc",
        ".category-card:nth-child(7) .project-text small": "sportsDesc",

        "#builderScreen .intro": "juniorIntro",
        "#aviationScreen .intro": "aviationIntro",
        "#computerScienceScreen .intro": "computerIntro",
        "#medicalScreen .intro": "medicalIntro",
        "#spaceScienceScreen .intro": "spaceIntro",
        "#agricultureScreen .intro": "agricultureIntro",
        "#sportsScreen .intro": "sportsIntro",

        "#progressScreen .header h2": "progressTitle",
        "#progressScreen .info-panel h2": "learningJourney",

        "#achievementsScreen .header h2": "achievements",
        "#achievementsScreen .info-panel h2": "achievementsTitle",

        "#helpScreen .header h2": "help",
        "#helpScreen .info-panel h3": "helpTitle",

        "#settingsScreen .header h2": "settingsTitle",
        "#settingsScreen .info-panel h3": "languageSettings",

        ".language-heading p": "choosePreferred"

    };

    Object.keys(map).forEach(function(selector) {

        const element = document.querySelector(selector);

        if (element) {
            element.textContent = t(map[selector]);
        }

    });

    /* SCREEN TITLES WITH EMOJIS */

    const headings = [
        ["#computerScienceScreen .header h2", "💻 ", "computerTitle"],
        ["#medicalScreen .header h2", "🏥 ", "medicalTitle"],
        ["#spaceScienceScreen .header h2", "🚀 ", "spaceTitle"],
        ["#agricultureScreen .header h2", "🚜 ", "agricultureTitle"],
        ["#sportsScreen .header h2", "🏋️ ", "sportsTitle"]
    ];

    headings.forEach(function(item) {

        const element = document.querySelector(item[0]);

        if (element) {
            element.textContent = item[1] + t(item[2]);
        }

    });

    /* HELP CONTENT */

    const helpParagraphs = document.querySelectorAll(
        "#helpScreen .info-panel p"
    );

    const helpKeys = [
        "helpChoose",
        "helpFollow",
        "helpComplete",
        "helpSaved"
    ];

    helpParagraphs.forEach(function(element, index) {

        if (helpKeys[index]) {
            element.textContent = t(helpKeys[index]);
        }

    });

    /* SETTINGS BUTTON */

    const settingsButton = document.querySelector(
        "#settingsScreen .info-panel button"
    );

    if (settingsButton) {
        settingsButton.textContent = "🌐 " + t("changeLanguage");
    }

}

/* PROGRESS TRANSLATION */

function applyProgressTranslations() {

    const summary = document.getElementById("progressSummary");
    const details = document.getElementById("progressDetails");
    const achievements = document.getElementById("achievementDetails");

    if (summary) {

        const match = summary.textContent.match(/(\d+)\s*\/\s*(\d+)/);

        if (match) {
            summary.textContent =
                t("completedProjects") + ": " +
                match[1] + " / " + match[2];
        }

    }

if (details) {
    const match = details.textContent.match(/\d+/);

    if (match) {
        details.textContent = match[0] + "%";
    }
}

    if (achievements) {

        const match = achievements.textContent.match(/\d+/);

        if (match) {

            achievements.textContent =
                "🌟 " + t("achievementDone", {
                    count: match[0]
                });

        } else {

            achievements.textContent = t("achievementStart");

        }

    }

}

/* APPLY ALL TRANSLATIONS */

function apply() {

    if (!document.body) return;

    applyDirection();

    applyAttributes();

    applyPageTranslations();

    applyProgressTranslations();

}

/* CHANGE LANGUAGE */

function setLanguage(code) {

    if (!translations[code]) {
        return false;
    }

    currentLanguage = code;

    try {

        localStorage.setItem(STORAGE_KEY, code);

    } catch (error) {

        console.warn("Could not save language preference.");

    }

    apply();

    window.dispatchEvent(
        new Event("futurelab-language-changed")
    );

    return true;

}

/* PUBLIC API */

window.FutureLabLanguage = {

    languages: languages,

    translations: translations,

    getLanguage: getLanguage,

    setLanguage: setLanguage,

    t: t,

    apply: apply

};

/* INITIALIZATION */

if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", apply);

} else {

    apply();

}

})();
