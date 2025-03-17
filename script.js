let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');
let mark = document.getElementById('mark');

let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;

function updateDisplay() {
    mark.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}

startButton.addEventListener('click', function () {
    if (isRunning) {
        clearInterval(timer);
        startButton.textContent = 'Start';
    } else {
        timer = setInterval(function () {
            milliseconds++;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10);
        startButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', function () {
    clearInterval(timer);
    isRunning = false;
    hours = minutes = seconds = milliseconds = 0;
    updateDisplay();
    startButton.textContent = 'Start';
});