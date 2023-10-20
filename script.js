// Variables for the stopwatch
let startTime;
let elapsedTime = 0;
let timerInterval;

// Elements
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Buttons
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Event listeners
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

// Start the stopwatch
function start() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
    }
}

// Stop the stopwatch
function stop() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Reset the stopwatch
function reset() {
    stop();
    elapsedTime = 0;
    startTime = Date.now();
    updateTime();
    clearLapList();
}

// Update the stopwatch time display
function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const time = new Date(elapsedTime);

    const hours = time.getUTCHours().toString().padStart(2, "0");
    const minutes = time.getUTCMinutes().toString().padStart(2, "0");
    const seconds = time.getUTCSeconds().toString().padStart(2, "0");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

// Clear the lap list
function clearLapList() {
    const lapList = document.getElementById("lap-list");
    lapList.innerHTML = "";
}