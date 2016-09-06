'use strict';

function createArray() {
  var candy = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
  return candy;
}

function addElementToArray(xmasMovies) {
  var xmasMovies = ['Home Alone', 'Love Actually', 'Elf'];
  xmasMovies.push('A Christmas Story');
  return xmasMovies;
}

function accessElementFromArray(states) {
  var states = ['Kansas', 'Arkansas', 'Virginia'];
  return states[2];
}

function replaceElementInArray(names) {
  var names = ['Jason', 'Ian', 'Andy'];
  names[1] = 'Carter';
  return names[1];
}

function removeElementFromArray(dishes) {
  var dishes = ['Pasta Alfredo', 'Grilled Salmon', 'Filet', 'Tilapia'];
  dishes.splice(2, 2, "Roast Chicken");
  return dishes;
}

function iterateArray(numbers) {
  var numbers = [1,2,3,4,5,6,7,8,9,10];
  var newNums = [];
  numbers.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums;
}
