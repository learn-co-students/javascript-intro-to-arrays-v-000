'use strict';

function createArray() {
  var a = ["snickers", "hundred grand", "kitkat", "skittles"];
  return a;
}

function addElementToArray(arr) {
  arr.push("A Christmas Story");
  return arr;
}

function accessElementFromArray(arr) {
  return arr[2];
}

function replaceElementInArray(arr) {
  arr[2] = "Carter";
  return arr[2];
}

function removeElementFromArray(arr) {
  arr.splice(2,2,"Roast Chicken")
  return arr;
}

function iterateArray(nums) {
  var newNums = [];
  nums.forEach(function(num) {
    newNums.push(num + 5);
  });
  return newNums;
}
