'use strict';

function createArray() {
 var items = ["snickers", "hundred grand", "kitkat", "skittles"];
  return items;
}

function addElementToArray(array) {
 array.push("A Christmas Story");
  return array;
}

function accessElementFromArray(states) {
  return states[2];
}

function replaceElementInArray(names) {
  names[1] = "Carter";
  return names[1];
}

function removeElementFromArray(dishes) {
  var removeDish = dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(array) {
  var newNums = [];

  array.forEach(function(oldnumber) {
    newNums.push(oldnumber + 5)
  });
  return newNums;
}
