'use strict';

function createArray() {
  var candy = ["snickers", "hundred grand", "kitkat", 'skittles'];
  return candy;
}

function addElementToArray(array) {
  var array = new Array("Home Alone", "Love Actually", "Elf");
  array[3] = "A Christmas Story";
  return array;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  array[1] = "Carter";
  return array[1];
}

function removeElementFromArray(array) {
  array.splice(2, 2, "Roast Chicken");
  return array;
}

function iterateArray(array) {
  var newNums = new Array();
  array.forEach(function (number) {
    newNums.push(number + 5);
})
  return newNums;
}