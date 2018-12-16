/*
<ul id="list">
  <li>Hello</li>
  <li>Motorola</li>
  <li>Adventure</li>
</ul>
<div class="clicked"></div>
*/

// const ul = document.getElementById('list');
// querySelector() returns Element, which is the most general base class
// from which all objects in a Document inherit.
const ul = document.querySelector('#list');

// click events on child elements bubble up to the top.
// e.stopPropagation() // prevents bubbling.
ul.addEventListener('click', function(e) {
  // const div = document.getElementsByClassName('clicked);
  const div = document.querySelector('.clicked');
  div.innerHTML = e.target.innerText;
});
