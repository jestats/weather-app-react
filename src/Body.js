import React from "react";
React;

export default function Body() {
  return (
    <div className="container">
      <div className="w-wrap">
        <div className="weather-app">
          <form id="search-form" class="mb-3">
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
            <h1 id="city"></h1>
            <ul>
              <li>
                Last updated: <span id="date"></span>
              </li>
              <li id="description"></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-9">
              <div className="clearfix weather-temperature">
                <img
                  src="sun_behind_small-cloud.png"
                  alt="sunny"
                  id="icon"
                  className="float-left"
                  width="40"
                />
                <div className="float-left">
                  <strong id="temperature"></strong>
                  <span className="units">
                    <a href="#" id="celsius-link" className="active">
                      °C
                    </a>
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-3">
              <ul>
                <li>
                  Humidity: <span id="humidity"></span>%
                </li>
                <li>
                  Wind: <span id="wind"></span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
