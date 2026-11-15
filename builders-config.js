/* =========================================
   FUTURELAB KIDS
   CENTRAL BUILDERS CONFIGURATION
========================================= */

window.FutureLabConfig = {
    builderGroups: {
        engineering: {
            container: "engineeringList",
            items: [
                { name: "Sports Car Builder", emoji: "🏎️", file: "sports-car-builder.html", key: "sportsCar" },
                { name: "Jeep Builder", emoji: "🚙", file: "jeep.html", key: "jeep" },
                { name: "Volvo AC Bus", emoji: "🚌", file: "mega-bus.html", key: "bus" },
                { name: "Train Builder", emoji: "🚆", file: "train-builder.html", key: "train" }
            ]
        },
        aviation: {
            container: "aviationList",
            items: [
                { name: "Helicopter Builder", emoji: "🚁", file: "helicopter-builder.html", key: "helicopter" },
                { name: "Airplane Builder", emoji: "✈️", file: "airplane-builder.html", key: "airplane" },
                { name: "Bomber Aircraft", emoji: "💣", file: "bomber-builder.html" },
                { name: "Fighter Jet", emoji: "🛩️", file: "fighter-jet.html" }
            ]
        },
        computer: {
            container: "computerList",
            items: [
                { name: "Laptop Builder", emoji: "💻", file: "laptop-builder.html", key: "laptopBuilder" },
                { name: "Desktop PC Builder", emoji: "🖥️", file: "desktop-pc-builder.html", key: "desktopBuilder" }
            ]
        },
        medical: {
            container: "medicalList",
            items: [
                { name: "X-Ray Machine", emoji: "🩻", file: "xray-machine.html" },
                { name: "Ultrasound Machine", emoji: "🏥", file: "ultrasound-machine.html" },
                { name: "CT Scan Machine", emoji: "🧠", file: "ct-scan-machine.html" },
                { name: "EEG Machine", emoji: "📈", file: "eeg-machine.html" },
                { name: "Dental Equipment", emoji: "🦷", file: "dental-equipment.html" },
                { name: "Eye Examination Equipment", emoji: "👁️", file: "eye-examination-equipment.html" }
            ]
        },
        space: {
            container: "spaceList",
            items: [
                { name: "Rocket Builder", emoji: "🚀", file: "rocket-builder.html", key: "rocketBuilder" },
                { name: "Satellite Unit Builder", emoji: "🛰️", file: "Satellite_Unit_Builder_3D.html", key: "satelliteBuilder" }
            ]
        },
        agriculture: {
            container: "agricultureList",
            items: [
                { name: "Mini Tractor Builder", emoji: "🚜", file: "mini-tractor.html" },
                { name: "Power Tiller Builder", emoji: "🌾", file: "power-tiller.html" }
            ]
        },
        sports: {
            container: "sportsList",
            items: [
                { name: "Treadmill Builder", emoji: "🏃", file: "treadmill.html" },
                { name: "Five Station Gym", emoji: "🏋️", file: "five-station-gym.html" }
            ]
        }
    }
};

console.log("FutureLab Builders Config Loaded Successfully!");
