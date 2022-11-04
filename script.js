const colorPalette = document.getElementsByClassName('color');

colorPalette[0].style.backgroundColor = 'black';
colorPalette[1].style.backgroundColor = 'red';
colorPalette[2].style.backgroundColor = 'green';
colorPalette[3].style.backgroundColor = 'blue';

const randomColor = document.getElementById('button-random-color');

randomColor.addEventListener('click', () => {
  for (let i = 1; i < colorPalette.length; i += 1) {
    const rndNumber1 = Math.random() * (255 - 0) + 0;
    const rndNumber2 = Math.random() * (255 - 0) + 0;
    const rndNumber3 = Math.random() * (255 - 0) + 0;
    colorPalette[i].style.backgroundColor = `rgb(${rndNumber1},${rndNumber2},${rndNumber3})`;
    localStorage.setItem(`color${i}`, colorPalette[i].style.backgroundColor);
  }
});


