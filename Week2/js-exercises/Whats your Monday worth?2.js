'use strict';
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];
//make function
function hourlyMonday(mondayTasks) {
  const getDuration = mondayTasks.map(h => {
    return h.duration;
  });

  //getting the time from minuts to hour
  const durationInHours = getDuration.map(item => {
    return item / 60;
  });

  //mutliplying by the hourly rate
  const multiplyHourPrice = durationInHours.map(item => {
    return item * 25;
  });

  //reduce to sum all in one result
  const sumMondayRate = multiplyHourPrice.reduce((total, item) => {
    return item + total;
  }, 0);
  return sumMondayRate;
}
console.log('€' + ' ' + hourlyMonday(mondayTasks));
