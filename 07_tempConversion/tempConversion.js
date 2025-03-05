const convertToCelsius = function(temperature) {
  let temperatureInCelsius = 0;
  temperatureInCelsius = Math.round((5*(temperature - 32)/9)*10)/10;
  return temperatureInCelsius;
};

const convertToFahrenheit = function(temperature) {
  let temperatureinFahrenheit = 0;
  temperatureinFahrenheit = Math.round(((9*temperature + 160)/5)*10)/10;
  return temperatureinFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
