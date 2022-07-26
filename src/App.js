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
          >
            open-sourced
          </a>{" "}
          and coded by Jescinta Thompson
        </footer>
        ;
      </div>
    </div>
  );
}
