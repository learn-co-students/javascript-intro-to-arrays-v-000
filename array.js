'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(movies){
  movies.push("A Christmas Story");
  return movies;
}

function accessElementFromArray(array){
  return array[2];
}

function replaceElementInArray(names){
  names[1] = "Carter";
  return names[1];
}

function removeElementFromArray(dishes){
  dishes.splice(2, 2);
  dishes.push("Roast Chicken");
  return dishes;
}

function iterateArray(numArr){
  var newNums = [];
  numArr.forEach(function(num){
    newNums.push(num + 5);
  });
  return newNums;
}
