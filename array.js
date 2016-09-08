'use strict';

function createArray() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"];
  return array;
};

function addElementToArray(array) {
  var new = array.push("A Christmas Story");
  return new;
};

function accessElementFromArray(array) {
  return array[2];
};

function replaceElementInArray(array) {
  var replaced = array[1];
  array[1] = "Carter";
  return replaced;
};

function removeElementFromArray(array) {
  var new = array.splice(2, 2);
  var newer = new.push("Roast Chicken");
  return newer;
};
