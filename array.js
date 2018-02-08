'use strict';

function createArray() {
  var candy =  ["snickers", "hundred grand", "kitkat", "skittles"]
  return candy
}

function addElementToArray(Array) {
  Array.push("A Christmas Story");
  return Array
}

function accessElementFromArray(states) {
  return states[2];
}

function replaceElementInArray(names) {
  names[1] = "Carter";
  return names[1]
}

function removeElementFromArray(dishes) {
  dishes.splice(2,2, "Roast Chicken");
  return dishes
}

//Write a function iterateArray that accepts an array of numbers as a parameter.
//The body should also contain an empty array, stored in the variable newNums.
//You should iterate over the array of numbers, add 5 to each number, and store the larger number in the array newNums.
//The function should return the newNums array.

function iterateArray(numbers) {
    var newNums = [];
    numbers.forEach(function(number){
    newNums.push(number+5);
  })
    return newNums;
}

//function iterateArray(numArray) {
//    var newNum = []
//    numArray.forEach(function(number) {
//    newNum.push(number+5)
//  })
//    return newNum;
//  }
