import "./App.css";
import Weather from "./Weather";
import React from "react";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />

        <div className="Name">
          <small>
            <span>Open-source coded by Jescinta Thompson</span>
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
          </small>
        </div>
      </header>
    </div>
  );
}
