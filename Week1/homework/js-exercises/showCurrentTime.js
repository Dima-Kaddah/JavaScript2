'use strict';
function showCurrentTime() {
  let date = new Date();
  let h = date.getHours(); // from 0 to 23
  let m = date.getMinutes(); // from 0 to 59
  let s = date.getSeconds(); //from 0 to 59
  let session = 'AM';
  // make 12 hour not 24 hour clock
  if (h === 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = 'PM'; //make it PM when finsh the first 12
  }
  //make h and m and s two number even if its one number (set a 0 if its les than 10)
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  let time = h + ':' + m + ':' + s + ' ' + session;
  let myClock = document.getElementById('clockDispaly');

  myClock.innerText = time;
  myClock.classList.add('myClock');
}
showCurrentTime();
//we need to run the seconds or the time with setInterval method , with function name and 1000 millisecond
// the time will run after one second when open browser that why i have to call the funcyion normally before
//i can use setTimeout(showTime, 1000); in the function
setInterval(showCurrentTime, 1000);
