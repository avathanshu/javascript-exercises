const convertToCelsius = function(fahrenheit) {
  let temp = (fahrenheit - 32) * (5/9);
  if (Number.isInteger(temp)) {
    return temp;
  }
  else {
    temp = temp.toFixed(1);
    return parseFloat(temp);
  }
};

const convertToFahrenheit = function(celsius) {
  let temp = (celsius * (9/5)) + 32;
  if (Number.isInteger(temp)) {
    return temp;
  }
  else {
    temp = temp.toFixed(1);
    return parseFloat(temp);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
