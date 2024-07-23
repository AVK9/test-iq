function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;

  const interval = setInterval(() => {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = '00:00';
    }
  }, 1000);
}

window.onload = () => {
  const display = document.getElementById('timer');
  const tenMinutes = 10 * 60;
  startTimer(tenMinutes, display);
};
