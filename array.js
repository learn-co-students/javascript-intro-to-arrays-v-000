'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(element) {
  element.push('A Christmas Story');
  return element;
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {
  return array[1] = "Carter";
}

function removeElementFromArray(array) {
  array.splice(2, 2);
  array.push("Roast Chicken");
  return array;
}

function iterateArray(nums) {
  var newNums = [];
  nums.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
