//call a function on an object

function Cat(name, age) {
  this.name = name;
  this.age = age;
}

Cat.prototype.meow = function() {
  console.log(`${this.name} says meow!`);
};

const fluffy = new Cat('Fluffy', 3);
const whiskers = new Cat('Whiskers', 5);

fluffy.meow();   // Output: Fluffy says meow!
whiskers.meow(); // Output: Whiskers says meow!


//creating array methods

Array.prototype.customMethod = function() {
  // Access the array using 'this'
  console.log('Array length:', this.length);
  console.log('Array elements:', this);
};

const numbers = [1, 2, 3, 4, 5];
numbers.customMethod();

const dogs = ["doogy","dog-face","bouncy dog"]
dogs.customMethod()


//change the id using JS

/*
<div class="gallery">
  <div class="dog" id="dog1">Dog 1</div>
  <div class="dog" id="dog2">Dog 2</div>
  <div class="dog" id="dog3">Dog 3</div>
  <div class="dog" id="dog4">Dog 4</div>
</div>

*/


// Get the dog elements
const dogs = document.querySelectorAll('.dog');

// Change the ID attributes
dogs.forEach((dog, index) => {
  dog.id = `newDog${index + 1}`;
});


//change the div

/*<div id="cardContainer"></div>*/
const cardData = {
  imgSrc: 'path/to/image.jpg',
  title: 'Card Title',
  description: 'This is a card description.'
};

// Create the card elements
const cardContainer = document.getElementById('cardContainer');
const card = document.createElement('div');
card.classList.add('card');

const image = document.createElement('img');
image.src = cardData.imgSrc;
image.alt = 'Card Image';

const title = document.createElement('h1');
title.textContent = cardData.title;

const description = document.createElement('p');
description.textContent = cardData.description;

// Append the elements to the card container
card.appendChild(image);
card.appendChild(title);
card.appendChild(description);
cardContainer.appendChild(card);






