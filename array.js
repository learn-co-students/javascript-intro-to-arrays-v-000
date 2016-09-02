'use strict';

function createArray() {
  return ['snickers', 'hundred grand', 'kitkat', 'skittles'];
}

function addElementToArray(element) {
  element.push("A Christmas Story");

  return element;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  array[1] = "Carter"

  return array[1];
}

function removeElementFromArray(array) {
  array.splice(2, 2);

  array.splice(3, 1, "Roast Chicken")

  return array;
}

function iterateArray(array) {
  var newAry = [];

  array.forEach(function(number){
    newAry.push(number + 5);
  })

  return newAry;
}
