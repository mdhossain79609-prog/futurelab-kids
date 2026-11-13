
/* =========================================
   FUTURELAB KIDS - CENTRAL LANGUAGE SYSTEM
   Compatible with current index.html
========================================= */

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
        en: {
            welcome: "Your Future Starts Here!",
            welcomeText: "Explore, learn and create amazing things.",
            start: "START ADVENTURE",
            language: "Language",
            achievements: "Achievements",
            progress: "My Progress",
            help: "Help Center",
            learnBuildTestCreate: "Learn • Build • Test • Create",
            explore: "Explore the World of Innovation",
            chooseCategory: "Choose Your Category",
            engineering: "Engineering World",
            aviation: "Aviation & Pilot",
            computer: "Computer Science & Technology",
            medical: "Medical Science & Technology",
            space: "Space & Science",
            agriculture: "Agriculture Technology",
            sports: "Sports & Fitness",
            juniorBuilder: "Junior Builder",
            aviationWorld: "Aviation World",
            selectLanguage: "Select Language",
            close: "Close",
            sportsCar: "Sports Car Builder",
            jeep: "Jeep Builder",
            bus: "Volvo AC Bus",
            train: "Train Builder",
            laptopBuilder: "Laptop Builder",
            desktopBuilder: "Desktop PC Builder",
            completed: "Completed",
            completePrevious: "Complete the previous builder first!"
        },

        bn: {
            welcome: "আপনার ভবিষ্যৎ শুরু হোক এখান থেকে!",
            welcomeText: "নতুন কিছু জানুন, শিখুন এবং তৈরি করুন।",
            start: "অ্যাডভেঞ্চার শুরু করুন",
            language: "ভাষা",
            achievements: "অর্জনসমূহ",
            progress: "আমার অগ্রগতি",
            help: "সাহায্য কেন্দ্র",
            learnBuildTestCreate: "শিখুন • তৈরি করুন • পরীক্ষা করুন • আবিষ্কার করুন",
            explore: "উদ্ভাবনের জগৎ ঘুরে দেখুন",
            chooseCategory: "আপনার বিভাগ নির্বাচন করুন",
            engineering: "ইঞ্জিনিয়ারিং বিশ্ব",
            aviation: "বিমান ও পাইলট",
            computer: "কম্পিউটার বিজ্ঞান ও প্রযুক্তি",
            medical: "মেডিকেল বিজ্ঞান ও প্রযুক্তি",
            space: "মহাকাশ ও বিজ্ঞান",
            agriculture: "কৃষি প্রযুক্তি",
            sports: "খেলাধুলা ও ফিটনেস",
            juniorBuilder: "জুনিয়র বিল্ডার",
            aviationWorld: "এভিয়েশন বিশ্ব",
            selectLanguage: "ভাষা নির্বাচন করুন",
            close: "বন্ধ করুন",
            sportsCar: "স্পোর্টস কার বিল্ডার",
            jeep: "জিপ বিল্ডার",
            bus: "ভলভো এসি বাস",
            train: "ট্রেন বিল্ডার",
            laptopBuilder: "ল্যাপটপ বিল্ডার",
            desktopBuilder: "ডেস্কটপ পিসি বিল্ডার",
            completed: "সম্পন্ন হয়েছে",
            completePrevious: "আগে আগের বিল্ডারটি সম্পন্ন করুন!"
        },

        zh: {
            welcome: "你的未来从这里开始！",
            welcomeText: "探索、学习并创造精彩事物。",
            start: "开始冒险",
            language: "语言",
            achievements: "成就",
            progress: "我的进度",
            help: "帮助中心",
            learnBuildTestCreate: "学习 • 建造 • 测试 • 创造",
            explore: "探索创新世界",
            chooseCategory: "选择你的类别",
            engineering: "工程世界",
            aviation: "航空与飞行员",
            computer: "计算机科学与技术",
            medical: "医学科学与技术",
            space: "太空与科学",
            agriculture: "农业技术",
            sports: "运动与健身",
            juniorBuilder: "初级建造师",
            aviationWorld: "航空世界",
            selectLanguage: "选择语言",
            close: "关闭",
            sportsCar: "跑车建造",
            jeep: "吉普车建造",
            bus: "沃尔沃空调巴士",
            train: "火车建造",
            laptopBuilder: "笔记本电脑建造",
            desktopBuilder: "台式电脑建造",
            completed: "已完成",
            completePrevious: "请先完成上一个建造项目！"
        },

        hi: {
            welcome: "आपका भविष्य यहाँ से शुरू होता है!",
            welcomeText: "खोजें, सीखें और नई चीजें बनाएँ।",
            start: "रोमांच शुरू करें",
            language: "भाषा",
            achievements: "उपलब्धियाँ",
            progress: "मेरी प्रगति",
            help: "सहायता केंद्र",
            learnBuildTestCreate: "सीखें • बनाएँ • जाँचें • रचें",
            explore: "नवाचार की दुनिया देखें",
            chooseCategory: "अपनी श्रेणी चुनें",
            engineering: "इंजीनियरिंग की दुनिया",
            aviation: "विमानन और पायलट",
            computer: "कंप्यूटर विज्ञान और तकनीक",
            medical: "चिकित्सा विज्ञान और तकनीक",
            space: "अंतरिक्ष और विज्ञान",
            agriculture: "कृषि तकनीक",
            sports: "खेल और फिटनेस",
            juniorBuilder: "जूनियर बिल्डर",
            aviationWorld: "विमानन की दुनिया",
            selectLanguage: "भाषा चुनें",
            close: "बंद करें",
            sportsCar: "स्पोर्ट्स कार बिल्डर",
            jeep: "जीप बिल्डर",
            bus: "वोल्वो एसी बस",
            train: "ट्रेन बिल्डर",
            laptopBuilder: "लैपटॉप बिल्डर",
            desktopBuilder: "डेस्कटॉप पीसी बिल्डर",
            completed: "पूरा हुआ",
            completePrevious: "पहले पिछला बिल्डर पूरा करें!"
        },

        es: {
            welcome: "¡Tu futuro comienza aquí!",
            welcomeText: "Explora, aprende y crea cosas increíbles.",
            start: "COMENZAR AVENTURA",
            language: "Idioma",
            achievements: "Logros",
            progress: "Mi progreso",
            help: "Centro de ayuda",
            learnBuildTestCreate: "Aprender • Construir • Probar • Crear",
            explore: "Explora el mundo de la innovación",
            chooseCategory: "Elige tu categoría",
            engineering: "Mundo de la ingeniería",
            aviation: "Aviación y pilotos",
            computer: "Ciencia y tecnología informática",
            medical: "Ciencia y tecnología médica",
            space: "Espacio y ciencia",
            agriculture: "Tecnología agrícola",
            sports: "Deporte y fitness",
            juniorBuilder: "Constructor junior",
            aviationWorld: "Mundo de la aviación",
            selectLanguage: "Seleccionar idioma",
            close: "Cerrar",
            sportsCar: "Constructor de coches deportivos",
            jeep: "Constructor de Jeep",
            bus: "Autobús Volvo AC",
            train: "Constructor de trenes",
            laptopBuilder: "Constructor de portátiles",
            desktopBuilder: "Constructor de PC de escritorio",
            completed: "Completado",
            completePrevious: "¡Completa primero el constructor anterior!"
        },

        ar: {
            welcome: "مستقبلك يبدأ من هنا!",
            welcomeText: "استكشف وتعلم وابتكر أشياء رائعة.",
            start: "ابدأ المغامرة",
            language: "اللغة",
            achievements: "الإنجازات",
            progress: "تقدمي",
            help: "مركز المساعدة",
            learnBuildTestCreate: "تعلم • ابنِ • اختبر • ابتكر",
            explore: "استكشف عالم الابتكار",
            chooseCategory: "اختر الفئة",
            engineering: "عالم الهندسة",
            aviation: "الطيران والطيارون",
            computer: "علوم الكمبيوتر والتكنولوجيا",
            medical: "العلوم والتكنولوجيا الطبية",
            space: "الفضاء والعلوم",
            agriculture: "التكنولوجيا الزراعية",
            sports: "الرياضة واللياقة",
            juniorBuilder: "البنّاء الصغير",
            aviationWorld: "عالم الطيران",
            selectLanguage: "اختر اللغة",
            close: "إغلاق",
            sportsCar: "بناء سيارة رياضية",
            jeep: "بناء جيب",
            bus: "حافلة فولفو مكيفة",
            train: "بناء قطار",
            laptopBuilder: "بناء حاسوب محمول",
            desktopBuilder: "بناء كمبيوتر مكتبي",
            completed: "مكتمل",
            completePrevious: "أكمل المشروع السابق أولاً!"
        },

        fr: {
            welcome: "Votre avenir commence ici !",
            welcomeText: "Explorez, apprenez et créez des choses incroyables.",
            start: "COMMENCER L'AVENTURE",
            language: "Langue",
            achievements: "Réalisations",
            progress: "Ma progression",
            help: "Centre d'aide",
            learnBuildTestCreate: "Apprendre • Construire • Tester • Créer",
            explore: "Explorez le monde de l'innovation",
            chooseCategory: "Choisissez votre catégorie",
            engineering: "Monde de l'ingénierie",
            aviation: "Aviation et pilotes",
            computer: "Informatique et technologie",
            medical: "Sciences et technologies médicales",
            space: "Espace et sciences",
            agriculture: "Technologie agricole",
            sports: "Sport et fitness",
            juniorBuilder: "Constructeur junior",
            aviationWorld: "Monde de l'aviation",
            selectLanguage: "Choisir la langue",
            close: "Fermer",
            sportsCar: "Constructeur de voiture de sport",
            jeep: "Constructeur de Jeep",
            bus: "Bus Volvo climatisé",
            train: "Constructeur de train",
            laptopBuilder: "Constructeur d'ordinateur portable",
            desktopBuilder: "Constructeur de PC de bureau",
            completed: "Terminé",
            completePrevious: "Terminez d'abord le constructeur précédent !"
        },

        pt: {
            welcome: "Seu futuro começa aqui!",
            welcomeText: "Explore, aprenda e crie coisas incríveis.",
            start: "COMEÇAR A AVENTURA",
            language: "Idioma",
            achievements: "Conquistas",
            progress: "Meu progresso",
            help: "Central de ajuda",
            learnBuildTestCreate: "Aprender • Construir • Testar • Criar",
            explore: "Explore o mundo da inovação",
            chooseCategory: "Escolha sua categoria",
            engineering: "Mundo da engenharia",
            aviation: "Aviação e pilotos",
            computer: "Ciência da computação e tecnologia",
            medical: "Ciência e tecnologia médica",
            space: "Espaço e ciência",
            agriculture: "Tecnologia agrícola",
            sports: "Esportes e fitness",
            juniorBuilder: "Construtor júnior",
            aviationWorld: "Mundo da aviação",
            selectLanguage: "Selecionar idioma",
            close: "Fechar",
            sportsCar: "Construtor de carros esportivos",
            jeep: "Construtor de Jeep",
            bus: "Ônibus Volvo com ar-condicionado",
            train: "Construtor de trens",
            laptopBuilder: "Construtor de laptop",
            desktopBuilder: "Construtor de PC desktop",
            completed: "Concluído",
            completePrevious: "Conclua o construtor anterior primeiro!"
        },

        ru: {
            welcome: "Твоё будущее начинается здесь!",
            welcomeText: "Исследуй, учись и создавай удивительные вещи.",
            start: "НАЧАТЬ ПРИКЛЮЧЕНИЕ",
            language: "Язык",
            achievements: "Достижения",
            progress: "Мой прогресс",
            help: "Центр помощи",
            learnBuildTestCreate: "Учись • Строй • Проверяй • Создавай",
            explore: "Исследуй мир инноваций",
            chooseCategory: "Выбери категорию",
            engineering: "Мир инженерии",
            aviation: "Авиация и пилоты",
            computer: "Информатика и технологии",
            medical: "Медицинская наука и технологии",
            space: "Космос и наука",
            agriculture: "Сельскохозяйственные технологии",
            sports: "Спорт и фитнес",
            juniorBuilder: "Юный строитель",
            aviationWorld: "Мир авиации",
            selectLanguage: "Выберите язык",
            close: "Закрыть",
            sportsCar: "Сборка спортивного автомобиля",
            jeep: "Сборка джипа",
            bus: "Автобус Volvo с кондиционером",
            train: "Сборка поезда",
            laptopBuilder: "Сборка ноутбука",
            desktopBuilder: "Сборка настольного ПК",
            completed: "Завершено",
            completePrevious: "Сначала завершите предыдущую сборку!"
        },

        ur: {
            welcome: "آپ کا مستقبل یہاں سے شروع ہوتا ہے!",
            welcomeText: "دریافت کریں، سیکھیں اور نئی چیزیں بنائیں۔",
            start: "مہم شروع کریں",
            language: "زبان",
            achievements: "کامیابیاں",
            progress: "میری پیش رفت",
            help: "مدد مرکز",
            learnBuildTestCreate: "سیکھیں • بنائیں • آزمائیں • تخلیق کریں",
            explore: "جدت کی دنیا دریافت کریں",
            chooseCategory: "اپنی قسم منتخب کریں",
            engineering: "انجینئرنگ کی دنیا",
            aviation: "ہوا بازی اور پائلٹ",
            computer: "کمپیوٹر سائنس اور ٹیکنالوجی",
            medical: "طبی سائنس اور ٹیکنالوجی",
            space: "خلاء اور سائنس",
            agriculture: "زرعی ٹیکنالوجی",
            sports: "کھیل اور فٹنس",
            juniorBuilder: "جونیئر بلڈر",
            aviationWorld: "ہوا بازی کی دنیا",
            selectLanguage: "زبان منتخب کریں",
            close: "بند کریں",
            sportsCar: "اسپورٹس کار بلڈر",
            jeep: "جیپ بلڈر",
            bus: "وولوو اے سی بس",
            train: "ٹرین بلڈر",
            laptopBuilder: "لیپ ٹاپ بلڈر",
            desktopBuilder: "ڈیسک ٹاپ پی سی بلڈر",
            completed: "مکمل",
            completePrevious: "پہلے پچھلا بلڈر مکمل کریں!"
        },

        id: {
            welcome: "Masa depanmu dimulai di sini!",
            welcomeText: "Jelajahi, pelajari, dan ciptakan hal luar biasa.",
            start: "MULAI PETUALANGAN",
            language: "Bahasa",
            achievements: "Pencapaian",
            progress: "Progres Saya",
            help: "Pusat Bantuan",
            learnBuildTestCreate: "Belajar • Membangun • Menguji • Mencipta",
            explore: "Jelajahi dunia inovasi",
            chooseCategory: "Pilih kategori Anda",
            engineering: "Dunia Teknik",
            aviation: "Penerbangan dan Pilot",
            computer: "Ilmu Komputer dan Teknologi",
            medical: "Ilmu dan Teknologi Medis",
            space: "Antariksa dan Sains",
            agriculture: "Teknologi Pertanian",
            sports: "Olahraga dan Kebugaran",
            juniorBuilder: "Pembangun Junior",
            aviationWorld: "Dunia Penerbangan",
            selectLanguage: "Pilih Bahasa",
            close: "Tutup",
            sportsCar: "Perakit Mobil Sport",
            jeep: "Perakit Jeep",
            bus: "Bus Volvo AC",
            train: "Perakit Kereta",
            laptopBuilder: "Perakit Laptop",
            desktopBuilder: "Perakit PC Desktop",
            completed: "Selesai",
            completePrevious: "Selesaikan proyek sebelumnya terlebih dahulu!"
        },

        ja: {
            welcome: "あなたの未来はここから始まります！",
            welcomeText: "探検し、学び、素晴らしいものを作りましょう。",
            start: "冒険を始める",
            language: "言語",
            achievements: "実績",
            progress: "進捗状況",
            help: "ヘルプセンター",
            learnBuildTestCreate: "学ぶ • 作る • 試す • 創造する",
            explore: "イノベーションの世界を探検しよう",
            chooseCategory: "カテゴリーを選択",
            engineering: "エンジニアリングの世界",
            aviation: "航空とパイロット",
            computer: "コンピューター科学と技術",
            medical: "医療科学と技術",
            space: "宇宙と科学",
            agriculture: "農業技術",
            sports: "スポーツとフィットネス",
            juniorBuilder: "ジュニアビルダー",
            aviationWorld: "航空の世界",
            selectLanguage: "言語を選択",
            close: "閉じる",
            sportsCar: "スポーツカーを組み立てる",
            jeep: "ジープを組み立てる",
            bus: "ボルボACバス",
            train: "列車を組み立てる",
            laptopBuilder: "ノートパソコンを組み立てる",
            desktopBuilder: "デスクトップPCを組み立てる",
            completed: "完了",
            completePrevious: "先に前のビルダーを完了してください！"
        }
    };

    let currentLanguage = "en";

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && translations[saved]) {
            currentLanguage = saved;
        }
    } catch (error) {
        console.warn("Language storage unavailable.");
    }

    function getLanguage() {
        return currentLanguage;
    }

    function t(key) {
        return (
            translations[currentLanguage]?.[key] ||
            translations.en[key] ||
            key
        );
    }

    function apply() {
        document.documentElement.lang = currentLanguage;

        const isRTL = currentLanguage === "ar" ||
                      currentLanguage === "ur";

        document.documentElement.dir = isRTL ? "rtl" : "ltr";
        document.body.dir = isRTL ? "rtl" : "ltr";
        document.body.classList.toggle("rtl", isRTL);

        document.querySelectorAll("[data-i18n]").forEach(function (element) {
            const key = element.getAttribute("data-i18n");
            const translated = t(key);

            if (translated !== key) {
                element.textContent = translated;
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
            const key = element.getAttribute("data-i18n-placeholder");
            element.placeholder = t(key);
        });

        document.querySelectorAll("[data-i18n-title]").forEach(function (element) {
            const key = element.getAttribute("data-i18n-title");
            element.title = t(key);
        });
    }

    function setLanguage(code) {
        if (!translations[code]) return false;

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

    window.FutureLabLanguage = {
        languages: languages,
        translations: translations,
        getLanguage: getLanguage,
        setLanguage: setLanguage,
        t: t,
        apply: apply
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", apply);
    } else {
        apply();
    }

})();
