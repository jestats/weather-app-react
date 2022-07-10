import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in San Francisco is ${response.data.main.temp}℉`);
  }
  let apiKey = "2a2eb7984c02aca7e1add2c64025b4ae";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Weather is sunny</h2>;
}
