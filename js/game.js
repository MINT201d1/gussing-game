'use strict';
// constructor function for category
// function Category(name) {
//   this.name = name;
//   Category.all.push(this);

// }

var categoryArr = [];
var clickArr = [];
var correctCategory = null;
var ctrB = 0;
var ctrR = 0;
var ctrI = 0;

console.log('nla', clickArr)

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
  var h2 = document.createElement('p');
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


// new Category('Bird, Where are you?');
// new Category('Insect, Where are you?');
// new Category('Reptile, Where are you?');
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
  } else if (clickedId === 'left') {
    animal = clickArr[1]
    check();
  } else if (clickedId === 'down') {
    animal = clickArr[2]
    check();
  } else if (clickedId === 'right') {
    animal = clickArr[3]
    check();
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
    } else if (animal.name === null) {
      alert('nooooo')
    }
    console.log('animal', animal) /// Danger the clicking process holds the scr of the constuctor
    console.log('ctrB', ctrB);
    console.log('ctrR', ctrR);
    console.log('ctrI', ctrI);


    if (animal.name === correctCategory) {
      alert('yeaaaaaah')
    }
  }
  renderAnimals();
  renderCategory();

}
// function clickHandlerxxxx(event) {
//   // 
//   var clickedId = event.target.id;
//   var imgClicked;

//   if (clickedId === 'up') {
//     renderAnimals();
//     renderCategory();
//     var animal = clickArr[0];
//     console.log('animal', animal)
//     imgClicked = clickArr[0];
//     if (animal.name == 'bird') {
//       ctrB++;
//     }
//     else if (animal.name == 'reptil') {
//       ctrR++;
//     }
//     else if (animal.name == 'insect') {
//       ctrI++;
//     }

//   } else if (clickedId === 'left') {
//     renderAnimals();
//     renderCategory();
//     imgClicked = clickArr[1];
//     if (clickArr[1] == getRandomBird()) {
//       ctrB++;
//     }

//     else if (clickArr[1] == getRandomReptile()) {
//       ctrR++;
//     }
//     else if (clickArr[1] == getRandomInsect()) {
//       ctrI++;
//     }
//   } else if (clickedId === 'down') {
//     renderAnimals();
//     renderCategory();
//     imgClicked = clickArr[2];
//     if (clickArr[2] == getRandomBird()) {
//       ctrB++;
//     }

//     else if (clickArr[2] == getRandomReptile()) {
//       ctrR++;
//     }
//     else if (clickArr[2] == getRandomInsect()) {
//       ctrI++;
//     }
//   } else if (clickedId === 'right') {
//     renderAnimals();
//     renderCategory();
//     imgClicked = clickArr[3];
//     if (clickArr[3] == getRandomBird()) {
//       ctrB++;
//     }

//     else if (clickArr[3] == getRandomReptile()) {
//       ctrR++;
//     }
//     else if (clickArr[3] == getRandomInsect()) {
//       ctrI++;
//     }
//   }
//   else {
//     alert('nooooooooo');
//   }

// if (imgClicked) {
//   for (let i = 0; i < clickArr.length; i++) {
//     if (clickArr[i] == getRandomBird().src) {
//       ctrB++;
//     } // else if (clickArr[1] == getRandomInsect()){
// }

//   ctrI++;
// } else if (clickArr[2] == getRandomReptile()){
//   ctrR++;
// }


Bird.container = document.getElementById('container');
Insect.container = document.getElementById('container');
Reptile.container = document.getElementById('container');
Other.container = document.getElementById('container');

Bird.container.addEventListener('click', clickHandler);
Insect.container.addEventListener('click', clickHandler);
Reptile.container.addEventListener('click', clickHandler);
Other.container.addEventListener('click', clickHandler);

function updateTotals() {

  var tableBody = document.getElementById('news');

  tableBody.innerHTML = '';

  for (var i = 0; i < categoryArr.length; i++) {
    var row = addElement('tr', tableBody);
    addElement('td', row, categoryArr[i]);
    addElement('td', row, '');
  }
}
updateTotals();
// console.log('ctr', ctrB)
