let duration = 0; // Default duration in seconds
let time = duration;
let interval;

function startTimer() {
  let hours = parseInt(document.getElementById("hours").value);
  let minutes = parseInt(document.getElementById("minutes").value);
  let seconds = parseInt(document.getElementById("seconds").value);
  duration = hours * 3600 + minutes * 60 + seconds;
  time = duration;
  interval = setInterval(function() {
    time--;
    let hoursLeft = Math.floor(time / 3600);
    let minutesLeft = Math.floor((time % 3600) / 60);
    let secondsLeft = time % 60;
    document.getElementById("timer").textContent = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
    if (time == 0) {
      clearInterval(interval);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  let hours = parseInt(document.getElementById("hours").value);
  let minutes = parseInt(document.getElementById("minutes").value);
  let seconds = parseInt(document.getElementById("seconds").value);
  duration = hours * 3600 + minutes * 60 + seconds;
  time = duration;
  document.getElementById("timer").textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  clearInterval(interval);
}
