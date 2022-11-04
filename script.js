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

window.onload = () => {
  const colorParse = localStorage.getItem('colorPalette');
  colorPalette[0].classList.add('selected');
  colorPalette[1].style.backgroundColor = JSON.parse(colorParse).color1;
  colorPalette[2].style.backgroundColor = JSON.parse(colorParse).color2;
  colorPalette[3].style.backgroundColor = JSON.parse(colorParse).color3;
};
