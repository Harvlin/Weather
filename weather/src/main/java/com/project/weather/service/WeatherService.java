package com.project.weather.service;

import com.project.weather.domain.OpenWeatherResponse;
import com.project.weather.domain.WeatherResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    private final RestTemplate restTemplate;

    @Value("${weather.api.url}")
    private String weatherApiUrl;

    @Value("${weather.api.key}")
    private String weatherApiKey;

    public WeatherService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public WeatherResponse getWeatherByCity(String city) {
        String url = String.format("%s?q=%s&appid=%s&units=metric", weatherApiUrl, city, weatherApiKey);
        OpenWeatherResponse owr = restTemplate.getForObject(url, OpenWeatherResponse.class);
        return convertToWeatherResponse(owr);
    }

    private WeatherResponse convertToWeatherResponse(OpenWeatherResponse owr) {
        if (owr == null) {
            return null;
        }
        WeatherResponse response = new WeatherResponse();
        response.setCity(owr.getName());
        response.setTemperature(owr.getMain().getTemp());
        response.setHumidity(owr.getMain().getHumidity());
        if (owr.getWeather() != null && !owr.getWeather().isEmpty()) {
            response.setDescription(owr.getWeather().get(0).getDescription());
        }
        if (owr.getWind() != null) {
            response.setWindSpeed(owr.getWind().getSpeed());
        }
        return response;
    }
}
