'use strict';
function createArray() {
  var random = new Array();
  return random = ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(practice) {
  practice.push("A Christmas Story");
  return practice;
}

function accessElementFromArray(states) {
  return states[2];
}

function replaceElementInArray(names) {
  names[1] = "Carter";
  return names[1];
}

function removeElementFromArray(dishes) {
  dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(numbers) {
  var newNums = new Array();
  numbers.forEach(function(number) {
      newNums.push( number + 5 );
  });
  return newNums;
};
