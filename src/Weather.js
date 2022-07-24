import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: "Saturday 08:08pm",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    setReady(weatherData.ready);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                placeholder="Search"
                className="btn btn-primary w-100"
              />
            </div>
            <div className="col-3">
              <button
                class="btn btn-success w-100"
                id="current-location-button"
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date} </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="Temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="Units">°F | °C </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "San Francisco";
    const apiKey = "30fdfef4758c3c1aaa63ad9e51343319";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
    return "Getting your weather..";
  }
}
