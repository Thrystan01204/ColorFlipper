function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const changeColor = () => {
  const background = document.getElementById("main");
  const colorIndicator = document.getElementById("current-color");
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const randomHexColor = "#"+randomColor
  background.style.backgroundColor = randomHexColor;
  colorIndicator.textContent = randomHexColor;
  console.log("Color changed ! New color : " + randomColor);
};

const button = document.getElementById("btn");
button.onclick = changeColor;
