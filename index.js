let unitMF = document.getElementById("unit-m/f");
let unitLG = document.getElementById("unit-l/g");
let unitKP = document.getElementById("unit-k/p");
let convertBtn = document.getElementById("convert-btn");
let unitInput = document.getElementById("unit-input");

convertBtn.addEventListener("click", () => {
  convertMF(unitInput.value);
  convertLG(unitInput.value);
  convertKP(unitInput.value);
  console.log("clicked");
});

function convertMF(num) {
  unitMF.textContent = `${num} meters = ${(num * 3.281).toFixed(
    3
  )} feet | ${num} feet = ${(num / 3.281).toFixed(3)} meters`;
}
function convertLG(num) {
  unitLG.textContent = `${num} liter = ${(num * 0.264).toFixed(
    3
  )} gallons | ${num} gallons = ${(num / 0.264).toFixed(3)} liters`;
}

function convertKP(num) {
  unitKP.textContent = `${num} kilograms = ${(num * 2.204).toFixed(
    3
  )} pounds | ${num} pounds = ${(num / 2.204).toFixed(3)} kilograms`;
}
