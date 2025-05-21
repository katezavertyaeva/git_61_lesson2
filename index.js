const changeButton = document.querySelector(".button-change");
const root = document.querySelector("#root");

const changeBackground = () => {
  root.style.background = "rgb(208, 173, 216)";
};

changeButton.addEventListener("click", changeBackground);
