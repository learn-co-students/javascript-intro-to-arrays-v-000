'use strict';
function createArray() {
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}
function addElementToArray(anArray){
  anArray.push("A Christmas Story");
  return anArray;
}
function accessElementFromArray(anArray){
  return anArray[2];
}
function replaceElementInArray(anArray){
  anArray[1] = "Carter";
  return anArray[1];
}
function removeElementFromArray(anArray){
  anArray.splice(2, 2, 'Roast Chicken');
  return anArray;
}
function iterateArray(anArray){
  var newNums = [];
  anArray.forEach(function(num){
    newNums.push(num+5);
  });
  return newNums;
}
