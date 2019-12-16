// find elements in DOM
​
document.getElementByID
document.getElementsByClassName
document.querySelector
document.body
​
let node = document.querySelector('#asd');
node.parentElement
node.children
node.firstChild
node.lastChild
node.previousSibling
node.nextSibling
​
// change single node
​
node.innerText 
node.innerText = "foo"
node.innerHTML // DO NOT USE
node.style.backgroundColor = "red"
node.setAttribute("id","newId")
node.getAttribute("id")
node.classList // get all classes for node
node.classList.add("foo")
node.classList.contains("foo")
node.classList.remove("foo")
​
// manipulating DOM tree
​
let newContainer = document.createElement('div')
let newParagraph = document.createElement('p')
newContainer.appendChild(newParagraph)
node.appendChild(newContainer)
node.insertBefore(newContainer, node.firstChild)
node.removeChild(newContainer);


let newContainer;
document.querySelector('div.footer').remove();

let button = document.querySelector('a');
let el = document.querySelectorAll('li');
// button.addEventListener('click',()=>{
for (i = 0; i < el.length; i++) {
  el[i].classList.toggle('.collapsed');
}
