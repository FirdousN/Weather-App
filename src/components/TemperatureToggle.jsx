import React from "react";

export default function TemperatureToggle() {
    return (
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-shadow-lg">
            <div className="flex items-center">
                <button className={`px-4 py-2 rounded-xl test-sm font-semibold  transition-all duration-300`}
                >
                    °C
                </button>
                <button className={`px-4 py-2 rounded-xl test-sm font-semibold  transition-all duration-300`}
                >
                    °F
                </button>
            </div>
        </div>
    );
}
