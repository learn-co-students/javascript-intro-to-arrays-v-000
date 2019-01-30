'use strict';

function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}

// *************************************

var evenNumber = new Array();
evenNumbers[0] = 2;
evenNumbers[1] = 4;
evenNumbers[3] = 8;

function addElementToArray(array){
  array.push("A Christmas Story");
  return array;
}

// **************************************

var entrepreneurs = ["Elizabeth Holmes", "Laurene Jobs", "Arianna Huffington"];
var bio = " is the co-founder and editress-in-chief of the Huffington Post";
console.log(entrepreneurs[2] + bio);

// **************************************

function accessElementFromArray(states){
  return states[2];
}

// **************************************

function replaceElementInArray(names){
  return names[1] = "Carter";
}

// **************************************

var myFish = ["angel", "clown", "drum", "mandarin", "surgeon"];
var firstRemovedFish = myFish.splice(3,1);  // removes [3] "mandarin"
var secondRemovedFish = myFish.splice(2, 1, "trumpet"); // removes [2] "drum" replace w/ "trumpet"
var removedFishes = myFish.splice(0, 2, "parrot", "anemone", "blue");
// removes two elements at [0] and replaces with three new fishes
// myFish is ["parrot", "anemone", "blue", "trumpet", "surgeon"]
// removedFishes is ["angel", "clown"]

function removeElementFromArray(array){
  var removeItems = array.splice(2, 2, "Roast Chicken");
  return array;
}

// **************************************

var letters = ["z", "y", "x", "w", "v", "u", "t", "s"];
letters.forEach(function(letter) {
  console.log("*" + letter + "*");
});
letters.forEach(function(letter, index){
  var number = index + 1;
  console.log(number + ". " + letter);
})

function iterateArray(numbers){
  var newNums = [];
  numbers.forEach(function(number, index) {
    newNums[index] = number + 5;
  })
  return newNums;
}
