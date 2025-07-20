
const timerDisplay = document.querySelector('.timerDisplay');
const Stopbtn = document.getElementById('Stpobtn');
const Startbtn = document.getElementById('Startbtn');
const Resetbtn = document.getElementById('Resetbtn');

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

Startbtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

Stopbtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
});

Resetbtn.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
    msec = 0;
    secs = 0;
    mins = 0;
    timerDisplay.innerHTML = `00 : 00 : 00`;
});

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }

    const msecString = msec < 10 ? `0${msec}` : msec;
    const secsString = secs < 10 ? `0${secs}` : secs;
    const minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
