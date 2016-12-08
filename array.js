'use strict';

function createArray() {
  return [`snickers`, `hundred grand`, `kitkat`, `skittles`];
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(states) {
  return states[2];
}

function replaceElementInArray(names) {
  return names[1] = 'Carter';
}

function removeElementFromArray(dishes) {
  dishes.splice(2, 2, 'Roast Chicken');
  return dishes;
}

function iterateArray(num) {
  var newNums = [];
  num.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}
