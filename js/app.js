//// modified by one of the games that JB sent
'use strict';
//gets element of the begin button
var userInfo = document.getElementById('info');
userInfo.addEventListener('submit', newUserName);

//gets the player name input and stores it in localStorage
function newUserName(event) {
  event.preventDefault();
  var name = event.target.newUser.value;
  console.log('name',name);
  localStorage.setItem('userName', name);
  userInfo.removeEventListener('submit', newUserName);
  window.location.href = 'game.html';
}


//Showing the instructions of the game
function show() {
  var inst = document.getElementById('back')
  inst.setAttribute('style',' visibility: visible; opacity:1; transition: opacity 1s');
}
var visible = document.getElementById('visible')
visible.addEventListener('click', show)

//Hiding the instructions 
function hide() {
  var inst = document.getElementById('back')
  inst.setAttribute('style','opacity:0; transition: opacity 1s');
}
var hidden = document.getElementById('hide')
hidden.addEventListener('click', hide)