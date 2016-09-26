'use strict';

function createArray(){
  var arr = ["snickers", "hundred grand", "kitkat", "skittles"];
  return arr;
}

function addElementToArray(){
  var christmasMovies = ["Home Alone", "Love Actually", "Elf"]
  christmasMovies.push('A Christmas Story');
  return christmasMovies;
}

function accessElementFromArray(){
  var arr = ["New York", "California", "Virginia", "Louisiana", "Nevada"];
  return arr[2];
}

function replaceElementInArray(arrOfNames){
  arrOfNames[1] = "Carter";
  return arrOfNames[1];
}

function removeElementFromArray(arrOfDishes){
  arrOfDishes.splice(2, 3, 'Roast Chicken');
  return arrOfDishes;
}

function iterateArray(arr){
  var newNums = [];
  arr.forEach(function(number){
    var addFive = number + 5;
    newNums.push(addFive);
  });
  return newNums;
}
