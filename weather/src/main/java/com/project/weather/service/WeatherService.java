package com.project.weather.service;

import com.project.weather.domain.WeatherEntity;

public interface WeatherService {
    WeatherEntity getWeatherByCity(String city);
}