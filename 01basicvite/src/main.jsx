import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const areactElement = createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
);

function MyApp() {
  return areactElement;
}

createRoot(document.getElementById("root")).render(areactElement);
