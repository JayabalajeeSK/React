import React from "react";
import ReactDOM from "react-dom/client"; // library for rendering components
import App from "./App"; // Component App from App.js
import "./index.css";

const entryPoint = document.getElementById("root"); //for index.html - <div id="root"></div>
// ReactDOM.createRoot(entryPoint).render(<App />); //render app to that root
ReactDOM.createRoot(entryPoint).render(React.createElement(App));
