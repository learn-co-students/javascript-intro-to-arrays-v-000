'use strict';

function createArray() {
  var newArray = ["snickers", "hundred grand", "kitkat", "skittles"];
  return newArray;
}

function addElementToArray(addToArray) {
  addToArray.push('A Christmas Story');
  return addToArray;
}

function accessElementFromArray(accArray) {
  return accArray[2];

}

function replaceElementInArray(repArray) {
  repArray[2] = "Carter";
  return repArray[2];
}

function removeElementFromArray(removArray) {
  removArray.splice(2,2);
  removArray.push("Roast Chicken");
  return removArray;
}

function iterateArray(iterArray) {
  var count = 0;
  do {
    iterArray.push(iterArray.length + ++count);
    iterArray.shift();

  } while(count < 5);

  return iterArray;
}
