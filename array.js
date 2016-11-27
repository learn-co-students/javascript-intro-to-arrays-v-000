'use strict';

function createArray() {
  var createArray = ["snickers", "hundred grand", "kitkat", "skittles"];
  return createArray;
}

function addElementToArray(new_arr) {
  new_arr.push("A Christmas Story");
  return new_arr;

}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array) {

  array[1] = "Carter";
  return array[1];
}

function iterateArray(numArray) {
    var newNums = [];
    numArray.forEach(function(letter) {
      newNums.push(letter + 5);
    });
    return newNums;
}

function removeElementFromArray(dishesArray) {
  dishesArray.splice(2,3, "Roast Chicken");
  return dishesArray;
}
