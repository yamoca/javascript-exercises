const convertToCelsius = function(fahrenheight) {
  const celcius = (fahrenheight-32) * 5/9
  return Math.round(celcius*10)/10;
};

const convertToFahrenheit = function(celcius) {
  const fahrenheight = celcius * 9/5 + 32
  return Math.round(fahrenheight*10)/10; // hack to round to 1 dp instead of nearest whole number
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
