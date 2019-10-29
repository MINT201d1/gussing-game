'use strict';
// constructor function for category
function Category(name) {
  this.name = name;
  Category.all.push(this);

}
Category.all = [];

function getRandomCategory() {
  var index = Math.floor(Math.random() * Category.all.length);
  return Category.all[index];
}


function Bird(src) {
  this.src = src;
  Bird.all.push(this);


}
Bird.all = [];

function getRandomBird() {
  var index = Math.floor(Math.random() * Bird.all.length);
  return Bird.all[index];
}

///
function Other(src) {
  this.src = src;
  Other.all.push(this);
}
Other.all = [];

function getRandomOther() {
  var index = Math.floor(Math.random() * Other.all.length);
  return Other.all[index];
}

///
function Insect(src) {
  this.src = src;
  Insect.all.push(this);
}
Insect.all = [];
function getRandomInsect() {
  var index = Math.floor(Math.random() * Insect.all.length);
  return Insect.all[index];
}



function Reptile(src) {
  this.src = src;
  Reptile.all.push(this);
}
Reptile.all = [];
function getRandomReptile() {
  var index = Math.floor(Math.random() * Reptile.all.length);
  return Reptile.all[index];
}

function renderCategory() {
  var cate = document.getElementById('main-category');
  cate.innerHTML = '' ;
  var h2 = document.createElement('p');
  cate.appendChild(h2);
  h2.textContent = getRandomCategory().name;
}


function renderAnimals() {

  var up = document.getElementById('up');
  var left = document.getElementById('left');
  var down = document.getElementById('down');
  var right = document.getElementById('right');
  var animalArray = [getRandomBird(), getRandomOther(), getRandomInsect(), getRandomReptile()];
  animalArray = shuffle(animalArray);

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


new Category('Chose the bird');
new Category('Chose the insect');
new Category('Chose the reptile');
new Bird('birds/pengune.gif');
new Bird('birds/whitduk.gif');
new Bird('birds/yallowduk.gif');
new Other('other-img/img1.jpg');
new Other('other-img/img2.jpg');
new Other('other-img/img3.jpg');
new Insect('insect/grasshopper.jpg');
new Insect('insect/butterfly.jpg');
new Insect('insect/mariquitaa.gif');
new Reptile('reptil/cobra.jpg');
new Reptile('reptil/cute-turtle.jpg');
new Reptile('reptil/lizard.jpg');

renderAnimals();
renderCategory();


function clickHandler(event) {

  var clickedId = event.target.id;

  if (clickedId === 'up') {
    renderAnimals();
    renderCategory();
  } else if (clickedId === 'down') {
    renderAnimals();
    renderCategory();
  } else if (clickedId === 'left') {
    renderAnimals();
    renderCategory();
  } else if (clickedId === 'right') {
    renderAnimals();
    renderCategory();
  }
  else {
    alert('nooooooooo');
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