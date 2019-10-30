'use strict';

var categoryArr = [];
var clickArr = [];
var correctCategory = null;
var ctrB = 0;
var ctrR = 0;
var ctrI = 0;
var roudCtr;
var score;
var limit = 10;

zero();

function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;
}


///// Birds Constructor /////
function Bird(name, src) {
  this.src = src;
  this.name = name;
  Bird.all.push(this);

}
Bird.all = [];

function getRandomBird() {
  var index = Math.floor(Math.random() * Bird.all.length);
  return Bird.all[index];
}

///// Others Constructor /////

function Other(src) {
  this.src = src;
  Other.all.push(this);
}
Other.all = [];

function getRandomOther() {
  var index = Math.floor(Math.random() * Other.all.length);
  return Other.all[index];
}

///// Inssects Constructor /////

function Insect(name, src) {
  this.src = src;
  this.name = name;
  Insect.all.push(this);
}
Insect.all = [];

function getRandomInsect() {
  var index = Math.floor(Math.random() * Insect.all.length);
  return Insect.all[index];
}


///// Reptiles Constructor /////

function Reptile(name, src) {
  this.src = src;
  this.name = name;
  Reptile.all.push(this);
}
Reptile.all = [];
function getRandomReptile() {
  var index = Math.floor(Math.random() * Reptile.all.length);
  return Reptile.all[index];
}

function getCategoryName() {
  categoryArr.push(Bird.name);
  categoryArr.push(Insect.name);
  categoryArr.push(Reptile.name);
}
function getRandomCategory() {
  var index = Math.floor(Math.random() * categoryArr.length);
  return categoryArr[index];
}
getCategoryName();
console.log('cate', categoryArr)
///// Render Functions /////

function renderCategory() {
  var cate = document.getElementById('main-category');
  cate.innerHTML = '';
  var h2 = document.createElement('h4');
  cate.appendChild(h2);
  var category = getRandomCategory();
  h2.textContent = category + ', Where are you?';
  correctCategory = category.toLowerCase();
}


function renderAnimals() {

  var up = document.getElementById('up');
  var left = document.getElementById('left');
  var down = document.getElementById('down');
  var right = document.getElementById('right');
  var animalArray = [getRandomBird(), getRandomOther(), getRandomInsect(), getRandomReptile()];
  animalArray = shuffle(animalArray);
  clickArr = [];
  for (let i = 0; i < animalArray.length; i++) {
    clickArr.push(animalArray[i])
  }
  up.setAttribute('src', animalArray[0].src);
  left.setAttribute('src', animalArray[1].src);
  down.setAttribute('src', animalArray[2].src);
  right.setAttribute('src', animalArray[3].src);


}
//shuffle array modified by https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


new Bird('bird', 'birds/pengune.gif');
new Bird('bird', 'birds/whitduk.gif');
new Bird('bird', 'birds/yallowduk.gif');
new Other('other-img/img1.jpg');
new Other('other-img/img2.jpg');
new Other('other-img/img3.jpg');
new Insect('insect', 'insect/grasshopper.jpg');
new Insect('insect', 'insect/butterfly.jpg');
new Insect('insect', 'insect/mariquitaa.gif');
new Reptile('reptile', 'reptile/cobra.jpg');
new Reptile('reptile', 'reptile/cute-turtle.jpg');
new Reptile('reptile', 'reptile/lizard.jpg');

renderAnimals();
renderCategory();

function clickHandler(event) {
  var clickedId = event.target.id;
  var animal = null;
  if (clickedId === 'up') {
    animal = clickArr[0]
    check();
    renderAnimals();
    renderCategory();
    roudCtr++;
    if (roudCtr === limit) {
      alert('Game Over');
      localStorage.setItem('scoreFinal', score);
      console.log('score', localStorage.getItem('scoreFinal'));
      Bird.container.removeEventListener('click', clickHandler);
      Insect.container.removeEventListener('click', clickHandler);
      Reptile.container.removeEventListener('click', clickHandler);
      Other.container.removeEventListener('click', clickHandler);
    }
  } else if (clickedId === 'left') {
    animal = clickArr[1]
    check();
    renderAnimals();
    renderCategory();
    roudCtr++;
    if (roudCtr === limit) {
      alert('Game Over');
      localStorage.setItem('scoreFinal', score);
      console.log('score', localStorage.getItem('scoreFinal'));
      Bird.container.removeEventListener('click', clickHandler);
      Insect.container.removeEventListener('click', clickHandler);
      Reptile.container.removeEventListener('click', clickHandler);
      Other.container.removeEventListener('click', clickHandler);
    }
  } else if (clickedId === 'down') {
    animal = clickArr[2]
    check();
    renderAnimals();
    renderCategory();
    roudCtr++;
    if (roudCtr === limit) {
      alert('Game Over');
      localStorage.setItem('scoreFinal', score);
      console.log('score', localStorage.getItem('scoreFinal'));
      Bird.container.removeEventListener('click', clickHandler);
      Insect.container.removeEventListener('click', clickHandler);
      Reptile.container.removeEventListener('click', clickHandler);
      Other.container.removeEventListener('click', clickHandler);
    }
  } else if (clickedId === 'right') {
    animal = clickArr[3]
    check();
    renderAnimals();
    renderCategory();
    roudCtr++;
    if (roudCtr === limit) {
      alert('Game Over');
      localStorage.setItem('scoreFinal', score);
      console.log('score', localStorage.getItem('scoreFinal'));
      Bird.container.removeEventListener('click', clickHandler);
      Insect.container.removeEventListener('click', clickHandler);
      Reptile.container.removeEventListener('click', clickHandler);
      Other.container.removeEventListener('click', clickHandler);
    }
  }
  else {
    alert('nooooooooo');
  }


  function check() {

    if (animal.name === 'bird') {
      ctrB++;
    }
    else if (animal.name === 'reptile') {
      ctrR++;
    }
    else if (animal.name === 'insect') {
      ctrI++;
    }
    else if (animal.name === null) {
      alert('nooooo')
    }
    console.log('animal', animal) /// Danger the clicking process holds the scr of the constuctor
    console.log('ctrB', ctrB);
    console.log('ctrR', ctrR);
    console.log('ctrI', ctrI);


    if (animal.name === correctCategory) {
      score += 100;
      updateScore();
      console.log('score', score);
    }
  }

}

Bird.container = document.getElementById('container');
Insect.container = document.getElementById('container');
Reptile.container = document.getElementById('container');
Other.container = document.getElementById('container');

Bird.container.addEventListener('click', clickHandler);
Insect.container.addEventListener('click', clickHandler);
Reptile.container.addEventListener('click', clickHandler);
Other.container.addEventListener('click', clickHandler);



function updateScore() {

  var para = document.getElementById('score');

  para.innerHTML = '';
  addElement('h2', para, 'your score is ' + score);
}
function zero() {
  roudCtr = 0;
  score = 0;
}
zero();

function hi(){
  var welcome = document.getElementById('welcome');
  var hello = document.createElement('p');
  welcome.appendChild(hello);
  console.log('name',localStorage.getItem('userName'))
  hello.textContent = 'Hello ' + localStorage.getItem('userName') + ' click anywhere to play'
}
hi();

  
//Hiding the welcome 
function hide() {
  var inst = document.getElementById('welcome')
  inst.setAttribute('style','opacity:0; transition: opacity 1s; z-index:0');
}
var hidden = document.getElementById('welcome')
hidden.addEventListener('click', hide)