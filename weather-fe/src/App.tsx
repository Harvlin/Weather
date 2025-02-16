import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import WeatherCard from './component/WeatherCard.tsx';
import axios from 'axios';

interface WeatherData {
    city: string;
    temperature: number;
    humidity: number;
    description: string;
    windSpeed: number; // Properti baru untuk kecepatan angin
}

const App: React.FC = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        setError('');
        try {
            const response = await axios.get<WeatherData>(`http://localhost:8080/api/weather/${city}`);
            setWeatherData(response.data);
        } catch (err) {
            setError('Tidak dapat mengambil data cuaca. Periksa nama kota atau koneksi.');
            setWeatherData(null);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                Aplikasi Cuaca
            </Typography>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
                <TextField
                    label="Masukkan Nama Kota"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    fullWidth
                />
                <Button variant="contained" color="primary" onClick={fetchWeather}>
                    Cari
                </Button>
            </Box>
            {error && (
                <Typography variant="body1" color="error" align="center">
                    {error}
                </Typography>
            )}
            {weatherData && <WeatherCard weather={weatherData} />}
        </Container>
    );
};

export default App;
