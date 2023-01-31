const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
const body = document.querySelector('body');

btnStart.disabled = false;
btnStop.disabled = true;

let timerId = null;
const INTERVAL_DELAY = 1000;

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function changeBackground() {
    body.style.backgroundColor = getRandomHexColor();
  }

  function onBtnStartClick() {
    timerId = setInterval(changeBackground, INTERVAL_DELAY);
    btnStart.disabled = true;
    btnStop.disabled = false;
  }

  function onBtnStopClick() {
    
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(timerId);
  }