'use strict';

function createArray() {
  return new Array("snickers", "hundred grand", "kitkat", "skittles")
}

function addElementToArray(arr) {
  arr.push('A Christmas Story')
  return arr
}

function accessElementFromArray(arr) {
  return arr[2]
}

function replaceElementInArray(arr) {
  return arr[3] = "Carter"
}

function removeElementFromArray(arr) {
  arr.splice(2, 3, 'Roast Chicken')
  return arr
}

function iterateArray(numbers) {
  var newNums = []
  numbers.forEach(function(number) {
  newNums.push(number + 5);
})
  return newNums
}
