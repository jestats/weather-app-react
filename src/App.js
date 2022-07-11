import "./App.css";
import Body from "./Body";
import React from "react";

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
        <Body />
      </header>
    </div>
  );
}
