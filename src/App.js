import "./App.css";
import React from "react";
import Weather from "./Weather";
import Form from "./Form";
import Forecast from "./Forecast";
import Overall from "./Overall";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Everyone!!!</h1>
        <Form />
        <Weather />
      </header>
    </div>
  );
}

export default App;
