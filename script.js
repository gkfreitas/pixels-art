const colorPalette = document.getElementsByClassName('color');

colorPalette[0].style.backgroundColor = 'black';
colorPalette[1].style.backgroundColor = 'red';
colorPalette[2].style.backgroundColor = 'green';
colorPalette[3].style.backgroundColor = 'blue';

const randomColor = document.getElementById('button-random-color');
const localColorObj = {};
randomColor.addEventListener('click', () => {
  for (let i = 1; i < colorPalette.length; i += 1) {
    const rndNumber1 = Math.random() * (255 - 0) + 0;
    const rndNumber2 = Math.random() * (255 - 0) + 0;
    const rndNumber3 = Math.random() * (255 - 0) + 0;
    colorPalette[i].style.backgroundColor = `rgb(${rndNumber1},${rndNumber2},${rndNumber3})`;
    const keyObj = `color${i}`;
    localColorObj[keyObj] = colorPalette[i].style.backgroundColor;
    localStorage.setItem('colorPalette', JSON.stringify(localColorObj));
  }
});

const pixel = document.getElementById('pixel-board');
function createPixel(value) {
  for (let i = 1; i <= value; i += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.className = 'pixel';
    pixel.appendChild(pixelDiv);
  }
}
createPixel(25);

const buttonVQV = document.getElementById('generate-board');
const inputVQV = document.getElementById('board-size');

let inputValue = 0;

function inputBoard() {
  inputValue = inputVQV.value;
  if (inputValue < 5 && inputValue > 0) {
    inputValue = 5;
  } else if (inputValue > 50) {
    inputValue = 50;
  }

  return inputValue;
}
buttonVQV.addEventListener('click', inputBoard);
const divPixel = document.getElementsByClassName('pixel');
let localPixelObj = {};

function changeBoard() {
  if (inputValue <= 0) {
    alert('Board Inválido!');
  } else {
    while (pixel.firstChild) {
      pixel.removeChild(pixel.firstChild);
    }
    const valueInput = inputValue ** 2;
    createPixel(valueInput);
  }
  localStorage.setItem('boardSize', JSON.stringify(inputValue ** 2));
  for (let i = 0; i < divPixel.length; i += 1) {
    const keyObj = `position${i}`;
    divPixel[i].addEventListener('click', changeColor);

    function changeColor(color) {
    color.target.style.backgroundColor = colorSelected;
    localPixelObj[keyObj] = color.target.style.backgroundColor;
    localStorage.setItem('pixelBoard', JSON.stringify(localPixelObj));
    };
  }
}
buttonVQV.addEventListener('click', changeBoard);
for (let i = 0; i < divPixel.length; i += 1) {
  const keyObj = `position${i}`;
  divPixel[i].addEventListener('click', changeColor);
  
  function changeColor(color) {
  color.target.style.backgroundColor = colorSelected;
  localPixelObj[keyObj] = color.target.style.backgroundColor;
  localStorage.setItem('pixelBoard', JSON.stringify(localPixelObj));
  };
}

let colorSelected = 'black';
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].addEventListener('click', (color) => {
    colorPalette[0].classList.remove('selected');
    colorPalette[1].classList.remove('selected');
    colorPalette[2].classList.remove('selected');
    colorPalette[3].classList.remove('selected');
    color.target.classList.add('selected');
    colorSelected = color.target.style.backgroundColor;
  });
}
const clearBoard = document.getElementById('clear-board');
const pixelBoard = document.getElementsByClassName('pixel');
clearBoard.addEventListener('click', clearBoardF) 
function clearBoardF() {
  for (let i = 0; i < pixelBoard.length; i += 1){
    pixelBoard[i].style.backgroundColor = 'white';
  }
  localStorage.removeItem('pixelBoard');
};

window.onload = () => {
  if (localStorage.getItem('colorPalette') === null) {
    console.log('null Color Palette');
  } else {
    const colorParse = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i = 1; i < colorPalette.length; i += 1) {
      colorPalette[i].style.backgroundColor = colorParse[`color${i}`];
    }
  }
  if (localStorage.getItem('pixelBoard') === null) {
    console.log('null pixel Board');
  } else {
    const pixelParse = JSON.parse(localStorage.getItem('pixelBoard'));
    console.log(pixelParse);
    localPixelObj = pixelParse;
    for (let i = 0; i < divPixel.length; i += 1) {
      divPixel[i].style.backgroundColor = pixelParse[`position${i}`];
    }
  }
    const localPixel = JSON.parse(localStorage.getItem('boardSize'));
    createPixel(localPixel - 25);
    for (let i = 0; i < divPixel.length; i += 1) {
      const keyObj = `position${i}`;
      divPixel[i].addEventListener('click', changeColor);
  
      function changeColor(color) {
      color.target.style.backgroundColor = colorSelected;
      localPixelObj[keyObj] = color.target.style.backgroundColor;
      localStorage.setItem('pixelBoard', JSON.stringify(localPixelObj));
      };
    }
};
