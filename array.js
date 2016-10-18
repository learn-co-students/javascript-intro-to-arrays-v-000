'use strict';

function createArray() {
	return ["snickers", "hundred grand", "kitkat", "skittles"];
}

function addElementToArray(array) {
	array.push("A Christmas Story");
	return array;
}

function accessElementFromArray(array) {
	return array[2];
}

function replaceElementInArray(array) {
	return array[2] = "Carter";

}

function removeElementFromArray(array) {
	array.splice(2, 2, "Roast Chicken");
	return array;
}

function iterateArray(array) {
	var new_array = [];
	array.forEach(function(number){
		new_array.push(number + 5);
	});
	return new_array;
}