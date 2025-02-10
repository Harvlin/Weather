// src/components/WeatherDisplay.jsx
import React from 'react';
import { Cloud, Wind, Droplets, Thermometer } from 'lucide-react';

const WeatherDisplay = ({ data }) => {
    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg
                    transform transition-all duration-500 hover:scale-[1.02]">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">{data.cityName}</h2>
                <p className="text-lg text-gray-600 mt-1">
                    {data.weather[0].description.charAt(0).toUpperCase() +
                        data.weather[0].description.slice(1)}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <WeatherStat
                        icon={<Thermometer className="text-red-500" />}
                        label="Temperature"
                        value={`${data.main.temp}°C`}
                    />
                    <WeatherStat
                        icon={<Thermometer className="text-orange-500" />}
                        label="Feels Like"
                        value={`${data.main.feelsLike}°C`}
                    />
                </div>

                <div className="space-y-4">
                    <WeatherStat
                        icon={<Wind className="text-blue-500" />}
                        label="Wind Speed"
                        value={`${data.wind.speed} m/s`}
                    />
                    <WeatherStat
                        icon={<Droplets className="text-blue-400" />}
                        label="Humidity"
                        value={`${data.main.humidity}%`}
                    />
                </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between">
                    <div className="text-center">
                        <p className="text-gray-600">Min</p>
                        <p className="text-xl font-semibold text-gray-800">
                            {data.main.tempMin}°C
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600">Max</p>
                        <p className="text-xl font-semibold text-gray-800">
                            {data.main.tempMax}°C
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WeatherStat = ({ icon, label, value }) => (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
        {icon}
        <div>
            <p className="text-gray-600 text-sm">{label}</p>
            <p className="text-gray-800 font-semibold">{value}</p>
        </div>
    </div>
);

export default WeatherDisplay;