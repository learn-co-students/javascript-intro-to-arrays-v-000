'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"]
}

function addElementToArray(array) {
array.push("A Christmas Story");
return array
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
    var num = number + 5;
    newNums.push(num);
  });
  return newNums;
}