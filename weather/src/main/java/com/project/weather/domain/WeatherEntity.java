package com.project.weather.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WeatherEntity {
    private Main main;
    private Wind wind;
    @JsonProperty("name")
    private String cityName;
    private Weather[] weather;

    @Getter
    @Setter
    public static class Main {
        private double temp;
        private double humidity;
        @JsonProperty("feels_like")
        private double feelsLike;
        @JsonProperty("temp_min")
        private double tempMin;
        @JsonProperty("temp_max")
        private double tempMax;
    }

    @Getter
    @Setter
    public static class Wind {
        private double speed;
        private double deg;
    }

    @Getter
    @Setter
    public static class Weather {
        private String main;
        private String description;
    }
}

