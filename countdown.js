let minutes = 0;
let seconds = 0;
let countdownInterval = null;
let validInput

function setTimer() {
    // Check if the input values are valid
    if (
        document.getElementById("minutesInput").value < 0 ||
        document.getElementById("secondsInput").value < 0 ||
        document.getElementById("secondsInput").value >= 60 ||
        document.getElementById("minutesInput").value % 1 !==0 ||
        document.getElementById("secondsInput").value % 1 !==0 ||
        document.getElementById("minutesInput").value === "" ||
        document.getElementById("secondsInput").value === ""
    ) {
        // If not, show an alert and return
        alert("Please enter valid time values.");
        validInput = false;
        return;
        // If the input values are valid, set the timer
    } else if (document.getElementById("timeDisplay").innerText === "00:00") {
        minutes = parseInt(document.getElementById("minutesInput").value);
        seconds = parseInt(document.getElementById("secondsInput").value);
        if (minutes < 10) {
            document.getElementById("timeDisplay").innerText = seconds < 10 ? `0${minutes}:0${seconds}` : `0${minutes}:${seconds}`;
        } else {
            document.getElementById("timeDisplay").innerText = seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
        }
    }
}

function startCountdown() {
    setTimer();
    // If the input values are not valid, return and reset validInput so that the user can try again
    if (validInput === false) {
        validInput = true;
        return;
    }
    // This loop runs every second, and updates the time display
    countdownInterval = setInterval(() => {
        if (seconds === 0 || seconds == "00") {
            if (minutes === 0 || minutes == "00") {
                clearInterval(countdownInterval);
                document.getElementById("timeDisplay").innerText = "Time's up!";
                return;
            } else if (minutes < 11) {
                minutes--;
                seconds = 59;
                document.getElementById("timeDisplay").innerText = minutes === 0 ? `00:${seconds}` : `0${minutes}:${seconds}`;
            } else {
                minutes--;
                seconds = 59;
                document.getElementById("timeDisplay").innerText = `${minutes}:${seconds}`;
            }
        } else if (minutes > 9){
            seconds--;
            document.getElementById("timeDisplay").innerText = seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
        } else if (minutes < 10 && minutes > 0){
            seconds--;
            document.getElementById("timeDisplay").innerText = seconds < 10 ? `0${minutes}:0${seconds}` : `0${minutes}:${seconds}`;
        } else {
            seconds--;
            document.getElementById("timeDisplay").innerText = seconds < 10 ? `00:0${seconds}` : `00:${seconds}`;
        }
        console.log(minutes, seconds);
    }, 1000);
}

// Function to stop the countdown by clearing the interval
function stopCountdown() {
    clearInterval(countdownInterval);
}

// Function to reset the countdown timer to 00:00 and reset the variables and input fields
function resetCountdown() {
    clearInterval(countdownInterval);
    minutes = 0;
    seconds = 0;
    document.getElementById("timeDisplay").innerText = "00:00";
    document.getElementById("minutesInput").value = "";
    document.getElementById("secondsInput").value = "";
}