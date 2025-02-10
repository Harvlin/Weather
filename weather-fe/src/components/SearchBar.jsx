// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name..."
                    className="w-full px-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm
                     shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400
                     pl-12 text-gray-800"
                />
                <Search className="absolute left-4 top-3.5 text-gray-500" size={20} />
                <button
                    type="submit"
                    className="absolute right-2 top-2 bg-blue-500 text-white px-4 py-1.5
                     rounded-md hover:bg-blue-600 transition-colors"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;