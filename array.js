'use strict';

function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"]; 
}

function addElementToArray(array) {
  array.push("A Christmas Story"); 
  return array; 
}

function accessElementFromArray(array) {
  return array[2]; 
}

function replaceElementInArray(array) {
  array[1] = "Carter"; 
  return array[1]; 
}

function removeElementFromArray(array) {
  array.splice(2, 2, "Roast Chicken"); 
  return array; 
}

function iterateArray(array){
  var newNums = new Array(); 
  array.forEach(function(item) {
    var number = item + 5; 
    newNums.push(number);  
  }); 
  return newNums; 
}
