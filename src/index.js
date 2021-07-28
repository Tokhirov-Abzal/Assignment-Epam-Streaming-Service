import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// State
import ShowsState from "./context/shows/showsState";
// import AlertsState from "./context/alerts/AlertsState";

ReactDOM.render(
  <ShowsState>
    <App />
  </ShowsState>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
