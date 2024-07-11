/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.28084;
const literToGallon = 0.264172;
const kilogramToPound = 2.20462;
const inputEl = document.getElementById("input-field");
const converterBtn = document.getElementById("converter-btn");
const lenght = document.getElementById("lenght");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

converterBtn.addEventListener("click", function () {
  lenght.textContent = `${inputEl.value} meters = ${
    (meterToFeet * inputEl.value).toFixed(3)
  } feet | ${inputEl.value} feet = ${(inputEl.value / meterToFeet).toFixed(3)} meters`;
  volume.textContent = `${inputEl.value} liters = ${
    (literToGallon * inputEl.value).toFixed(3)
  }  | ${inputEl.value} gallons = ${(inputEl.value / literToGallon).toFixed(3)} liters`;
  mass.textContent = `${inputEl.value} kilos = ${
    (kilogramToPound * inputEl.value).toFixed(3)
  } pounds | ${inputEl.value} pounds = ${
    (inputEl.value / kilogramToPound).toFixed(3)
  } kilos`;
});
