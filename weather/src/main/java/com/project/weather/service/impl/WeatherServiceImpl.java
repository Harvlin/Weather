package com.project.weather.service.impl;

import com.project.weather.domain.WeatherEntity;
import com.project.weather.service.WeatherService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
@RequiredArgsConstructor
public class WeatherServiceImpl implements WeatherService {
    private final RestTemplate restTemplate;
    private final String apiKey = "c3cf00d3c3a1afb48795573f8ba054de";
    private final String baseUrl = "http://api.openweathermap.org/data/2.5/weather";

    @Override
    public WeatherEntity getWeatherByCity(String city) {
        String url = UriComponentsBuilder.fromUriString(baseUrl)
                .queryParam("q", city)
                .queryParam("appid", apiKey)
                .queryParam("units", "metric")  // Use Celsius
                .build()
                .toUriString();

        return restTemplate.getForObject(url, WeatherEntity.class);
    }
}
