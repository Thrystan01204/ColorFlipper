const colors = [
  "green",
  "yellow",
  "red",
  "brown",
  "blue",
  "grey",
  "teal",
  "pink",
  "purple",
  "white",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const changeColor = () => {
  const background = document.getElementById("main");
  const colorIndicator = document.getElementById("current-color");
  const randomColor = getRandomInt(0, colors.length);
  background.style.backgroundColor = colors[randomColor];
  colorIndicator.textContent = colors[randomColor];
  console.log("Color changed ! New color : " + randomColor);
};

const button = document.getElementById("btn");
button.onclick = changeColor;
