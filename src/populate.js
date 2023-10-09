const populate = async function (
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
) {
  current = await weatherData.current;
  forecast = await weatherData.forecast;
  location = await weatherData.location;
  const locale = "en-GB";

  let forecastArr = forecast.forecastday;
  for (let i = 0; i < forecastArr.length; i++) {
    let forecast = forecastArr[i].day;
    let dateDaily = document.querySelector(`#date${i}`);
    let dayWeek = document.querySelector(`#dayWeek${i}`);
    let conditionDaily = document.querySelector(`#condition${i}`);
    let weatherIconDaily = document.querySelector(`#weatherIcon${i}`);
    let temp_cDaily = document.querySelector(`#temp_c${i}`);
    let temp_fDaily = document.querySelector(`#temp_f${i}`);

    // Date to UK format
    let timestamp = forecastArr[i].date;
    let date = new Date(timestamp);
    let day = date.getDay();

    let condition = forecastArr[i].day;
    i === 0
      ? (dayWeek.innerHTML = "Today")
      : (dayWeek.innerHTML = daysArr[day]);
    date = date
      .toLocaleString(locale, { timeZone: "Europe/London" })
      .split(",");
    dateDaily.innerHTML = date[0];
    let conditiontxt = await upperConditionTxt(condition);
    conditionDaily.innerHTML = conditiontxt;
    temp_cDaily.innerHTML = `${forecastArr[i].day.avgtemp_c} &#8451`;
    temp_fDaily.innerHTML = `${forecastArr[i].day.avgtemp_f} &#8457`;
    let daily = true;
    selectIcon(forecast, weatherIconDaily, daily);
  }
  // Update Condition
  let conditiontxt = await upperConditionTxt(current);
  condition.innerHTML = conditiontxt;
  city.innerHTML = `${location.name}, `;
  country.innerHTML = location.country;
  let timestamp = location.localtime;
  let date = new Date(timestamp);
  date = date.toLocaleString(locale, { timeZone: "Europe/London" }).split(",");
  dateTxt.innerHTML = date[0];
  time.innerHTML = date[1];
  dayWeek.innerHTML = "Currently";
  temp_c.innerHTML = `${current.temp_c} &#8451`;
  temp_f.innerHTML = `${current.temp_f} &#8457`;
  feels_c.innerHTML = `${current.feelslike_c} &#8451`;
  feels_f.innerHTML = `${current.feelslike_f} &#8457`;
  humidity.innerHTML = `${current.humidity} &#x25`;
  chance.innerHTML = `${forecast.forecastday[0].day.daily_chance_of_rain} &#x25`;
  chanceSnow.innerHTML = `${forecast.forecastday[0].day.daily_chance_of_snow} &#x25`;
  wind.innerHTML = `${current.wind_mph} mph`;
  // Icon Code
  let weatherIcon = document.querySelector("#weatherIcon");
  let daily = false;
  selectIcon(current, weatherIcon);
};

export { populate };
