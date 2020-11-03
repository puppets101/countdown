const birthday = '24 Aug 2021';

function countDown() {
  const birthdayDate = new Date(birthday);
  const currentDate = new Date();

  const totalSeconds = (birthdayDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600 % 24) + 1;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);


  console.log(days, hours, minutes, seconds);
}

countDown();

setInterval(countDown, 1000);