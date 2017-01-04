'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(moviearr){
  moviearr.push("A Christmas Story")
  return moviearr
}

function accessElementFromArray(statesarr){
  return statesarr[2]
}

function replaceElementInArray(namesarr){
  namesarr[1] = "Carter"
  return namesarr[1]
}

function removeElementFromArray(dishesarr){
  dishesarr.splice(2, 2, 'Roast Chicken')
  return dishesarr
}

function iterateArray(numbersarr){
  var newNums = [];
  numbersarr.forEach(function(number){
    newNums.push(number + 5);
  });
  return newNums;
}
