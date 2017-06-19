
'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(){
  var christmasMovies = ["Home Alone", "Love Actually", "Elf"];
  christmasMovies.push("A Christmas Story");
  return christmasMovies;
}

function accessElementFromArray(){
  var states = ["New York", "California", "Virginia", "Louisiana", "Nevada"];
  return states[2];
}

function replaceElementInArray(){
  var names = ["Joe", "Tim", "Stephen", "Sarah", "Stephanie"];
  names[1] = "Carter";
  return names[1];
}

function removeElementFromArray(){
  var dishes = ["Pasta Alfredo", "Grilled Salmon", "Hamburgers", "Black Bean Soup"];
  dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(){
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var newNums = [];
  nums.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
