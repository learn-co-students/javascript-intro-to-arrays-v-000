//'use strict';

function createArray(){
  var candybars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
  return(candybars);
}

function addElementToArray(movies){
  movies.push('A Christmas Story');
  return(movies);
}

function accessElementFromArray(states){
  return(states[2]);
}

function replaceElementInArray(names){
  names[1] = 'Carter';
  return(names[1]);
}

function removeElementFromArray(dishes){
  dishes.splice(2,2,"Roast Chicken");
  return(dishes);
}

function iterateArray(nums){
  var newNums = new Array();
  nums.forEach(function(nums, index){
    nums[index] = nums + 5;
    newNums[index] = nums + 5;
  })
return(newNums)
}
