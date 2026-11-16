
/* ==========================================
   FUTURELAB KIDS
   DYNAMIC BUILDER ENGINE
   Version 2.0
========================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "futurelabKidsProgressV1";

  // Registry must load before this engine.
  const registry = window.FutureLabRegistry;

  if (!registry) {
    console.error(
      "FutureLab: builder-registry.js was not loaded!"
    );
    return;
  }

  // ------------------------------------------
  // READ SAVED PROGRESS
  // ------------------------------------------

  function readProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const data = saved ? JSON.parse(saved) : {};

      if (!data || typeof data !== "object") {
        throw new Error("Invalid progress data");
      }

      data.adventures =
        data.adventures || {};

      data.categories =
        data.categories || {};

      data.projects =
        data.projects || {};

      if (typeof data.projects !== "object") {
        data.projects = {};
      }

      data.sound =
        data.sound !== false;

      data.animations =
        data.animations !== false;

      return data;

    } catch (error) {
      console.error(
        "FutureLab: Progress read error",
        error
      );

      return {
        adventures: {},
        categories: {},
        projects: {},
        sound: true,
        animations: true
      };
    }
  }

  // ------------------------------------------
  // SAVE PROGRESS
  // ------------------------------------------

  function saveProgress(progress) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(progress)
      );

      return true;

    } catch (error) {
      console.error(
        "FutureLab: Progress save error",
        error
      );

      return false;
    }
  }

  // ------------------------------------------
  // FIND BUILDER
  // ------------------------------------------

  function findBuilder(file) {

    for (const categoryId of Object.keys(registry)) {

      const builders =
        registry[categoryId].builders || [];

      const index = builders.findIndex(
        builder => builder.file === file ||
                   builder.id === file
      );

      if (index !== -1) {
        return {
          categoryId,
          builders,
          index,
          builder: builders[index]
        };
      }
    }

    return null;
  }

  // ------------------------------------------
  // CHECK COMPLETION
  // ------------------------------------------

  function isCompleted(file) {

    const progress = readProgress();

    return progress.projects[file] === true;
  }

  // ------------------------------------------
  // CHECK UNLOCK STATUS
  // ------------------------------------------

  function isUnlocked(file) {

    const found = findBuilder(file);

    if (!found) return false;

    // First builder in each category is unlocked.
    if (found.index === 0) return true;

    // Previous builder must be completed.
    const previous =
      found.builders[found.index - 1];

    return isCompleted(previous.file);
  }

  // ------------------------------------------
  // COMPLETE BUILDER
  // ------------------------------------------

  function complete(file) {

    const found = findBuilder(file);

    if (!found) {
      console.error(
        "FutureLab: Builder not found:",
        file
      );
      return false;
    }

    // Locked builders cannot be completed.
    if (!isUnlocked(file)) {
      console.warn(
        "FutureLab: This Builder is still locked:",
        file
      );
      return false;
    }

    const progress = readProgress();

    // Already completed.
    if (progress.projects[file] === true) {
      return true;
    }

    progress.projects[file] = true;

    if (!saveProgress(progress)) {
      return false;
    }

    const next =
      found.builders[found.index + 1] || null;

    // Notify the Index and other pages.
    window.dispatchEvent(
      new CustomEvent("futurelab-progress-changed", {
        detail: {
          projectId: file,
          category: found.categoryId,
          nextBuilder: next ? next.file : null
        }
      })
    );

    console.log(
      "FutureLab: Builder completed:",
      file
    );

    return true;
  }

  // ------------------------------------------
  // RESET BUILDER AND FOLLOWING BUILDERS
  // ------------------------------------------

  function resetBuilder(file) {

    const found = findBuilder(file);

    if (!found) return false;

    const progress = readProgress();

    // Reset this builder and all later builders
    // in the same category only.
    found.builders
      .slice(found.index)
      .forEach(builder => {
        delete progress.projects[builder.file];
      });

    if (!saveProgress(progress)) {
      return false;
    }

    window.dispatchEvent(
      new CustomEvent("futurelab-progress-changed", {
        detail: {
          projectId: file,
          category: found.categoryId,
          reset: true
        }
      })
    );

    return true;
  }

  // ------------------------------------------
  // GET ALL BUILDER GROUPS
  // ------------------------------------------

  function getBuilderGroups() {

    const groups = {};

    for (const categoryId of Object.keys(registry)) {

      groups[categoryId] =
        registry[categoryId].builders.map(builder => [
          builder.name,
          builder.emoji,
          builder.file,
          builder.id
        ]);
    }

    return groups;
  }

  // ------------------------------------------
  // REFRESH INDEX
  // ------------------------------------------

  function refresh() {

    if (typeof window.renderBuilders === "function") {
      window.renderBuilders();
    }

    if (typeof window.updateProgress === "function") {
      window.updateProgress();
    }
  }

  // ------------------------------------------
  // PUBLIC PROGRESS API
  // ------------------------------------------

  window.FutureLabProgress = {

    complete,
    isCompleted,
    isUnlocked,

    getProgress: readProgress,

    resetBuilder,

    getBuilderGroups
  };

  // ------------------------------------------
  // PUBLIC UNLOCK API
  // ------------------------------------------

  window.FutureLabUnlock = {

    groups: getBuilderGroups(),

    isUnlocked,

    isCompleted,

    refresh,

    checkMessages: refresh
  };

  // ------------------------------------------
  // AUTOMATIC REFRESH
  // ------------------------------------------

  window.addEventListener(
    "futurelab-progress-changed",
    refresh
  );

  window.addEventListener(
    "pageshow",
    refresh
  );

  window.addEventListener(
    "storage",
    function (event) {

      if (event.key === STORAGE_KEY) {
        refresh();
      }

    }
  );

  console.log(
    "FutureLab: Dynamic Builder Engine loaded!"
  );

})();
