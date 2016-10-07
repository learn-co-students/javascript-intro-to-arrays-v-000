'use strict';
function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}


function addElementToArray(movies){
  movies.push("A Christmas Story");
  return movies;
}

function accessElementFromArray(arr) {
  return arr[2];
}

function replaceElementInArray(arr) {
  arr[1] = "Carter";
  return arr[1];
}

function removeElementFromArray(arr) {
  arr.splice(2, 2, "Roast Chicken");
  return arr;
}

function iterateArray(numbers) {
  var newNumbs = []
  numbers.forEach(function(number) {
    newNumbs.push(number + 5);
  });
  return newNumbs;
}
