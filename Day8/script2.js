let timerInterval; 

async function startTimer() {
    let minutes = document.getElementById("typeNumber").value;
    let totalSeconds = minutes * 60; 
    let timerDisplay = document.getElementById("safeTimerDisplay");

    clearInterval(timerInterval); 

    while (totalSeconds >= 0) {
        let displayMinutes = Math.floor(totalSeconds / 60);
        let displaySeconds = totalSeconds % 60;

        displaySeconds = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;

        timerDisplay.innerHTML = displayMinutes + ':' + displaySeconds;
        totalSeconds--;

        await new Promise(resolve => setTimeout(resolve, 1000)); 
    }

    timerDisplay.innerHTML = 'Time is up!'; 
}

function resetTimer() {
    clearInterval(timerInterval); 
    document.getElementById("typeNumber").value = ""; 
    document.getElementById('safeTimerDisplay').innerHTML = "";
}