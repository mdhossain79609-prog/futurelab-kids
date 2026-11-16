
/* ===================================
   FUTURELAB BUILDER SYSTEM LOADER
=================================== */

(function () {

    const currentScript = document.currentScript;

    const baseURL = new URL(
        "./builder-system/",
        currentScript.src
    );

    function loadScript(file) {

        return new Promise((resolve, reject) => {

            const script = document.createElement("script");

            script.src = new URL(file, baseURL).href;

            script.onload = resolve;

            script.onerror = () => reject(
                new Error("Could not load " + file)
            );

            document.head.appendChild(script);

        });

    }

    async function startBuilderSystem() {

        try {

            if (window.FutureLabProgress) {
                return;
            }

            if (!window.FutureLabRegistry) {
                await loadScript("builder-registry.js");
            }

            if (!window.FutureLabProgress) {
                await loadScript("builder-engine.js");
            }

            console.log("FutureLab Builder System connected!");

        } catch (error) {

            console.error(
                "Builder System Error:",
                error
            );

        }

    }

    startBuilderSystem();

})();
