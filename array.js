"use strict";

function createArray() {
    var snacks = ["snickers", "hundred grand", "kitkat", "skittles"];
    return snacks;
}

function addElementToArray(array) {
    var myArray = array;
    myArray.push("A Christmas Story");
    return myArray;
}

function accessElementFromArray(states) {
    return states[2];
}

function replaceElementInArray(names) {
    names[1] = "Carter";
    var second = names[1];
    return second;
}

function removeElementFromArray(dishes) {
    var newDishes = dishes.splice( 0, 2 );
    newDishes.push("Roast Chicken");
    return newDishes;
}

function iterateArray(numArray) {
    var newNums = [];
    numArray.forEach(function(number) {
      var num = number + 5;
      newNums.push(num);
    });
  return newNums;
}