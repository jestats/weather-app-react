import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
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
              <input
                type="submits"
                placeholder="Current"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>San Francisco, CA</h1>
        <ul>
          <li>Monday 7:41 p.m.</li>
          <li>Sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudy"
                className="float-left"
              />
              <div className="float-left">
                <span className="Temperature">{Math.round(temperature)}</span>
                <span className="Units">°F | °C </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13 km/h%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2a2eb7984c02aca7e1add2c64025b4ae";
    let city = "San Francisco";
    let apiUrl = `http://api.openweathermao.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Getting your weather..";
  }
}
