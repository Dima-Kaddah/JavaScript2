'use strict';
const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
const content = document.getElementById('content');
const headline = document.createElement('h1');
headline.style.color = 'blue';
headline.innerText = 'My Hobbies';
content.appendChild(headline);
const myHobbiesUl = document.createElement('ul');
content.appendChild(myHobbiesUl);
myHobbies.forEach(hobbies => {
  const listItems = document.createElement('li');
  listItems.innerText = hobbies;
  listItems.style.color = 'red';
  myHobbiesUl.appendChild(listItems);
});
