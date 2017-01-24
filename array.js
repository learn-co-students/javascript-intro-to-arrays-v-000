'use strict';
function createArray() {
  var random = new Array();
  return random = ["snickers", "hundred grand", "kitkat", "skittles"]
}

var practice = new Array()
function addElementToArray(practice) {
  practice.push("A Christmas Story")
  return practice
}

var states = new Array()
function accessElementFromArray(states) {
  return states[2]
}

var names = new Array();
function replaceElementInArray(names) {
  names[1] = "Carter"
  return names[1]
}

var dishes = new Array();
function removeElementFromArray(dishes) {
  dishes.splice(2, 2, "Roast Chicken")
  return dishes
}

var numbers = new Array();
function iterateArray(numbers) {
  var newNums = new Array();
  numbers.forEach(function(number) {
      //var newNums = new Array()
      newNums.push( number + 5 )
  });
  return newNums
};
