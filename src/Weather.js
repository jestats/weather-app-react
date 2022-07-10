import React from "react";
import axios from "axios";

export default function Weather() {
  let weatherData = {
    city: "San Francisco, CA",
    temperature: 77,
    day: "Monday",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    time: "15:29",
    description: "Sunny",
    humidity: 5,
    wind: 7,
  };

  return (
    <div>
      <div className="container">
        <div className="w-wrap">
          <div className="weather-app">
            <div className="overview">
              <h1 id="city">{weatherData.city}</h1>
              <ul>
                <li>
                  Last updated: <span id="date">{weatherData.day}</span>
                </li>
                <li id="description">{weatherData.time}</li>
              </ul>
            </div>
            <div class="row">
              <div class="col-9">
                <div class="clearfix weather-temperature">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    id="icon"
                    class="float-left"
                    width="40"
                  />
                  <div class="float-left">
                    <strong id="temperature">{weatherData.temperature}</strong>
                    <span class="units">
                      <a href="#" id="celsius-link" class="active">
                        °C |
                      </a>
                      <a href="#" id="fahrenheit-link" class="active">
                        °F
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <ul>
                  <li>
                    Humidity: {weatherData.humidity}
                    <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: {weatherData.wind}
                    <span id="wind"></span> km/h
                  </li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
