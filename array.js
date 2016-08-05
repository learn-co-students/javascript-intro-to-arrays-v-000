'use strict';

function createArray() {
  var candyBars = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candyBars;
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  array[2] = "Carter";
  return array[2];
}

function removeElementFromArray(dishes) {
  dishes.splice(2, 2, "Roast Chicken")
  return dishes;
}

function iterateArray(numbers) {
  var newNums = [];

  numbers.forEach(function(number) {
    newNums.push(number + 5);
  });

  return newNums;
}
