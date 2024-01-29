import React from "react";
import ReactDOM from "react-dom";
import appService from "./authentication";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <App appService={appService} />,
  document.getElementById("root")
);
