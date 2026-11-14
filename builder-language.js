
/* =========================================
   FUTURELAB KIDS - BUILDER LANGUAGE SYSTEM
   12 Languages | Sports Car Builder Phase 1
   Works with language.js
========================================= */

(function () {
    "use strict";

    const LANGS = [
        "en", "bn", "zh", "hi", "es", "ar",
        "fr", "pt", "ru", "ur", "id", "ja"
    ];

    /*
      প্রতিটি লাইনে ভাষার ক্রম:
      English, বাংলা, 中文, हिन्दी, Español, العربية,
      Français, Português, Русский, اردو, Indonesia, 日本語
    */

    const DATA = {
        "Monocoque Chassis": [
            "Monocoque Chassis","মনোকক চ্যাসিস","单体式底盘","मोनोकोक चेसिस",
            "Chasis monocasco","هيكل أحادي","Châssis monocoque","Chassi monocoque",
            "Монококовое шасси","مونوکوک چیسی","Sasis monokok","モノコックシャシー"
        ],
        "Front Splitter": [
            "Front Splitter","সামনের স্প্লিটার","前扰流板","फ्रंट स्प्लिटर",
            "Splitter delantero","مقسم أمامي","Lame avant","Splitter dianteiro",
            "Передний сплиттер","فرنٹ اسپلٹر","Splitter depan","フロントスプリッター"
        ],
        "Horseshoe Grille": [
            "Horseshoe Grille","ঘোড়ার খুর আকৃতির গ্রিল","马蹄形格栅","घोड़े की नाल ग्रिल",
            "Parrilla de herradura","شبكة حدوة الحصان","Calandre en fer à cheval","Grade em ferradura",
            "Решётка в форме подковы","گھوڑے کی نعل والی گرِل","Gril tapal kuda","馬蹄形グリル"
        ],
        "Aero Hood": [
            "Aero Hood","এরো হুড","空气动力学引擎盖","एयरो हुड",
            "Capó aerodinámico","غطاء محرك انسيابي","Capot aérodynamique","Capô aerodinâmico",
            "Аэродинамический капот","ایرو ہڈ","Kap mesin aerodinamis","エアロボンネット"
        ],
        "Quad-LED Headlights": [
            "Quad-LED Headlights","চারটি এলইডি হেডলাইট","四LED前灯","चार एलईडी हेडलाइट",
            "Faros LED cuádruples","مصابيح أمامية رباعية LED","Phares quadruples à LED","Faróis quádruplos de LED",
            "Четыре светодиодные фары","چار ایل ای ڈی ہیڈلائٹس","Lampu depan LED empat","4連LEDヘッドライト"
        ],
        "Sports Windshield": [
            "Sports Windshield","স্পোর্টস উইন্ডশিল্ড","运动型挡风玻璃","स्पोर्ट्स विंडशील्ड",
            "Parabrisas deportivo","زجاج أمامي رياضي","Pare-brise sport","Para-brisa esportivo",
            "Спортивное лобовое стекло","اسپورٹس ونڈشیلڈ","Kaca depan sport","スポーツフロントガラス"
        ],
        "Carbon Roof & Fin": [
            "Carbon Roof & Fin","কার্বন ছাদ ও ফিন","碳纤维车顶和尾鳍","कार्बन छत और फिन",
            "Techo y aleta de carbono","سقف وزعنفة من الكربون","Toit et aileron en carbone","Teto e barbatana de carbono",
            "Карбоновая крыша и плавник","کاربن چھت اور فن","Atap dan sirip karbon","カーボンルーフとフィン"
        ],
        "Cockpit Window": [
            "Cockpit Window","ককপিটের জানালা","驾驶舱车窗","कॉकपिट खिड़की",
            "Ventana de cabina","نافذة قمرة القيادة","Vitre du cockpit","Janela do cockpit",
            "Окно кабины","کاک پٹ کی کھڑکی","Jendela kokpit","コックピットウィンドウ"
        ],
        "Carbon Side Mirror": [
            "Carbon Side Mirror","কার্বন সাইড মিরর","碳纤维后视镜","कार्बन साइड मिरर",
            "Espejo lateral de carbono","مرآة جانبية كربونية","Rétroviseur latéral en carbone","Retrovisor lateral de carbono",
            "Карбоновое боковое зеркало","کاربن سائیڈ مرر","Kaca spion samping karbon","カーボンサイドミラー"
        ],
        "Chiron Door": [
            "Chiron Door","শিরোঁ দরজা","Chiron车门","शिरॉन दरवाज़ा",
            "Puerta Chiron","باب شيرون","Porte Chiron","Porta Chiron",
            "Дверь Chiron","شیرون دروازہ","Pintu Chiron","シロンのドア"
        ],
        "Signature C-Line": [
            "Signature C-Line","স্বাক্ষরযুক্ত সি-লাইন","标志性C线","सिग्नेचर सी-लाइन",
            "Línea C característica","خط C المميز","Ligne C signature","Linha C característica",
            "Фирменная линия C","دستخطی سی لائن","Garis C khas","特徴的なCライン"
        ],
        "Rear Fender Arch": [
            "Rear Fender Arch","পেছনের ফেন্ডার আর্চ","后轮拱","रियर फेंडर आर्च",
            "Arco del guardabarros trasero","قوس الرفرف الخلفي","Arche d'aile arrière","Arco do para-lama traseiro",
            "Задняя колёсная арка","پچھلا فینڈر آرچ","Lengkungan spatbor belakang","リアフェンダーアーチ"
        ],
        "W16 Engine & Scoops": [
            "W16 Engine & Scoops","W16 ইঞ্জিন ও এয়ার স্কুপ","W16发动机和进气口","W16 इंजन और एयर स्कूप",
            "Motor W16 y tomas de aire","محرك W16 ومداخل الهواء","Moteur W16 et prises d'air","Motor W16 e entradas de ar",
            "Двигатель W16 и воздухозаборники","W16 انجن اور ایئر اسکوپس","Mesin W16 dan saluran udara","W16エンジンとエアスクープ"
        ],
        "Active Rear Wing": [
            "Active Rear Wing","সক্রিয় পেছনের উইং","主动式后扰流翼","एक्टिव रियर विंग",
            "Alerón trasero activo","جناح خلفي نشط","Aileron arrière actif","Aerofólio traseiro ativo",
            "Активное заднее антикрыло","ایکٹو ریئر ونگ","Sayap belakang aktif","アクティブリアウィング"
        ],
        "LED Taillight Blade": [
            "LED Taillight Blade","এলইডি টেইললাইট","LED尾灯灯带","एलईडी टेललाइट",
            "Luz trasera LED","شفرة المصباح الخلفي LED","Feu arrière LED","Lanterna traseira LED",
            "Светодиодный задний фонарь","ایل ای ڈی ٹیل لائٹ","Lampu belakang LED","LEDテールライト"
        ],
        "Diffuser & Quad Exhaust": [
            "Diffuser & Quad Exhaust","ডিফিউজার ও চারটি এক্সহস্ট","扩散器和四排气管","डिफ्यूज़र और चार एग्जॉस्ट",
            "Difusor y cuatro escapes","ناشر هواء وأربعة أنابيب عادم","Diffuseur et quatre échappements","Difusor e quatro escapamentos",
            "Диффузор и четыре выхлопные трубы","ڈفیوزر اور چار ایگزاسٹ","Diffuser dan empat knalpot","ディフューザーと4本出しマフラー"
        ],
        "Carbon Side Skirt": [
            "Carbon Side Skirt","কার্বন সাইড স্কার্ট","碳纤维侧裙","कार्बन साइड स्कर्ट",
            "Faldón lateral de carbono","عتبة جانبية كربونية","Bas de caisse en carbone","Saia lateral de carbono",
            "Карбоновая боковая юбка","کاربن سائیڈ اسکرٹ","Side skirt karbon","カーボンサイドスカート"
        ],
        "Front Sport Wheel": [
            "Front Sport Wheel","সামনের স্পোর্টস চাকা","前运动轮","सामने का स्पोर्ट्स पहिया",
            "Rueda deportiva delantera","عجلة رياضية أمامية","Roue sport avant","Roda esportiva dianteira",
            "Переднее спортивное колесо","اگلا اسپورٹس وہیل","Roda sport depan","フロントスポーツホイール"
        ],
        "Rear Sport Wheel": [
            "Rear Sport Wheel","পেছনের স্পোর্টস চাকা","后运动轮","पीछे का स्पोर्ट्स पहिया",
            "Rueda deportiva trasera","عجلة رياضية خلفية","Roue sport arrière","Roda esportiva traseira",
            "Заднее спортивное колесо","پچھلا اسپورٹس وہیل","Roda sport belakang","リアスポーツホイール"
        ],
        "Two-Tone Rear Body": [
            "Two-Tone Rear Body","দুই রঙের পেছনের বডি","双色后车身","दो रंगों वाली पिछली बॉडी",
            "Carrocería trasera de dos tonos","هيكل خلفي بلونين","Carrosserie arrière bicolore","Carroceria traseira de duas cores",
            "Двухцветная задняя часть кузова","دو رنگوں والی پچھلی باڈی","Bodi belakang dua warna","ツートンリアボディ"
        ],

        "Reset": ["Reset","রিসেট","重置","रीसेट","Reiniciar","إعادة ضبط","Réinitialiser","Reiniciar","Сброс","ری سیٹ","Atur ulang","リセット"],
        "Start": ["Start","শুরু","开始","शुरू करें","Iniciar","ابدأ","Démarrer","Iniciar","Старт","شروع","Mulai","スタート"],
        "Stop": ["Stop","বন্ধ","停止","रोकें","Detener","إيقاف","Arrêter","Parar","Стоп","روکیں","Berhenti","停止"],
        "Steering": ["Steering","স্টিয়ারিং","方向盘","स्टीयरिंग","Dirección","التوجيه","Direction","Direção","Руль","اسٹیئرنگ","Kemudi","ステアリング"],
        "Brake": ["Brake","ব্রেক","刹车","ब्रेक","Freno","فرامل","Frein","Freio","Тормоз","بریک","Rem","ブレーキ"],
        "Gas": ["Gas","গ্যাস","油门","गैस","Acelerador","وقود","Accélérateur","Acelerador","Газ","گیس","Gas","アクセル"],
        "Color": ["Color","রং","颜色","रंग","Color","اللون","Couleur","Cor","Цвет","رنگ","Warna","色"],
        "Lights": ["Lights","লাইট","灯光","लाइट","Luces","الأضواء","Lumières","Luzes","Фары","لائٹس","Lampu","ライト"],
        "Sound": ["Sound","শব্দ","声音","ध्वनि","Sonido","الصوت","Son","Som","Звук","آواز","Suara","サウンド"],
        "GEAR": ["GEAR","গিয়ার","档位","गियर","MARCHA","الترس","VITESSE","MARCHA","ПЕРЕДАЧА","گیئر","GIGI","ギア"],
        "R Rev": ["R Rev","R রিভার্স","R倒车","R रिवर्स","R Marcha atrás","R رجوع","R Marche arrière","R Ré","R Назад","R ریورس","R Mundur","Rバック"],
        "D Drive": ["D Drive","D ড্রাইভ","D驾驶","D ड्राइव","D Conducir","D قيادة","D Conduire","D Dirigir","D Движение","D ڈرائیو","D Berkendara","Dドライブ"]
    };

    const MESSAGE_DATA = {
        "Assemble all 20 parts first!": [
            "Assemble all 20 parts first!","আগে ২০টি পার্টস লাগান!","请先安装全部20个零件！",
            "पहले सभी 20 भाग लगाएं!","¡Instala primero las 20 piezas!","قم بتركيب جميع القطع العشرين أولاً!",
            "Installez d'abord les 20 pièces !","Instale primeiro as 20 peças!","Сначала установите все 20 деталей!",
            "پہلے تمام 20 حصے لگائیں!","Pasang semua 20 bagian terlebih dahulu!","まず20個すべてのパーツを取り付けてください！"
        ],
        "W16 Engine Roaring!": [
            "W16 Engine Roaring!","W16 ইঞ্জিন গর্জন করছে!","W16发动机启动轰鸣！",
            "W16 इंजन गरज रहा है!","¡El motor W16 está rugiendo!","محرك W16 يزأر!",
            "Le moteur W16 rugit !","O motor W16 está rugindo!","Двигатель W16 ревёт!",
            "W16 انجن گرج رہا ہے!","Mesin W16 meraung!","W16エンジンが轟音を上げています！"
        ],
        "Engine Stopped": [
            "Engine Stopped","ইঞ্জিন বন্ধ","发动机已停止","इंजन बंद","Motor detenido",
            "توقف المحرك","Moteur arrêté","Motor desligado","Двигатель остановлен",
            "انجن بند ہو گیا","Mesin berhenti","エンジン停止"
        ],
        "Press Start first!": [
            "Press Start first!","আগে Start চাপুন!","请先按开始！","पहले स्टार्ट दबाएं!",
            "¡Pulsa Iniciar primero!","اضغط على ابدأ أولاً!","Appuyez d'abord sur Démarrer !",
            "Pressione Iniciar primeiro!","Сначала нажмите Старт!","پہلے اسٹارٹ دبائیں!",
            "Tekan Mulai terlebih dahulu!","先にスタートを押してください！"
        ]
    };

    const reverse = {};

    function currentLanguage() {
        let lang = "en";

        if (window.FutureLabLanguage &&
            typeof window.FutureLabLanguage.getLanguage === "function") {
            lang = window.FutureLabLanguage.getLanguage();
        } else {
            lang = localStorage.getItem("futurelabLanguage") || "en";
        }

        return LANGS.includes(lang) ? lang : "en";
    }

    function makeReverseMap() {
        Object.keys(DATA).forEach(key => {
            DATA[key].forEach(value => reverse[value] = key);
        });

        Object.keys(MESSAGE_DATA).forEach(key => {
            MESSAGE_DATA[key].forEach(value => reverse[value] = key);
        });
    }

    makeReverseMap();

    function translateText(original, lang) {
        const clean = original.trim();
        if (!clean) return original;

        let key = DATA[clean] ? clean : reverse[clean];

        if (key && DATA[key]) {
            const translated = DATA[key][LANGS.indexOf(lang)];
            return original.replace(clean, translated);
        }

        key = MESSAGE_DATA[clean] ? clean : reverse[clean];

        if (key && MESSAGE_DATA[key]) {
            const translated = MESSAGE_DATA[key][LANGS.indexOf(lang)];
            return original.replace(clean, translated);
        }

        return original;
    }

    function apply(root) {
        const lang = currentLanguage();
        const target = root || document.body;

        if (!target) return;

        const walker = document.createTreeWalker(
            target,
            NodeFilter.SHOW_TEXT,
            null
        );

        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);

        nodes.forEach(node => {
            const parent = node.parentElement;
            if (!parent) return;

            if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return;

            node.nodeValue = translateText(node.nodeValue, lang);
        });

        target.querySelectorAll("[placeholder], [title], [aria-label]").forEach(el => {
            ["placeholder", "title", "aria-label"].forEach(attr => {
                const value = el.getAttribute(attr);
                if (value) el.setAttribute(attr, translateText(value, lang));
            });
        });

        document.documentElement.lang = lang;
        document.documentElement.dir =
            (lang === "ar" || lang === "ur") ? "rtl" : "ltr";
    }

    let timer = null;

    function scheduleApply() {
        clearTimeout(timer);
        timer = setTimeout(() => apply(), 60);
    }

    window.BuilderLanguage = {
        apply: apply,
        translate: function (text) {
            return translateText(text, currentLanguage());
        },
        getLanguage: currentLanguage
    };

    document.addEventListener("DOMContentLoaded", scheduleApply);

    window.addEventListener("load", scheduleApply);

    window.addEventListener("futurelab-language-changed", scheduleApply);

    if (window.FutureLabLanguage) {
        scheduleApply();
    }

    const observer = new MutationObserver(scheduleApply);

    function startObserver() {
        if (document.body) {
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true
            });
            scheduleApply();
        }
    }

    if (document.body) {
        startObserver();
    } else {
        document.addEventListener("DOMContentLoaded", startObserver);
    }

})();
