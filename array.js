'use strict';


function createArray(){
  return ["snickers", "hundred grand", "kitkat", "skittles"]
}

function addElementtoArray(array=[]) {
  
  array.push("A Christmas Story");

  return array;
}


function accessElementFromArray(array=[]){
  return array[2];
}

function replaceElementInArray(array){
  array[1] = "Carter";
  return array[1];
}

function removeElementFromArray(array){
 var updatedArray =  array.splice(2,2,"Roast Chicken");
 return array
}

// lab solution was a little different
// function removeElementFromArray(dishesArr){
//   dishesArr.splice(2, 2, "Roast Chicken");
//   return dishesArr;
// }



function iterateArray(array){
  var newNums = [];
  
  array.forEach(function(num){
    newNums.push(num + 5);
  });
  
  return newNums;
}