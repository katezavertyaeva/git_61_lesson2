const changeButton = document.querySelector(".button-change");
const root = document.querySelector("#root");

const changeBackground = () => {
  root.style.background = "rgb(238, 240, 169)";
};

changeButton.addEventListener("click", changeBackground);
