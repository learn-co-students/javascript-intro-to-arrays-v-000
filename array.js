'use strict';


function createArray() {
  var strings = ["snickers", "hundred grand", "kitkat", "skittles"];
  return strings;
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array; 
}

function accessElementFromArray(arrayOfStates) {
  return arrayOfStates[2];
}

function replaceElementInArray(arrayOfNames) {
  arrayOfNames[1] = "Carter";
  return arrayOfNames[1];
}

function removeElementFromArray(arrayOfDishes) {
  arrayOfDishes.splice(2, 2, "Roast Chicken");
  return arrayOfDishes;
}

function iterateArray(arrayOfNumbers) {
  var newNums = []
  arrayOfNumbers.forEach(function(number) {
    var addFive = number + 5;
    newNums.push(addFive);
  });
  return newNums;
}