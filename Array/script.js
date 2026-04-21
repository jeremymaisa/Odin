function toCelcius(farenheit) {
  return Math.round((farenheit - 32) * (5 / 9) * 10) / 10;
}

function toFarenheit(celcius) {
  return Math.round(((celcius * 9) / 5 + 32) * 10) / 10;
}

console.log(toCelcius(100));
console.log(toFarenheit(100));
