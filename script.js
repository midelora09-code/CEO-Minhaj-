let duration = 60 * 60;
const timerDisplay = document.getElementById("timer");

function startTimer() {
  let timer = duration;
  
  setInterval(function() {
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let seconds = timer % 60;
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    timerDisplay.textContent = hours + ":" + minutes + ":" + seconds;
    
    if (--timer < 0) {
      timerDisplay.textContent = "Expired!";
    }
  }, 1000);
}

startTimer();