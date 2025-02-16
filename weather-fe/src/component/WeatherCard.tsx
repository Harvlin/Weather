import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface WeatherProps {
    weather: {
        city: string;
        temperature: number;
        humidity: number;
        description: string;
        windSpeed: number; // Properti baru untuk kecepatan angin
    };
}

const WeatherCard: React.FC<WeatherProps> = ({ weather }) => {
    return (
        <Card sx={{ mt: 4 }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {weather.city}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="body1">
                            Suhu: {weather.temperature}°C
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">
                            Kelembapan: {weather.humidity}%
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">
                            Angin: {weather.windSpeed} m/s
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Deskripsi: {weather.description}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default WeatherCard;
