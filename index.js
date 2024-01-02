console.log("hello world");

// Magic strings
const CSS_VARIABLE_IMAGE = "--bg-image";
const CSS_VARIABLE_TEXT_COLOR = "--text";
const CSS_VARIABLE_BACKGROUND_COLOR = "--bg";

const DARTH_VADER_IMAGE = "url(img/Darth-Vader.png)";
const SKYWALKER_IMAGE = "url(img/skywalker.png)";

// DOM Elements
const root = document.querySelector(":root");
const allegience_text_span = document.querySelector("#side");

// Globals
let modeIsDark = true;

function setDarkMode() {
  root.style.setProperty(CSS_VARIABLE_IMAGE, DARTH_VADER_IMAGE);
  root.style.setProperty(CSS_VARIABLE_TEXT_COLOR, "white");
  root.style.setProperty(CSS_VARIABLE_BACKGROUND_COLOR, "black");
  allegience_text_span.textContent = "dark";
}

function setLightMode() {
  root.style.setProperty(CSS_VARIABLE_IMAGE, SKYWALKER_IMAGE);
  root.style.setProperty(CSS_VARIABLE_TEXT_COLOR, "black");
  root.style.setProperty(CSS_VARIABLE_BACKGROUND_COLOR, "white");
  allegience_text_span.textContent = "light";
}

function switchMode() {
  if (modeIsDark) {
    setLightMode();
  } else {
    setDarkMode();
  }
  modeIsDark = !modeIsDark;
}
