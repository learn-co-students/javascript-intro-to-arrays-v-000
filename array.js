'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(array) {
  array.push("A Christmas Story")
  return array
}

function accessElementFromArray(stateArray) {
  return stateArray[2];
}

function replaceElementInArray(nameArray) {
  nameArray[2] = "Carter"
  return nameArray[2];
}

function removeElementFromArray(dishesArray) {
  dishesArray.splice(2, 2, "Roast Chicken")
  return dishesArray
}

function iterateArray(numArray) {
  var newNums = []
  numArray.forEach(function(num) {
    newNums.push(num + 5)
  });
  return newNums;
}
