'use strict';

function createArray() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"];
  return array;
}

var evenNumbers = new Array();

evenNumbers[0] = 2;
evenNumbers[1] = 4;
evenNumbers[3] = 8;

function addElementToArray(array) {
  array.push("A Christmas Story")
  return array;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  array[1] = "Carter";
  return array[1];
}

function removeElementFromArray(dishes) {
  dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(numbers) {
  var newNums = [];
  numbers.forEach(function(number) {
    var new_num = number + 5;
     newNums.push(new_num);
  });
  return newNums;
}
