
/* =====================================================
   FUTURELAB KIDS
   CENTRAL BUILDER UNLOCK SYSTEM
   File: builder-unlock-system.js
===================================================== */

(function () {
    "use strict";

    const ACK_KEY = "futurelabBuilderUnlockAcksV1";

    // প্রতিটি ক্যাটাগরির Builder-এর ক্রম
    const GROUPS = {
        engineering: [
            ["Sports Car Builder", "sports-car-builder.html"],
            ["Jeep Builder", "jeep.html"],
            ["Volvo AC Bus", "mega-bus.html"],
            ["Train Builder", "train-builder.html"]
        ],

        aviation: [
            ["Helicopter Builder", "helicopter-builder.html"],
            ["Airplane Builder", "airplane-builder.html"],
            ["Bomber Aircraft", "bomber-builder.html"],
            ["Fighter Jet", "fighter-jet.html"]
        ],

        computer: [
            ["Laptop Builder", "laptop-builder.html"],
            ["Desktop PC Builder", "desktop-pc-builder.html"]
        ],

        medical: [
            ["X-Ray Machine", "xray-machine.html"],
            ["Ultrasound Machine", "ultrasound-machine.html"],
            ["CT Scan Machine", "ct-scan-machine.html"],
            ["EEG Machine", "eeg-machine.html"],
            ["Dental Equipment", "dental-equipment.html"],
            ["Eye Examination Equipment", "eye-examination-equipment.html"]
        ],

        space: [
            ["Rocket Builder", "rocket-builder.html"],
            ["Satellite Unit Builder", "Satellite_Unit_Builder_3D.html"]
        ],

        agriculture: [
            ["Mini Tractor Builder", "mini-tractor.html"],
            ["Power Tiller Builder", "power-tiller.html"]
        ],

        sports: [
            ["Treadmill", "treadmill.html"],
            ["Five Station Gym", "five-station-gym.html"]
        ]
    };

    // সম্পন্ন Builder-এর তালিকা
    function getCompleted(projectId) {
        if (
            window.FutureLabProgress &&
            typeof window.FutureLabProgress.isCompleted === "function"
        ) {
            return window.FutureLabProgress.isCompleted(projectId);
        }

        return false;
    }

    // Continue চাপ দেওয়ার তথ্য
    function getAcknowledgements() {
        try {
            return JSON.parse(localStorage.getItem(ACK_KEY)) || {};
        } catch (error) {
            return {};
        }
    }

    function saveAcknowledgements(data) {
        localStorage.setItem(ACK_KEY, JSON.stringify(data));
    }

    // Builder কোন ক্যাটাগরিতে আছে তা খুঁজে বের করা
    function findBuilder(projectId) {
        for (const category in GROUPS) {
            const items = GROUPS[category];

            for (let i = 0; i < items.length; i++) {
                if (items[i][1] === projectId) {
                    return {
                        category: category,
                        index: i,
                        name: items[i][0],
                        file: items[i][1],
                        items: items
                    };
                }
            }
        }

        return null;
    }

    // Builder আনলক কি না
    function isUnlocked(projectId) {
        const builder = findBuilder(projectId);

        if (!builder) return false;

        // প্রতিটি ক্যাটাগরির প্রথম Builder সবসময় আনলক
        if (builder.index === 0) return true;

        const previous = builder.items[builder.index - 1];
        const acknowledgements = getAcknowledgements();

        // আগের Builder সম্পন্ন এবং Continue চাপা থাকতে হবে
        return (
            getCompleted(previous[1]) &&
            acknowledgements[previous[1]] === true
        );
    }

    // অভিনন্দন বার্তার ডিজাইন
    function createModal() {
        if (document.getElementById("futurelabUnlockModal")) return;

        const style = document.createElement("style");

        style.textContent = `
            #futurelabUnlockModal {
                position: fixed;
                inset: 0;
                z-index: 999999;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(10, 25, 60, 0.78);
                font-family: Arial, sans-serif;
            }

            #futurelabUnlockModal .unlock-card {
                width: 100%;
                max-width: 390px;
                padding: 28px 22px;
                border-radius: 25px;
                text-align: center;
                background: linear-gradient(145deg,#ffffff,#e8f7ff);
                box-shadow: 0 15px 45px rgba(0,0,0,.3);
                animation: unlockPop .35s ease;
            }

            @keyframes unlockPop {
                from {
                    transform: scale(.75);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }

            #futurelabUnlockModal .unlock-trophy {
                font-size: 65px;
                margin-bottom: 12px;
            }

            #futurelabUnlockModal h2 {
                color: #0877d1;
                font-size: 25px;
                margin: 8px 0 12px;
            }

            #futurelabUnlockModal p {
                color: #34445a;
                font-size: 16px;
                line-height: 1.6;
                margin: 10px 0;
            }

            #futurelabUnlockModal .unlock-next {
                margin: 18px 0;
                padding: 13px;
                border-radius: 14px;
                background: #d9f3ff;
                color: #075caa;
                font-weight: bold;
                font-size: 17px;
            }

            #futurelabUnlockModal button {
                width: 100%;
                border: none;
                border-radius: 30px;
                padding: 15px;
                background: linear-gradient(90deg,#ff8a00,#ffbd16);
                color: white;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                box-shadow: 0 5px 0 #d66b00;
            }

            #futurelabUnlockModal button:active {
                transform: translateY(3px);
                box-shadow: 0 2px 0 #d66b00;
            }
        `;

        document.head.appendChild(style);

        const modal = document.createElement("div");
        modal.id = "futurelabUnlockModal";

        modal.innerHTML = `
            <div class="unlock-card">
                <div class="unlock-trophy">🏆</div>
                <h2>Congratulations!</h2>
                <p id="unlockCompletedText">
                    You completed the Builder!
                </p>
                <p>Great job! You are ready for your next adventure.</p>
                <div class="unlock-next" id="unlockNextText"></div>
                <button id="unlockContinueButton">
                    CONTINUE 🚀
                </button>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById("unlockContinueButton")
            .addEventListener("click", continueUnlock);
    }

    let currentPendingFile = null;

    // অভিনন্দন বার্তা দেখানো
    function showMessage(builder, nextBuilder) {
        createModal();

        currentPendingFile = builder.file;

        document.getElementById("unlockCompletedText").textContent =
            "You successfully completed " + builder.name + "!";

        document.getElementById("unlockNextText").textContent =
            "🔓 Next Builder: " + nextBuilder[0];

        document.getElementById("futurelabUnlockModal").style.display =
            "flex";
    }

    // Continue চাপলে পরের Builder আনলক
    function continueUnlock() {
        if (!currentPendingFile) return;

        const acknowledgements = getAcknowledgements();

        acknowledgements[currentPendingFile] = true;

        saveAcknowledgements(acknowledgements);

        currentPendingFile = null;

        document.getElementById("futurelabUnlockModal").style.display =
            "none";

        // Builder কার্ড আবার আপডেট
        if (typeof window.renderBuilders === "function") {
            window.renderBuilders();
        }

        window.dispatchEvent(
            new CustomEvent("futurelab-builder-unlocked")
        );

        checkMessages();
    }

    // সম্পন্ন Builder-এর জন্য বার্তা দেখানো
    function checkMessages() {
        if (currentPendingFile) return;

        const acknowledgements = getAcknowledgements();

        for (const category in GROUPS) {
            const items = GROUPS[category];

            for (let i = 0; i < items.length - 1; i++) {
                const current = items[i];
                const next = items[i + 1];

                if (
                    getCompleted(current[1]) &&
                    acknowledgements[current[1]] !== true
                ) {
                    showMessage(
                        {
                            name: current[0],
                            file: current[1]
                        },
                        next
                    );

                    return;
                }
            }
        }
    }

    // অন্যান্য কোডের জন্য API
    window.FutureLabUnlock = {
        groups: GROUPS,
        isUnlocked: isUnlocked,
        isCompleted: getCompleted,
        checkMessages: checkMessages,
        refresh: function () {
            checkMessages();

            if (typeof window.renderBuilders === "function") {
                window.renderBuilders();
            }
        }
    };

    // Builder সম্পন্ন হওয়ার পর বার্তা দেখাবে
    window.addEventListener("futurelab-progress-changed", function () {
        checkMessages();
    });

    window.addEventListener("pageshow", function () {
        checkMessages();
    });

    // পেজ চালু হলে পরীক্ষা করবে
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function () {
            checkMessages();

            if (typeof window.renderBuilders === "function") {
                window.renderBuilders();
            }
        });
    } else {
        checkMessages();
    }

})();
