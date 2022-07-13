import "./App.css";
import Weather from "./Weather";
import React from "react";
import "./Weather.css";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <div className="Name">
          <small>
            <span>Open-source coded by Jescinta Thompson</span>
            <a href="https://www.linkedin.com/in/jescinta/" target="_blank">
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
