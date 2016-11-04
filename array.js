'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(arr){
  arr.push("A Christmas Story");
  return arr;
}

function accessElementFromArray(states){
  return states[2];
}

function replaceElementInArray(names){
  return names[1] = "Carter";
  // return names[1];
}

function removeElementFromArray(dishes){
  dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(myArray){
  var newNums = [];
  myArray.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
