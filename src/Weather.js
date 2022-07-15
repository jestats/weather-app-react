import React from "react";
import "./Weather.css";

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
            <form id="search-form" className="mb-3">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Search for a city"
                    autocomplete="off"
                    autofocus="on"
                    className="form-control"
                    id="city-input"
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-success w-100"
                    id="current-location-button"
                  >
                    Current
                  </button>
                </div>
              </div>
            </form>

            <div className="overview">
              <h1 id="city">{weatherData.city}</h1>
              <ul>
                <li>
                  Last updated: <span id="date">{weatherData.day}</span>
                </li>
                <li id="description">{weatherData.time}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-9">
                <div className="clearfix weather-temperature">
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    id="icon"
                    className="float-left"
                    width="55"
                  />
                  <div className="float-left">
                    <strong id="temperature">{weatherData.temperature}</strong>
                    <span className="units">
                      <a href="/" id="celsius-link" className="active">
                        °C |
                      </a>
                      <a href="/" id="fahrenheit-link" className="active">
                        °F
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <ul>
                  <li className="Descript">
                    Humidity: {weatherData.humidity}
                    <span id="humidity"></span>%
                  </li>
                  <li className="Descript">
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
