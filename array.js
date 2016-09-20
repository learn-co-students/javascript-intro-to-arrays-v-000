'use strict';

function createArray() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"];
  return array
};

function addElementToArray(array) {
  var array = ["Home Alone", "Love Actually", "Elf"];
  array.push("A Christmas Story");
  return array;
};

function accessElementFromArray(array) {
  var array = ["New York", "California", "Virginia", "Louisiana", "Nevada"];
  return array[2];
};

function replaceElementInArray(array) {
  var array = ["Joe", "Tim", "Stephen", "Sarah", "Stephanie"];
  array[1] = "Carter"
  return array[1];
};

function removeElementFromArray(array) {
  var array = ["Pasta Alfredo", "Grilled Salmon", "Hamburgers", "Black Bean Soup"];
  array.splice(2,2,"Roast Chicken");
  return array;
};

function iterateArray(array) {
  var newNums = []
  array.forEach(function(number){
    newNums.push(number + 5);
  });
  return newNums
};
