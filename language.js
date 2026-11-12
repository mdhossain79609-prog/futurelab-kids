
/* =========================================
   FUTURELAB KIDS - CENTRAL LANGUAGE SYSTEM
========================================= */

(function () {
"use strict";

const STORAGE_KEY = "futurelabLanguage";

const languages = {
    en: "English",
    bn: "বাংলা",
    hi: "हिन्दी",
    ar: "العربية",
    es: "Español",
    fr: "Français",
    zh: "中文",
    ja: "日本語",
    pt: "Português",
    ru: "Русский",
    ur: "اردو",
    id: "Indonesia"
};

const translations = {

en: {
    welcome: "Your Future Starts Here!",
    welcomeText: "Explore, build and discover amazing things.",
    start: "START ADVENTURE",
    language: "LANGUAGE",
    achievements: "Achievements",
    progress: "My Progress",
    help: "Help Center",
    explore: "Explore Your Lab",
    chooseCategory: "Choose a world and start your adventure!",
    engineering: "Engineering World",
    aviation: "Aviation & Pilot",
    computer: "Computer Science & Technology",
    medical: "Medical Science & Technology",
    space: "Space & Science",
    agriculture: "Agriculture World",
    sports: "Sports World",
    juniorBuilder: "Junior Builder",
    aviationWorld: "Aviation World",
    laptopBuilder: "Laptop Builder",
    desktopBuilder: "Desktop PC Builder",
    rocketBuilder: "Rocket Builder",
    sportsCar: "Sports Car Builder",
    jeep: "Jeep Builder",
    bus: "Volvo AC Bus",
    train: "Train Builder",
    helicopter: "Helicopter Builder",
    airplane: "Airplane Builder",
    back: "Back",
    completed: "COMPLETED",
    locked: "LOCKED",
    unlocked: "UNLOCKED",
    selectLanguage: "Select Language",
    close: "Close",
    settings: "Settings",
    save: "Save",
    cancel: "Cancel",
    next: "Next",
    previous: "Previous",
    continue: "Continue",
    play: "Play",
    restart: "Restart",
    loading: "Loading...",
    congratulations: "Congratulations!",
    completePrevious: "Complete the previous Builder first!",
    learnBuildTestCreate: "Learn • Build • Test • Create"
},

bn: {
    welcome: "তোমার ভবিষ্যৎ শুরু এখানেই!",
    welcomeText: "অন্বেষণ করো, তৈরি করো এবং নতুন কিছু আবিষ্কার করো।",
    start: "অ্যাডভেঞ্চার শুরু করো",
    language: "ভাষা",
    achievements: "অর্জনসমূহ",
    progress: "আমার অগ্রগতি",
    help: "সাহায্য কেন্দ্র",
    explore: "তোমার ল্যাব অন্বেষণ করো",
    chooseCategory: "একটি জগৎ বেছে নাও এবং অভিযান শুরু করো!",
    engineering: "ইঞ্জিনিয়ারিং জগৎ",
    aviation: "বিমান ও পাইলট",
    computer: "কম্পিউটার বিজ্ঞান ও প্রযুক্তি",
    medical: "মেডিকেল বিজ্ঞান ও প্রযুক্তি",
    space: "মহাকাশ ও বিজ্ঞান",
    agriculture: "কৃষি জগৎ",
    sports: "খেলাধুলার জগৎ",
    juniorBuilder: "জুনিয়র বিল্ডার",
    aviationWorld: "এভিয়েশন জগৎ",
    laptopBuilder: "ল্যাপটপ বিল্ডার",
    desktopBuilder: "ডেস্কটপ পিসি বিল্ডার",
    rocketBuilder: "রকেট বিল্ডার",
    sportsCar: "স্পোর্টস কার বিল্ডার",
    jeep: "জিপ বিল্ডার",
    bus: "ভলভো এসি বাস",
    train: "ট্রেন বিল্ডার",
    helicopter: "হেলিকপ্টার বিল্ডার",
    airplane: "বিমান বিল্ডার",
    back: "ফিরে যাও",
    completed: "সম্পন্ন হয়েছে",
    locked: "লক করা",
    unlocked: "আনলক হয়েছে",
    selectLanguage: "ভাষা নির্বাচন করো",
    close: "বন্ধ করো",
    settings: "সেটিংস",
    save: "সংরক্ষণ",
    cancel: "বাতিল",
    next: "পরবর্তী",
    previous: "পূর্ববর্তী",
    continue: "চালিয়ে যাও",
    play: "খেলো",
    restart: "আবার শুরু করো",
    loading: "লোড হচ্ছে...",
    congratulations: "অভিনন্দন!",
    completePrevious: "আগের বিল্ডারটি আগে সম্পন্ন করো!",
    learnBuildTestCreate: "শিখো • তৈরি করো • পরীক্ষা করো • আবিষ্কার করো"
},

hi: {
    welcome: "तुम्हारा भविष्य यहीं से शुरू होता है!",
    welcomeText: "खोजो, बनाओ और नई चीजें सीखो।",
    start: "रोमांच शुरू करें",
    language: "भाषा",
    achievements: "उपलब्धियाँ",
    progress: "मेरी प्रगति",
    help: "सहायता केंद्र",
    explore: "अपनी लैब खोजें",
    chooseCategory: "एक दुनिया चुनें और शुरुआत करें!",
    engineering: "इंजीनियरिंग दुनिया",
    aviation: "विमानन और पायलट",
    computer: "कंप्यूटर विज्ञान और तकनीक",
    medical: "चिकित्सा विज्ञान और तकनीक",
    space: "अंतरिक्ष और विज्ञान",
    agriculture: "कृषि दुनिया",
    sports: "खेल दुनिया",
    back: "वापस",
    completed: "पूरा हुआ",
    locked: "लॉक",
    unlocked: "अनलॉक",
    selectLanguage: "भाषा चुनें",
    close: "बंद करें",
    settings: "सेटिंग्स",
    next: "अगला",
    previous: "पिछला",
    continue: "जारी रखें",
    loading: "लोड हो रहा है...",
    congratulations: "बधाई हो!"
},

ar: {
    welcome: "مستقبلك يبدأ من هنا!",
    welcomeText: "استكشف وابنِ واكتشف أشياء رائعة.",
    start: "ابدأ المغامرة",
    language: "اللغة",
    achievements: "الإنجازات",
    progress: "تقدمي",
    help: "مركز المساعدة",
    explore: "استكشف مختبرك",
    chooseCategory: "اختر عالماً وابدأ مغامرتك!",
    engineering: "عالم الهندسة",
    aviation: "الطيران والطيار",
    computer: "علوم الكمبيوتر والتكنولوجيا",
    medical: "العلوم الطبية والتكنولوجيا",
    space: "الفضاء والعلوم",
    agriculture: "عالم الزراعة",
    sports: "عالم الرياضة",
    back: "رجوع",
    completed: "مكتمل",
    locked: "مقفل",
    unlocked: "مفتوح",
    selectLanguage: "اختر اللغة",
    close: "إغلاق",
    settings: "الإعدادات",
    next: "التالي",
    previous: "السابق",
    continue: "متابعة",
    loading: "جار التحميل...",
    congratulations: "تهانينا!"
},

es: {
    welcome: "¡Tu futuro comienza aquí!",
    welcomeText: "Explora, construye y descubre cosas increíbles.",
    start: "COMENZAR AVENTURA",
    language: "IDIOMA",
    achievements: "Logros",
    progress: "Mi progreso",
    help: "Centro de ayuda",
    explore: "Explora tu laboratorio",
    chooseCategory: "¡Elige un mundo y comienza tu aventura!",
    engineering: "Mundo de ingeniería",
    aviation: "Aviación y pilotos",
    computer: "Ciencia y tecnología informática",
    medical: "Ciencia y tecnología médica",
    space: "Espacio y ciencia",
    agriculture: "Mundo agrícola",
    sports: "Mundo deportivo",
    back: "Volver",
    completed: "COMPLETADO",
    locked: "BLOQUEADO",
    unlocked: "DESBLOQUEADO",
    selectLanguage: "Seleccionar idioma",
    close: "Cerrar",
    settings: "Configuración",
    next: "Siguiente",
    previous: "Anterior",
    continue: "Continuar",
    loading: "Cargando...",
    congratulations: "¡Felicidades!"
},

fr: {
    welcome: "Ton avenir commence ici !",
    welcomeText: "Explore, construis et découvre des choses incroyables.",
    start: "COMMENCER L'AVENTURE",
    language: "LANGUE",
    achievements: "Réalisations",
    progress: "Ma progression",
    help: "Centre d'aide",
    explore: "Explore ton laboratoire",
    chooseCategory: "Choisis un monde et commence ton aventure !",
    engineering: "Monde de l'ingénierie",
    aviation: "Aviation et pilotage",
    computer: "Informatique et technologie",
    medical: "Sciences médicales et technologie",
    space: "Espace et sciences",
    agriculture: "Monde agricole",
    sports: "Monde du sport",
    back: "Retour",
    completed: "TERMINÉ",
    locked: "VERROUILLÉ",
    unlocked: "DÉVERROUILLÉ",
    selectLanguage: "Choisir la langue",
    close: "Fermer",
    settings: "Paramètres",
    next: "Suivant",
    previous: "Précédent",
    continue: "Continuer",
    loading: "Chargement...",
    congratulations: "Félicitations !"
},

zh: {
    welcome: "你的未来从这里开始！",
    welcomeText: "探索、建造并发现精彩事物。",
    start: "开始冒险",
    language: "语言",
    achievements: "成就",
    progress: "我的进度",
    help: "帮助中心",
    explore: "探索你的实验室",
    chooseCategory: "选择一个世界，开始冒险！",
    engineering: "工程世界",
    aviation: "航空与飞行员",
    computer: "计算机科学与技术",
    medical: "医学科学与技术",
    space: "太空与科学",
    agriculture: "农业世界",
    sports: "运动世界",
    back: "返回",
    completed: "已完成",
    locked: "已锁定",
    unlocked: "已解锁",
    selectLanguage: "选择语言",
    close: "关闭",
    settings: "设置",
    next: "下一步",
    previous: "上一步",
    continue: "继续",
    loading: "加载中...",
    congratulations: "恭喜！"
},

ja: {
    welcome: "未来はここから始まる！",
    welcomeText: "探検し、作り、素晴らしいことを発見しよう。",
    start: "冒険を始める",
    language: "言語",
    achievements: "実績",
    progress: "進捗状況",
    help: "ヘルプセンター",
    explore: "ラボを探検しよう",
    chooseCategory: "世界を選んで冒険を始めよう！",
    engineering: "エンジニアリングの世界",
    aviation: "航空とパイロット",
    computer: "コンピューター科学と技術",
    medical: "医療科学と技術",
    space: "宇宙と科学",
    agriculture: "農業の世界",
    sports: "スポーツの世界",
    back: "戻る",
    completed: "完了",
    locked: "ロック中",
    unlocked: "解除済み",
    selectLanguage: "言語を選択",
    close: "閉じる",
    settings: "設定",
    next: "次へ",
    previous: "前へ",
    continue: "続ける",
    loading: "読み込み中...",
    congratulations: "おめでとう！"
},

pt: {
    welcome: "Seu futuro começa aqui!",
    welcomeText: "Explore, construa e descubra coisas incríveis.",
    start: "COMEÇAR AVENTURA",
    language: "IDIOMA",
    achievements: "Conquistas",
    progress: "Meu progresso",
    help: "Central de ajuda",
    explore: "Explore seu laboratório",
    chooseCategory: "Escolha um mundo e comece sua aventura!",
    engineering: "Mundo da engenharia",
    aviation: "Aviação e pilotos",
    computer: "Ciência da computação e tecnologia",
    medical: "Ciência médica e tecnologia",
    space: "Espaço e ciência",
    agriculture: "Mundo agrícola",
    sports: "Mundo dos esportes",
    back: "Voltar",
    completed: "CONCLUÍDO",
    locked: "BLOQUEADO",
    unlocked: "DESBLOQUEADO",
    selectLanguage: "Selecionar idioma",
    close: "Fechar",
    settings: "Configurações",
    next: "Próximo",
    previous: "Anterior",
    continue: "Continuar",
    loading: "Carregando...",
    congratulations: "Parabéns!"
},

ru: {
    welcome: "Твоё будущее начинается здесь!",
    welcomeText: "Исследуй, создавай и открывай новое.",
    start: "НАЧАТЬ ПРИКЛЮЧЕНИЕ",
    language: "ЯЗЫК",
    achievements: "Достижения",
    progress: "Мой прогресс",
    help: "Центр помощи",
    explore: "Исследуй свою лабораторию",
    chooseCategory: "Выбери мир и начни приключение!",
    engineering: "Мир инженерии",
    aviation: "Авиация и пилоты",
    computer: "Компьютерные науки и технологии",
    medical: "Медицинская наука и технологии",
    space: "Космос и наука",
    agriculture: "Мир сельского хозяйства",
    sports: "Мир спорта",
    back: "Назад",
    completed: "ЗАВЕРШЕНО",
    locked: "ЗАБЛОКИРОВАНО",
    unlocked: "ОТКРЫТО",
    selectLanguage: "Выбрать язык",
    close: "Закрыть",
    settings: "Настройки",
    next: "Далее",
    previous: "Назад",
    continue: "Продолжить",
    loading: "Загрузка...",
    congratulations: "Поздравляем!"
},

ur: {
    welcome: "آپ کا مستقبل یہاں سے شروع ہوتا ہے!",
    welcomeText: "دریافت کریں، بنائیں اور نئی چیزیں سیکھیں۔",
    start: "مہم شروع کریں",
    language: "زبان",
    achievements: "کامیابیاں",
    progress: "میری پیشرفت",
    help: "مدد مرکز",
    explore: "اپنی لیب دریافت کریں",
    chooseCategory: "ایک دنیا منتخب کریں اور شروع کریں!",
    engineering: "انجینئرنگ کی دنیا",
    aviation: "ہوابازی اور پائلٹ",
    computer: "کمپیوٹر سائنس اور ٹیکنالوجی",
    medical: "طبی سائنس اور ٹیکنالوجی",
    space: "خلاء اور سائنس",
    agriculture: "زراعت کی دنیا",
    sports: "کھیلوں کی دنیا",
    back: "واپس",
    completed: "مکمل",
    locked: "بند",
    unlocked: "کھلا",
    selectLanguage: "زبان منتخب کریں",
    close: "بند کریں",
    settings: "ترتیبات",
    next: "اگلا",
    previous: "پچھلا",
    continue: "جاری رکھیں",
    loading: "لوڈ ہو رہا ہے...",
    congratulations: "مبارک ہو!"
},

id: {
    welcome: "Masa depanmu dimulai di sini!",
    welcomeText: "Jelajahi, bangun, dan temukan hal menakjubkan.",
    start: "MULAI PETUALANGAN",
    language: "BAHASA",
    achievements: "Pencapaian",
    progress: "Progres Saya",
    help: "Pusat Bantuan",
    explore: "Jelajahi Laboratoriummu",
    chooseCategory: "Pilih dunia dan mulai petualanganmu!",
    engineering: "Dunia Teknik",
    aviation: "Penerbangan dan Pilot",
    computer: "Ilmu Komputer dan Teknologi",
    medical: "Ilmu Kedokteran dan Teknologi",
    space: "Antariksa dan Sains",
    agriculture: "Dunia Pertanian",
    sports: "Dunia Olahraga",
    back: "Kembali",
    completed: "SELESAI",
    locked: "TERKUNCI",
    unlocked: "TERBUKA",
    selectLanguage: "Pilih Bahasa",
    close: "Tutup",
    settings: "Pengaturan",
    next: "Berikutnya",
    previous: "Sebelumnya",
    continue: "Lanjutkan",
    loading: "Memuat...",
    congratulations: "Selamat!"
}

};


/* =========================================
   LANGUAGE FUNCTIONS
========================================= */

function getLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return languages[saved] ? saved : "en";
}

let currentLanguage = getLanguage();

function translate(key) {
    const selected = translations[currentLanguage] || translations.en;

    return selected[key] ??
           translations.en[key] ??
           key;
}

function applyLanguage(root = document) {

    currentLanguage = getLanguage();

    const dictionary = translations[currentLanguage] || translations.en;

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar" || currentLanguage === "ur"
        ? "rtl" : "ltr";

    document.body.classList.toggle(
        "rtl",
        document.documentElement.dir === "rtl"
    );

    root.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        const value = dictionary[key] ?? translations.en[key];

        if (value !== undefined) {
            element.textContent = value;
        }

    });

    root.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        const key = element.dataset.i18nPlaceholder;
        const value = dictionary[key] ?? translations.en[key];

        if (value !== undefined) {
            element.placeholder = value;
        }

    });

    root.querySelectorAll("[data-i18n-title]").forEach(element => {

        const key = element.dataset.i18nTitle;
        const value = dictionary[key] ?? translations.en[key];

        if (value !== undefined) {
            element.title = value;
        }

    });

}

function setLanguage(code) {

    if (!languages[code]) return false;

    localStorage.setItem(STORAGE_KEY, code);

    currentLanguage = code;

    applyLanguage();

    window.dispatchEvent(
        new CustomEvent("futurelab-language-changed", {
            detail: { language: code }
        })
    );

    return true;
}


/* =========================================
   PUBLIC API
========================================= */

window.FutureLabLanguage = {

    languages: languages,

    translations: translations,

    getLanguage: function () {
        return currentLanguage;
    },

    setLanguage: setLanguage,

    t: translate,

    apply: applyLanguage

};


/* =========================================
   AUTOMATIC TRANSLATION
========================================= */

if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", function () {
        applyLanguage();
    });

} else {

    applyLanguage();

}


/* Newly added translated elements */

const observer = new MutationObserver(function (changes) {

    changes.forEach(function (change) {

        change.addedNodes.forEach(function (node) {

            if (node.nodeType === 1) {
                applyLanguage(node);
            }

        });

    });

});

if (document.body) {

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

}

})();
