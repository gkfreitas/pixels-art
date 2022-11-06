const colorPalette = document.getElementsByClassName('color');

colorPalette[0].style.backgroundColor = 'black';
colorPalette[1].style.backgroundColor = 'red';
colorPalette[2].style.backgroundColor = 'green';
colorPalette[3].style.backgroundColor = 'blue';

const randomColor = document.getElementById('button-random-color');
const localObj = {};
randomColor.addEventListener('click', () => {
  for (let i = 1; i < colorPalette.length; i += 1) {
    const rndNumber1 = Math.random() * (255 - 0) + 0;
    const rndNumber2 = Math.random() * (255 - 0) + 0;
    const rndNumber3 = Math.random() * (255 - 0) + 0;
    colorPalette[i].style.backgroundColor = `rgb(${rndNumber1},${rndNumber2},${rndNumber3})`;
    const keyObj = `color${i}`;
    localObj[keyObj] = colorPalette[i].style.backgroundColor;
    localStorage.setItem('colorPalette', JSON.stringify(localObj));
  }
});

const pixel = document.getElementById('pixel-board');
for (let i = 1; i <= 25; i += 1) {
  const pixelDiv = document.createElement('div');
  pixelDiv.className = 'pixel';
  pixel.appendChild(pixelDiv);
}
let colorSelected = 'black';
const divPixel = document.getElementsByClassName('pixel');
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

for (let i = 0; i < divPixel.length; i += 1) {
  divPixel[i].addEventListener('click', (color) => {
    color.target.style.backgroundColor = colorSelected;
  });
}

window.onload = () => {
  if (localStorage.getItem('colorPalette') === null) {
    console.log('null Color Palette');
  } else {
    const colorParse = JSON.parse(localStorage.getItem('colorPalette'));
    colorPalette[1].style.backgroundColor = colorParse.color1;
    colorPalette[2].style.backgroundColor = colorParse.color2;
    colorPalette[3].style.backgroundColor = colorParse.color3;
  }
};
