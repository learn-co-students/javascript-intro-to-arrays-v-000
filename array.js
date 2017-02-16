'use strict';

function createArray() {
  return [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ];
}

function addElementToArray(array) {
  var index = array.length;
  array[index] = "A Christmas Story";
  return array;
}

function accessElementFromArray(states) {
  return states[2]
}

function replaceElementInArray(name) {
  name[1]= "Carter";
  return name[1]
}

function removeElementFromArray(dishes) {
  dishes.splice(2,2,"Roast Chicken")
  return dishes
}

function iterateArray(array) {
  var newNums = []
  array.forEach(function(number) {
    newNums.push(number + 5);
  })
  return newNums
}



