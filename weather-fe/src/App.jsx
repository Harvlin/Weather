// src/App.jsx
import React from 'react';
import { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`http://localhost:8080/api/weather/${city}`);
            if (!response.ok) throw new Error('City not found');
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    Weather Forecast
                </h1>
                <SearchBar onSearch={fetchWeather} />

                {loading && <LoadingSpinner />}
                {error && <ErrorMessage message={error} />}
                {weatherData && <WeatherDisplay data={weatherData} />}
            </div>
        </div>
    );
};

export default App;