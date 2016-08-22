'use strict';

function createArray() {
  var goodies = ["snickers", "hundred grand", "kitkat", "skittles"];
  return  goodies;

}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;

}

function accessElementFromArray(array) {
  return array[2];

}

function replaceElementInArray(array) {
  return array[2] = "Carter";
  // return array;
}

function removeElementFromArray(array) {
  array.splice(2, 2, "Roast Chicken");
  return array;
}

function iterateArray(array) {
  var newNums = [];

  array.forEach(function(oldnumber) {
    newNums.push(oldnumber + 5)
  });
  return newNums;
}