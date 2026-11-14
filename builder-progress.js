
/* =========================================
   FUTURELAB KIDS
   CENTRAL BUILDER PROGRESS SYSTEM
   Compatible with all Builder pages
========================================= */

(function () {
    "use strict";

    const STORAGE_KEY = "futurelabKidsProgressV1";

    function readProgress() {
        try {
            const data = JSON.parse(
                localStorage.getItem(STORAGE_KEY)
            ) || {};

            return {
                ...data,
                adventures: data.adventures || {},
                categories: data.categories || {},
                projects: data.projects || {},
                sound: data.sound ?? true,
                animations: data.animations ?? true
            };

        } catch (error) {
            return {
                adventures: {},
                categories: {},
                projects: {},
                sound: true,
                animations: true
            };
        }
    }

    function saveProgress(data) {
        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(data)
            );
            return true;
        } catch (error) {
            console.error("Progress save failed:", error);
            return false;
        }
    }

    function complete(projectId) {

        if (!projectId || typeof projectId !== "string") {
            console.error("Invalid Builder ID");
            return false;
        }

        const progress = readProgress();

        if (progress.projects[projectId] === true) {
            return true;
        }

        progress.projects[projectId] = true;

        if (!saveProgress(progress)) {
            return false;
        }

        window.dispatchEvent(
            new CustomEvent("futurelab-progress-changed", {
                detail: {
                    projectId: projectId
                }
            })
        );

        console.log("Builder completed:", projectId);

        return true;
    }

    function isCompleted(projectId) {
        const progress = readProgress();

        return progress.projects[projectId] === true;
    }

    function getProgress() {
        return readProgress();
    }

    window.FutureLabProgress = {
        complete: complete,
        isCompleted: isCompleted,
        getProgress: getProgress
    };

})();
