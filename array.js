'use strict';

function createArray() {
  var candy = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candy;
}

function addElementToArray(movies) {
  var movies = ["Home Alone", "Love Actually", "Elf"];
  movies.push("A Christmas Story");
  return movies;
}

function accessElementFromArray(states){
  var states = ["New York", "California", "Virginia", "Louisiana", "Nevada"]
  return states[2];
}

function replaceElementInArray(names) {
  var names = ["Joe", "Tim", "Stephen", "Sarah", "Stephanie"];
  names[1] = "Carter";
  return names[1];
}

function removeElementFromArray(dishes) {
  var dishes = ["Pasta Alfredo", "Grilled Salmon", "Hamburgers", "Black Bean Soup"];
  var removeDish = dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(array) {
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var newNums = [];
  array.forEach(function(oldnumber) {
    newNums.push(oldnumber + 5)
  });
  return newNums;
}