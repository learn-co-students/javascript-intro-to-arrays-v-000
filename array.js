'use strict';

function createArray() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"];
  return array;
}
 function addElementToArray(array) {
   array.push("A Christmas Story");
   return array;
 }
function accessElementFromArray(states) {
  return states[2];
}
function replaceElementInArray(names) {
  names[1] = "Carter";
  return names[1];
}
function removeElementFromArray(dishes) {
  dishes.splice(2, 2, 'Roast Chicken');
  return dishes;
}
function iterateArray(nums) {
  var newNums = [];
  nums.forEach(function(num) {
    newNums.push(num + 5)
  })
  return newNums;
}
