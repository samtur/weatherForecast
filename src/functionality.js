const selectIcon = function (current, weatherIcon, daily) {
  if (daily) {
    if (current.condition.code === 1000) {
      weatherIcon.src = "weatherIcons/sunny.svg";
    } else if (current.condition.code === 1003) {
      weatherIcon.src = "weatherIcons/partlyCloudyDay.svg";
    } else if (
      current.condition.code === 1006 ||
      current.condition.code === 1009
    ) {
      weatherIcon.src = "weatherIcons/cloudy.svg";
    } else if (current.condition.code === 1030) {
      weatherIcon.src = "weatherIcons/mist.svg";
    } else if (
      current.condition.code === 1063 ||
      current.condition.code === 1150
    ) {
      weatherIcon.src = "weatherIcons/patchyRainDay.svg";
    } else if (
      current.condition.code === 1066 ||
      current.condition.code === 1210
    ) {
      weatherIcon.src = "weatherIcons/patchySnowDay.svg";
    } else if (current.condition.code === 1069) {
      weatherIcon.src = "weatherIcons/patchySleetDay.svg";
    } else if (
      current.condition.code === 1072 ||
      current.condition.code === 1168 ||
      current.condition.code === 1198 ||
      current.condition.code === 1204 ||
      current.condition.code === 1249
    ) {
      weatherIcon.src = "weatherIcons/feezingDrizzle.svg";
    } else if (current.condition.code === 1087) {
      weatherIcon.src = "weatherIcons/thunderyOutbreaks.svg";
    } else if (current.condition.code === 1114) {
      weatherIcon.src = "weatherIcons/blowingSnow.svg";
    } else if (current.condition.code === 1117) {
      weatherIcon.src = "weatherIcons/blizzard.svg";
    } else if (current.condition.code === 1135) {
      weatherIcon.src = "weatherIcons/fog.svg";
    } else if (current.condition.code === 1147) {
      weatherIcon.src = "weatherIcons/freezingFog.svg";
    } else if (current.condition.code === 1153) {
      weatherIcon.src = "weatherIcons/lightRain.svg";
    } else if (
      current.condition.code === 1171 ||
      current.condition.code === 1201 ||
      current.condition.code === 1207 ||
      current.condition.code === 1252
    ) {
      weatherIcon.src = "weatherIcons/heavyFreezingDrizzle.svg";
    } else if (
      current.condition.code === 1180 ||
      current.condition.code === 1183
    ) {
      weatherIcon.src = "weatherIcons/lightRain.svg";
    } else if (
      current.condition.code === 1186 ||
      current.condition.code === 1189
    ) {
      weatherIcon.src = "weatherIcons/moderateRain.svg";
    } else if (
      current.condition.code === 1192 ||
      current.condition.code === 1195
    ) {
      weatherIcon.src = "weatherIcons/heavyRain.svg";
    } else if (
      current.condition.code === 1213 ||
      current.condition.code === 1255
    ) {
      weatherIcon.src = "weatherIcons/lightSnow.svg";
    } else if (
      current.condition.code === 1216 ||
      current.condition.code === 1219 ||
      current.condition.code === 1258
    ) {
      weatherIcon.src = "weatherIcons/moderateSnow.svg";
    } else if (
      current.condition.code === 1222 ||
      current.condition.code === 1225
    ) {
      weatherIcon.src = "weatherIcons/heavySnow.svg";
    } else if (
      current.condition.code === 1237 ||
      current.condition.code === 1261 ||
      current.condition.code === 1264
    ) {
      weatherIcon.src = "weatherIcons/icePellets.svg";
    } else if (current.condition.code === 1240) {
      weatherIcon.src = "weatherIcons/lightRainShower.svg";
    } else if (current.condition.code === 1243) {
      weatherIcon.src = "weatherIcons/moderateRainShower.svg";
    } else if (current.condition.code === 1246) {
      weatherIcon.src = "weatherIcons/torrentialRainShower.svg";
    } else if (current.condition.code === 1273) {
      weatherIcon.src = "weatherIcons/patchyLightRainThunder.svg";
    } else if (current.condition.code === 1276) {
      weatherIcon.src = "weatherIcons/patchyHeavyRainThunder.svg";
    } else if (
      current.condition.code === 1279 ||
      current.condition.code === 1282
    ) {
      weatherIcon.src = "weatherIcons/patchySnowThunder.svg";
    } else {
      weatherIcon.src = current.condition.icon;
    }
  } else {
    if (current.condition.code === 1000 && current.is_day) {
      weatherIcon.src = "weatherIcons/sunny.svg";
    } else if (current.condition.code === 1000 && !current.is_day) {
      weatherIcon.src = "weatherIcons/clear.svg";
    } else if (current.condition.code === 1003 && current.is_day) {
      weatherIcon.src = "weatherIcons/partlyCloudyDay.svg";
    } else if (current.condition.code === 1003 && !current.is_day) {
      weatherIcon.src = "weatherIcons/partlyCloudyNight.svg";
    } else if (
      current.condition.code === 1006 ||
      current.condition.code === 1009
    ) {
      weatherIcon.src = "weatherIcons/cloudy.svg";
    } else if (current.condition.code === 1030) {
      weatherIcon.src = "weatherIcons/mist.svg";
    } else if (
      (current.condition.code === 1063 || current.condition.code === 1150) &&
      current.is_day
    ) {
      weatherIcon.src = "weatherIcons/patchyRainDay.svg";
    } else if (
      (current.condition.code === 1063 || current.condition.code === 1150) &&
      !current.is_day
    ) {
      weatherIcon.src = "weatherIcons/patchyRainNight.svg";
    } else if (
      (current.condition.code === 1066 || current.condition.code === 1210) &&
      current.is_day
    ) {
      weatherIcon.src = "weatherIcons/patchySnowDay.svg";
    } else if (
      (current.condition.code === 1066 || current.condition.code === 1210) &&
      !current.is_day
    ) {
      weatherIcon.src = "weatherIcons/patchySnowNight.svg";
    } else if (current.condition.code === 1069 && current.is_day) {
      weatherIcon.src = "weatherIcons/patchySleetDay.svg";
    } else if (current.condition.code === 1069 && !current.is_day) {
      weatherIcon.src = "weatherIcons/patchySleetNight.svg";
    } else if (
      current.condition.code === 1072 ||
      current.condition.code === 1168 ||
      current.condition.code === 1198 ||
      current.condition.code === 1204 ||
      current.condition.code === 1249
    ) {
      weatherIcon.src = "weatherIcons/feezingDrizzle.svg";
    } else if (current.condition.code === 1087) {
      weatherIcon.src = "weatherIcons/thunderyOutbreaks.svg";
    } else if (current.condition.code === 1114) {
      weatherIcon.src = "weatherIcons/blowingSnow.svg";
    } else if (current.condition.code === 1117) {
      weatherIcon.src = "weatherIcons/blizzard.svg";
    } else if (current.condition.code === 1135) {
      weatherIcon.src = "weatherIcons/fog.svg";
    } else if (current.condition.code === 1147) {
      weatherIcon.src = "weatherIcons/freezingFog.svg";
    } else if (current.condition.code === 1153) {
      weatherIcon.src = "weatherIcons/lightRain.svg";
    } else if (
      current.condition.code === 1171 ||
      current.condition.code === 1201 ||
      current.condition.code === 1207 ||
      current.condition.code === 1252
    ) {
      weatherIcon.src = "weatherIcons/heavyFreezingDrizzle.svg";
    } else if (
      current.condition.code === 1180 ||
      current.condition.code === 1183
    ) {
      weatherIcon.src = "weatherIcons/lightRain.svg";
    } else if (
      current.condition.code === 1186 ||
      current.condition.code === 1189
    ) {
      weatherIcon.src = "weatherIcons/moderateRain.svg";
    } else if (
      current.condition.code === 1192 ||
      current.condition.code === 1195
    ) {
      weatherIcon.src = "weatherIcons/heavyRain.svg";
    } else if (
      current.condition.code === 1213 ||
      current.condition.code === 1255
    ) {
      weatherIcon.src = "weatherIcons/lightSnow.svg";
    } else if (
      current.condition.code === 1216 ||
      current.condition.code === 1219 ||
      current.condition.code === 1258
    ) {
      weatherIcon.src = "weatherIcons/moderateSnow.svg";
    } else if (
      current.condition.code === 1222 ||
      current.condition.code === 1225
    ) {
      weatherIcon.src = "weatherIcons/heavySnow.svg";
    } else if (
      current.condition.code === 1237 ||
      current.condition.code === 1261 ||
      current.condition.code === 1264
    ) {
      weatherIcon.src = "weatherIcons/icePellets.svg";
    } else if (current.condition.code === 1240) {
      weatherIcon.src = "weatherIcons/lightRainShower.svg";
    } else if (current.condition.code === 1243) {
      weatherIcon.src = "weatherIcons/moderateRainShower.svg";
    } else if (current.condition.code === 1246) {
      weatherIcon.src = "weatherIcons/torrentialRainShower.svg";
    } else if (current.condition.code === 1273) {
      weatherIcon.src = "weatherIcons/patchyLightRainThunder.svg";
    } else if (current.condition.code === 1276) {
      weatherIcon.src = "weatherIcons/patchyHeavyRainThunder.svg";
    } else if (
      current.condition.code === 1279 ||
      current.condition.code === 1282
    ) {
      weatherIcon.src = "weatherIcons/patchySnowThunder.svg";
    } else {
      weatherIcon.src = current.condition.icon;
    }
  }
};

const upperConditionTxt = function (current) {
  let conditionStr = current.condition.text;
  let arr = conditionStr.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
  }
  conditionStr = arr.join(" ");
  return conditionStr;
};

export { selectIcon, upperConditionTxt };
