'use strict';

function createArray() {

	return ["snickers", "hundred grand", "kitkat", "skittles"];

}

function addElementToArray() {

	var array = ['Home Alone', 'Love Actually', 'Elf']
	array.push("A Christmas Story");
	return array;
}

function  accessElementFromArray(array){
	return array[2];
}

function replaceElementInArray(array) {
	var replace = array[1] = "Carter"
	return replace

}

function removeElementFromArray(dishes) {
	var remove = dishes.splice(2,2,"Roast Chicken");
	return dishes;
}


 

function iterateArray(numbers){
	var newNums = [];
	numbers.forEach(function(number) {
		newNums.push(number + 5);
	})
	return newNums;
}