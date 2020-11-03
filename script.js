const birthday = '24 Aug 2021';

function countDown() {
  const birthdayDate = new Date(birthday);
  const currentDate = new Date();

  const totalSeconds = (birthdayDate - currentDate) / 1000;

  // Calculate times
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600 % 24);
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  // Get elements from the DOM
  const daysEl = document.getElementById('days');
  daysEl.innerText = days;

  const hoursEl = document.getElementById('hours');
  hoursEl.innerText = hours;

  const minutesEl = document.getElementById('minutes');
  minutesEl.innerText = minutes;

  const secondsEl = document.getElementById('seconds');
  secondsEl.innerText = seconds;


  console.log(days, hours, minutes, seconds);
}

countDown();

setInterval(countDown, 1000);