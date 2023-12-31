import "./style.css";
import { populate } from "./populate";
import { selectIcon, upperConditionTxt } from "./functionality";

const locationInput = document.querySelector("#locationInput");
const searchBtn = document.querySelector(".submitLocation");
let locationTxt = "London";
const condition = document.querySelector("#condition");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const dateTxt = document.querySelector("#date");
const time = document.querySelector("#time");
const daysArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayWeek = document.querySelector("#dayWeek");
const temp_c = document.querySelector("#temp_c");
const temp_f = document.querySelector("#temp_f");
// Further Details
const feels_c = document.querySelector("#feels_cinfo");
const feels_f = document.querySelector("#feels_finfo");
const humidity = document.querySelector("#humidityinfo");
const chance = document.querySelector("#chanceinfo");
const chanceSnow = document.querySelector("#chanceSnowinfo");
const wind = document.querySelector("#windinfo");
const btnTemp = document.querySelector(".btnTemp");
const errorMsg = document.querySelector("#error");

async function fetchWeather(
  locationTxt,
  populate,
  daysArr,
  dateTxt,
  time,
  dayWeek,
  temp_c,
  temp_f,
  feels_c,
  feels_f,
  humidity,
  chance,
  chanceSnow,
  wind
) {
  errorMsg.classList = "hidden";
  let current = "";
  let forecast = "";
  let location = "";
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=4da403286dd64dcfb0c200014233008&q=${locationTxt}&days=7&aqi=yes&alerts=no`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  populate(
    weatherData,
    current,
    forecast,
    location,
    selectIcon,
    upperConditionTxt,
    daysArr,
    dateTxt,
    time,
    dayWeek,
    temp_c,
    temp_f,
    feels_c,
    feels_f,
    humidity,
    chance,
    chanceSnow,
    wind
  ).catch((err) => {
    errorMsg.classList = "";
  });

  // console.log(weatherData);
}

fetchWeather(
  locationTxt,
  populate,
  daysArr,
  dateTxt,
  time,
  dayWeek,
  temp_c,
  temp_f,
  feels_c,
  feels_f,
  humidity,
  chance,
  chanceSnow,
  wind
);

// Event Listeners

locationInput.addEventListener("input", () => {
  locationTxt = locationInput.value;
});

searchBtn.addEventListener("click", function () {
  fetchWeather(
    locationTxt,
    populate,
    daysArr,
    dateTxt,
    time,
    dayWeek,
    temp_c,
    temp_f,
    feels_c,
    feels_f,
    humidity,
    chance,
    chanceSnow,
    wind
  );
  locationTxt = "";
  locationInput.value = "";
});

btnTemp.addEventListener("click", (forecastSwitch) => {
  let temp_c0 = document.querySelector("#temp_c0");
  let temp_c1 = document.querySelector("#temp_c1");
  let temp_c2 = document.querySelector("#temp_c2");
  let temp_f0 = document.querySelector("#temp_f0");
  let temp_f1 = document.querySelector("#temp_f1");
  let temp_f2 = document.querySelector("#temp_f2");
  if (btnTemp.id === "switchF") {
    btnTemp.innerHTML = "Switch &#8451";
    btnTemp.id = "switchC";
    temp_c.classList = "hidden";
    temp_f.classList = "";
    feels_c.classList = "hidden";
    feels_f.classList = "";
    temp_c0.classList = "hidden";
    temp_c1.classList = "hidden";
    temp_c2.classList = "hidden";
    temp_f0.classList = "";
    temp_f1.classList = "";
    temp_f2.classList = "";
  } else {
    btnTemp.innerHTML = "Switch &#8457";
    btnTemp.id = "switchF";
    temp_c.classList = "";
    temp_f.classList = "hidden";
    feels_c.classList = "";
    feels_f.classList = "hidden";
    temp_c0.classList = "";
    temp_c1.classList = "";
    temp_c2.classList = "";
    temp_f0.classList = "hidden";
    temp_f1.classList = "hidden";
    temp_f2.classList = "hidden";
  }
});
