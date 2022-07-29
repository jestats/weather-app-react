import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        Weather App
        <Weather defaultCity="San Francisco" />
        <footer>
          This code is {""}
          <a
            href="https://github.com/jestats/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          and coded by <span class="name">Jescinta Thompson</span>
          <a
            href="https://www.linkedin.com/in/jescinta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
              alt="LinkedIn logo"
              width="27"
            />
          </a>
        </footer>
      </div>
    </div>
  );
}
