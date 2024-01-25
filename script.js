let hours = document.getElementById('hours');

let minutes = document.getElementById('minutes');

let seconds = document.getElementById('secounds');

setInterval(() => {
  const clock = new Date();

  hours.innerHTML = clock.getHours();

  minutes.innerHTML = clock.getMinutes();
  seconds.innerHTML = clock.getSeconds();
}, 1000);


