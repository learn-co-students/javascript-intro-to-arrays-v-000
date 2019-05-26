'use strict';

function createArray(){
  var strings = new Array("snickers", "hundred grand", "kitkat", "skittles");
  return strings
}


function addElementToArray(array){
  array.push("A Christmas Story")
  return array
}


function accessElementFromArray(array){
  return array[2]
}


function replaceElementInArray(array){
  array[1] = "Carter"
  return array[1]
}


// Define a function removeElementFromArray that take an array of dishes as a parameter.
// The function should remove the third and fourth item from the array, and adds "Roast Chicken" to the end,
// using the splice function. The function should return the updated array.

function removeElementFromArray(array){
  array.splice(2, 2, "Roast Chicken")
  return array
}


// Write a function iterateArray that accepts an array of numbers as a parameter.
// The body should also contain an empty array, stored in the variable newNums.
// You should iterate over the array of numbers, add 5 to each number, and store the larger number
// in the array newNums. The function should return the newNums array.


function iterateArray(array){
  var newNums = [];
  array.forEach(function(num){
    newNums.push(num + 5)
  });
  return newNums;
}
