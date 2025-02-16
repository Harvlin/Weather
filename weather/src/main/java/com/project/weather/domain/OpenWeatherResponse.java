package com.project.weather.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OpenWeatherResponse {

    @JsonProperty("name")
    private String name;

    @JsonProperty("weather")
    private List<Weather> weather;

    @JsonProperty("main")
    private Main main;

    @JsonProperty("wind")
    private Wind wind;

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Weather {
        @JsonProperty("description")
        private String description;

        public String getDescription() {
            return description;
        }
        public void setDescription(String description) {
            this.description = description;
        }
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Main {
        @JsonProperty("temp")
        private double temp;

        @JsonProperty("humidity")
        private int humidity;

        public double getTemp() {
            return temp;
        }
        public void setTemp(double temp) {
            this.temp = temp;
        }
        public int getHumidity() {
            return humidity;
        }
        public void setHumidity(int humidity) {
            this.humidity = humidity;
        }
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Wind {
        @JsonProperty("speed")
        private double speed;

        public double getSpeed() {
            return speed;
        }
        public void setSpeed(double speed) {
            this.speed = speed;
        }
    }
}
