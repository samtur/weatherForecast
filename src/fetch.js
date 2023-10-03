import { upperConditionTxt, selectIcon } from "./functionality";

const fetchWeather = async function getWeatherData(
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
  wind
) {
  if (locationTxt === "") {
    let current = "";
    let forecast = "";
    let location = "";
    const response = await fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=4da403286dd64dcfb0c200014233008&q=London&days=7&aqi=yes&alerts=no",
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
      wind
    );
    console.log(weatherData);
    // Copy below when finished
  } else {
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
      wind
    );
    console.log(weatherData);
  }
};

export { fetchWeather };
