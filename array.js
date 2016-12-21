'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(arr){
  arr.push("A Christmas Story");
  return arr;
}

function accessElementFromArray(array){
  return array[2];
}

function replaceElementInArray(names){
  return names[1] = "Carter";
}

function removeElementFromArray(dishes){
  dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(numbers){
  var newNums = [];
  numbers.forEach(function(num){
    newNums.push(num + 5);
  });
  return newNums;
}
