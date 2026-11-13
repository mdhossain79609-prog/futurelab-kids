
/* FutureLab Kids Language Connector */
(function () {
    "use strict";

    const languages = [
        ["en", "English"],
        ["bn", "বাংলা"],
        ["zh", "中文"],
        ["hi", "हिन्दी"],
        ["es", "Español"],
        ["ar", "العربية"],
        ["fr", "Français"],
        ["pt", "Português"],
        ["ru", "Русский"],
        ["ur", "اردو"],
        ["id", "Indonesia"],
        ["ja", "日本語"]
    ];

    function engineReady() {
        return (
            typeof window.setLanguage === "function" &&
            typeof window.tr === "function" &&
            typeof window.applyLanguage === "function"
        );
    }

    window.FutureLabLanguage = {
        languages: languages,

        getLanguage: function () {
            return document.documentElement.lang || "en";
        },

        setLanguage: function (code) {
            if (!engineReady()) return false;
            window.setLanguage(code);
            return true;
        },

        t: function (key) {
            if (!engineReady()) return key;
            return window.tr(key);
        },

        apply: function () {
            if (engineReady()) {
                window.applyLanguage();
            }
        }
    };
})();
