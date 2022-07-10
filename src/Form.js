import React from "react";

export default function Form() {
  return (
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
          <input type="submit" value="Search" class="btn btn-primary w-100" />
        </div>
        <div className="col-2">
          <button class="btn btn-success w-100" id="current-location-button">
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
