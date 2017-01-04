'use strict';

function createArray() {

  var issue = ["snickers", "hundred grand","kitkat", "skittles"];
  return issue
};

function addElementToArray(array) {
  var ourArray = array
  ourArray[ourArray.length] = "A Christmas Story";
  return ourArray
}

function accessElementFromArray(array) {
  return array[2];
}

function replaceElementInArray(array){
  array[1] = "Carter";
  return array[1];
}

function removeElementFromArray(array){
  array.splice(2,2,"Roast Chicken");
  return array;
}

function iterateArray(array){
  var newNums = new Array();
  array.forEach(function(number, index){
    newNums[index] = Math.max(number, number + 5);
  })
  return newNums;
}
