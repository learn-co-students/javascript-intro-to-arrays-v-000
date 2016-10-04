'use strict';

function createArray() {
  var goodies = ["snickers", "hundred grand", "kitkat", "skittles"];
  return  goodies;

}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array;

}

function  accessElementFromArray(states){
  return states[2];
}

function replaceElementInArray(name) {
  name = "Carter";
  return name;
}

function removeElementFromArray(dish){
  dish.splice(2, 3, "Roast Chicken");
  return dish;
}

function iterateArray(numArr){
  var newNums = [];
  numArr.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}





