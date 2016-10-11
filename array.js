'use strict';
function createArray()
{
  return ["snickers", "hundred grand", "kitkat", "skittles"];
}
function addElementToArray(array)
{
array.push("A Christmas Story")
return array
}

function accessElementFromArray(states)
{
return states[2];
}

function replaceElementInArray(names)
{
n=name[1];
name[1]= "Carter";
return name[1];
}

function removeElementFromArray(dishes)
{
dishes.splice(2,2);
dishes.splice(0,0,"Roast Chicken")
return dishes;
}

function iterateArray(numbers)
{
  var newNums = new Array();
  numbers.forEach(function(number,index)
{
  newNums[index]=number+5;
});
return newNums;
}
