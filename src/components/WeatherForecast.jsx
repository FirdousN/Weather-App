import { Calendar, Droplets } from "lucide-react";
import React from "react";

export default function WeatherForecast() {
    return (
        <div
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8
    shadow-2xl"
        >
            <div className="flex items-center space-x-3 mb-8">
                <div className="p-9 bg-white/10 rounded-full">
                    <Calendar className="w-6 h-6 text-white/80 " />
                </div>
                <h2 className="text-2xl font-bold text-white">5 Day Forecast</h2>
            </div>

            <div className="space-y-4">
                {/* Map Method Logic */}
                <div className="flex items-center justify-between p-5 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 group border border-white/10">
                    <div className="flex items-center space-x-5 flex-1">
                        <div className="text-white/90 group-hover:text-white transition-all transform group-hover:scale-110 duration">
                            {/* Dynamic Icons */}
                        </div>
                        <div className="flex-1">
                            <div className="text-white font-semibold text-lg">{/* Conditional Date */}</div>
                            <div className="text-white/70 text-sm capitalize font-medium">Weather Description</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 text-white/60">
                            <Droplets className="w-4 h-4 text-blue-300" />
                            <span className="text-sm font-medium">{/* Dynamic Details */}</span>
                        </div>
                        <div className="text-right">
                            <div className="text-white font-bold text-xl">Temperate</div>
                            <div className="text-white text-sm font-medium">Main Temp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
