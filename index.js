const changeButton = document.querySelector('.button-change');
const changeTitleBtn = document.querySelector('.button-change-title');
const title = document.querySelector('#title');
const root = document.querySelector('#root');

const changeBackground = () => {
  root.style.background = 'rgb(208, 173, 216)';
};

const changeTitle = () => {
  title.textContent = 'Git: cloning, resolve conflict. Module Technologies';
};

changeButton.addEventListener('click', changeBackground);
changeTitleBtn.addEventListener('click', changeTitle);
