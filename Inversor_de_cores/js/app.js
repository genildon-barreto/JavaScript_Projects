const colors = ["green", "red", "darkorange", "lightgray", "aqua", "blue", "yellow", "lightgreen", "lightorang", "orange", "gray", "pink", "brown", "magenta", "cyan", "turquoise", "orchid", "sunglow", "cinnabar", "cerulean", "sky", "lightcyan", "deeppink"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length );
}