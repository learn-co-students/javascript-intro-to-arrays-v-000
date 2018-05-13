function createArray(){
 var  snackBars  = ["snickers", "hundred grand", "kitkat", "skittles"];
  
 return snackBars;
}

function addElementToArray(array){
  array.push("A Christmas Story");

 return array;
}

function accessElementFromArray(array){
  return array[2];
}

function replaceElementInArray(array){
 array.splice(1,1,'Carter');

  return array[1];
}

function removeElementFromArray(array){
  array.pop();
  array.splice(2,2,'Roast Chicken');

  return array;
}

function iterateArray(array){
var newNums = [];
 array.forEach(function(element){
 newNums.push(element+5);  
 });
 return newNums;
}