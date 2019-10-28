'use strict';
//gets element of the begin button
var userInfo = document.getElementById('info');
userInfo.addEventListener('submit', newUserName);

//gets the player name input and stores it in localStorage
function newUserName(event) {
  event.preventDefault();
  var name = event.target.newUser.value;
  localStorage.Data = JSON.stringify(name);
  userInfo.removeEventListener('submit', newUserName);
  window.location.href = 'html/game.html';
}
