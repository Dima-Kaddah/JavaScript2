'use strict';
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
];
// create ul
let booksUl = document.createElement('ul');
document.body.appendChild(booksUl); //add ul to body
books.forEach(function(getAlBooks) {
  let myLi = document.createElement('li'); //create li
  let bookImg = document.createElement('img'); //create img
  let theParagraph = document.createElement('p'); //create paragraoh
  theParagraph.style.fontSize = '30px'; //make paragraoh size
  theParagraph.innerText = `${getAlBooks.title} By ${getAlBooks.author}`; // add the object text and info to paragrah
  booksUl.appendChild(myLi); // add li to ul for each book
  myLi.appendChild(bookImg); // add img to ul for each book
  bookImg.style.width = '100%'; //make width img
  myLi.appendChild(theParagraph); // add paragraph to li

  //add background color
  if (getAlBooks.alreadyRead === true) {
    theParagraph.style.backgroundColor = 'red';
  } else {
    theParagraph.style.backgroundColor = 'blue';
  }
  // add imges
  if (getAlBooks.title === 'The Design of Everyday Things') {
    bookImg.src =
      'https://upload.wikimedia.org/wikipedia/en/3/33/The_Design_of_Everyday_Things_%28cover_1988%29.jpg';
  } else if (getAlBooks.title === 'The Most Human Human') {
    bookImg.src = 'https://images.gr-assets.com/books/1295465264l/8884400.jpg';
  } else
    bookImg.src =
      'https://www.bridgiot.co.za/wp-content/uploads/2018/12/1024x1024-no-image-available.png';
});
