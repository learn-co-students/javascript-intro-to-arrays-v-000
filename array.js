'use strict';

function addElementToArray(argument) {
  argument.push("A Christmas Story");
  return argument;
}

function accessElementFromArray(argument) {
  return argument[2];
}

function replaceElementInArray(argument) {
  return argument[1] = "Carter";
}

function removeElementFromArray(argument) {
  argument.push("Roast Chicken")
  argument.splice(2, 2)
  return argument;
}

function iterateArray(argument) {
  var newNums = []
  argument.forEach(function(arg) {
  newNums.push(arg + 5);
  });

  return newNums;
}

function createArray() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"]
  return array;
}

