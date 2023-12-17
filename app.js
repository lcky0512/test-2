let timer;
let isRunning = false;

const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const darkModeBtn = document.getElementById('darkModeBtn');

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    startStopBtn.textContent = 'Start';
  } else {
    timer = setInterval(updateDisplay, 1000);
    startStopBtn.textContent = 'Stop';
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  hoursDisplay.textContent = '00';
  minutesDisplay.textContent = '00';
  secondsDisplay.textContent = '00';
  startStopBtn.textContent = 'Start';
}

function updateDisplay() {
  let hours = parseInt(hoursDisplay.textContent);
  let minutes = parseInt(minutesDisplay.textContent);
  let seconds = parseInt(secondsDisplay.textContent);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  hoursDisplay.textContent = padZero(hours);
  minutesDisplay.textContent = padZero(minutes);
  secondsDisplay.textContent = padZero(seconds);
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

darkModeBtn.addEventListener('click', toggleDarkMode);
startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  startStopBtn.classList.toggle('dark-mode');
  resetBtn.classList.toggle('dark-mode');
  darkModeBtn.classList.toggle('dark-mode');
}
