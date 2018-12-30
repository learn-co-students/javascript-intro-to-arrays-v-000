'use strict';

function createArray() {
  return new Array("snickers", "hundred grand", "kitkat", "skittles");
}

function addElementToArray(arr) {
   arr.push("A Christmas Story");
   return arr;
}

function accessElementFromArray(statesArray) {
  return(statesArray[2]);
}

function replaceElementInArray(namesArray) {
  return(namesArray[1]= "Carter");
}

function removeElementFromArray(dishesArray) {
  dishesArray.splice(2, 3, "Roast Chicken");
  return dishesArray;
}

function iterateArray(numbers) {
  var newNums = [];
  numbers.forEach(function(number) {
    newNums.push(number + 5); 
  });
  return newNums;
}

describe('#iterateArray', function(){
  it("should iterate over an original array to create a new array with updated elements from the original array'", function(){
      expect(iterateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  });

});