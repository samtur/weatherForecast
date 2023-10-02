import "./style.css";
import { fetchWeather } from "./fetch";
import { populate } from "./populate";

const locationInput = document.querySelector("#locationInput");
const searchBtn = document.querySelector(".submitLocation");
let locationTxt = "";
const condition = document.querySelector("#condition");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const dateTxt = document.querySelector("#date");
const time = document.querySelector("#time");
const daysArr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const dayWeek = document.querySelector("#dayWeek");
const temp_c = document.querySelector("#temp_c");
const temp_f = document.querySelector("#temp_f");
const btnTemp = document.querySelector(".btnTemp");

// Fetching Data

fetchWeather(
  locationTxt,
  populate,
  daysArr,
  dateTxt,
  time,
  dayWeek,
  temp_c,
  temp_f
);

// Functions

// Event Listeners

locationInput.addEventListener("input", () => {
  locationTxt = locationInput.value;
});

searchBtn.addEventListener("click", async function () {
  await fetchWeather(
    locationTxt,
    populate,
    daysArr,
    dateTxt,
    time,
    dayWeek,
    temp_c,
    temp_f
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
    temp_c0.classList = "";
    temp_c1.classList = "";
    temp_c2.classList = "";
    temp_f0.classList = "hidden";
    temp_f1.classList = "hidden";
    temp_f2.classList = "hidden";
  }
});
