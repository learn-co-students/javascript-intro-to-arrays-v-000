'use strict';

function createArray() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"];
  return array;
}

function addElementToArray() {
  var array = ["Home Alone", "Love Actually", "Elf"];
  array.push('A Christmas Story');
  return array;
}

function accessElementFromArray() {
  var array = ["New York", "California", "Virginia", "Louisiana", "Nevada"];
  return array[2];
}

function replaceElementInArray() {
  var array = ["Joe", "Tim", "Stephen", "Sarah", "Stephanie"];
  array[1] = "Carter";
  return array[1];
}

function removeElementFromArray() {
  var array = ["Pasta Alfredo", "Grilled Salmon", "Hamburgers", "Black Bean Soup"];
  array.splice(2, 2, "Roast Chicken");
  return array;
}

function iterateArray(array) {
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}