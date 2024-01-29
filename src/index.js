import React from "react";
import { createRoot } from "react-dom/client";
import appService from "./authentication";
import "./index.css";
import App from "./App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App appService={appService} />, document.getElementById("root"));
