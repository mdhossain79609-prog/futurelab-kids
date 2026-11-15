
/* =========================================
   FUTURELAB KIDS
   CENTRAL BUILDER PROGRESS SYSTEM
   VERSION 2.0
   Compatible with index.html
========================================= */

(function () {
    "use strict";

    const STORAGE_KEY = "futurelabKidsProgressV1";

    /* ALL BUILDER CATEGORIES */

    const BUILDER_GROUPS = {

        engineering: [
            "sports-car-builder.html",
            "jeep.html",
            "mega-bus.html",
            "train-builder.html"
        ],

        aviation: [
            "helicopter-builder.html",
            "airplane-builder.html",
            "bomber-builder.html",
            "fighter-jet.html"
        ],

        computer: [
            "laptop-builder.html",
            "desktop-pc-builder.html"
        ],

        medical: [
            "xray-machine.html",
            "ultrasound-machine.html",
            "ct-scan-machine.html",
            "eeg-machine.html",
            "dental-equipment.html",
            "eye-examination-equipment.html"
        ],

        space: [
            "rocket-builder.html",
            "Satellite_Unit_Builder_3D.html"
        ],

        agriculture: [
            "mini-tractor.html",
            "power-tiller.html"
        ],

        sports: [
            "treadmill.html",
            "five-station-gym.html"
        ]

    };


    /* READ PROGRESS */

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


    /* SAVE PROGRESS */

    function saveProgress(progress) {

        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(progress)
            );

            return true;

        } catch (error) {

            console.error(
                "FutureLab Progress Save Error:",
                error
            );

            return false;
        }
    }


    /* FIND BUILDER CATEGORY */

    function findBuilder(projectId) {

        for (const category in BUILDER_GROUPS) {

            const index =
                BUILDER_GROUPS[category].indexOf(projectId);

            if (index !== -1) {

                return {
                    category: category,
                    index: index,
                    items: BUILDER_GROUPS[category]
                };

            }
        }

        return null;
    }


    /* CHECK COMPLETION */

    function isCompleted(projectId) {

        const progress = readProgress();

        return progress.projects[projectId] === true;
    }


    /* CHECK UNLOCK STATUS */

function isUnlocked(projectId) {

    if (window.FutureLabUnlock) {
        return window.FutureLabUnlock.isUnlocked(projectId);
    }

    const builder = findBuilder(projectId);

    if (!builder) return false;

    return builder.index === 0;
}


    /* COMPLETE BUILDER */

    function complete(projectId) {

        if (
            typeof projectId !== "string" ||
            !projectId.trim()
        ) {
            console.error("Invalid Builder ID");
            return false;
        }

        const builder = findBuilder(projectId);

        if (!builder) {

            console.error(
                "Builder ID not found:",
                projectId
            );

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

        const nextIndex = builder.index + 1;

        const nextBuilder =
            builder.items[nextIndex] || null;

        window.dispatchEvent(
            new CustomEvent("futurelab-progress-changed", {
                detail: {
                    projectId: projectId,
                    category: builder.category,
                    nextBuilder: nextBuilder
                }
            })
        );

        console.log(
            "Builder completed:",
            projectId
        );

        if (nextBuilder) {

            console.log(
                "Next Builder Unlocked:",
                nextBuilder
            );

        } else {

            console.log(
                "Category completed:",
                builder.category
            );

        }

        return true;
    }


    /* GET COMPLETE PROGRESS */

    function getProgress() {
        return readProgress();
    }


    /* RESET ONE BUILDER */

    function resetBuilder(projectId) {

        const builder = findBuilder(projectId);

        if (!builder) return false;

        const progress = readProgress();

        const items = builder.items;

        const index = builder.index;

        for (let i = index; i < items.length; i++) {
            delete progress.projects[items[i]];
        }

        return saveProgress(progress);
    }


    /* PUBLIC API */

    window.FutureLabProgress = {

        complete: complete,

        isCompleted: isCompleted,

        isUnlocked: isUnlocked,

        getProgress: getProgress,

        resetBuilder: resetBuilder,

        getBuilderGroups: function () {
            return JSON.parse(
                JSON.stringify(BUILDER_GROUPS)
            );
        }

    };


    console.log(
        "FutureLab Central Progress System Ready!"
    );

})();
