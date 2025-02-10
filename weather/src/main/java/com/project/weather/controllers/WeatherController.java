package com.project.weather.controllers;

import com.project.weather.domain.WeatherEntity;
import com.project.weather.service.WeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/weather")
@RequiredArgsConstructor
public class WeatherController {

    private final WeatherService weatherService;

    @GetMapping("/{city}")
    public WeatherEntity getWeatherByCity(@PathVariable String city) {
        return weatherService.getWeatherByCity(city);
    }
}
