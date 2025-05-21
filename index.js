const changeButton = document.querySelector(".button-change");
const root = document.querySelector("#root");

const changeBackground = () => {
  root.style.background = "rgb(162, 123, 255)";
};

changeButton.addEventListener("click", changeBackground);
