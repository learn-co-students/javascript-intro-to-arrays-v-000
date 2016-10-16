'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(movie) {
  movie.push("A Christmas Story");
  return movie;
}

function accessElementFromArray(states) {
  return states[2];
}

function replaceElementInArray(names) {
  names[1] = "Carter";
  return names[1];
}

function removeElementFromArray(dishes) {
  dishes.splice(2,2, 'Roast Chicken');
  return dishes;
}

function iterateArray(loop) {
  var newNums = [];
  loop.forEach(function(num){
    newNums.push(num + 5);
  });
  return newNums;
}
