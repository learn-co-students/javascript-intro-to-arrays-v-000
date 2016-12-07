function createArray() {
  var treats = ["snickers", "hundred grand", "kitkat", "skittles"];
  return treats;
}

function addElementToArray(array) {
  array.push("A Christmas Story");
  return array; 
}

function accessElementFromArray(states_arr) {
  return states_arr[2];
}

function replaceElementInArray(names_arr) {
  names_arr[1] = "Carter";
  return names_arr[1];
}

function removeElementFromArray(dishes_arr) {
  dishes_arr.splice(2, 2, "Roast Chicken");
  return dishes_arr;
}

function iterateArray(numArray) {
  var newNums = new Array();
  numArray.forEach(function(number) {
    newNums.push(number + 5);
  });
  return newNums
}