'use strict';

function createArray() {
  var candybars = ["snickers", "hundred grand", "kitkat", "skittles"];
  return candybars;
  }

function addElementToArray(christmasMovies) {
  var movies = ["Home Alone", "Love Actually", "Elf"];
  movies.push("A Christmas Story");
  return movies
  }

function accessElementFromArray(states) {
  var states = ["New York", "California", "Virginia", "Louisiana", "Nevada"];
  return states[2];
  }


function replaceElementInArray(names) {
  var names = ["Joe", "Tim", "Stephen", "Sarah", "Stephanie"]
  names[1] = "Carter";
  return "Carter";
  }

function removeElementFromArray(dishes) {
  var dishes = ["Pasta Alfredo", "Grilled Salmon", "Hamburgers", "Black Bean Soup"]
  dishes.splice(2,2,"Roast Chicken")
  return dishes
  }

  function iterateArray(numArray) {
    var newNum = []
    numArray.forEach(function(number) {
    newNum.push(number+5)
  })
    return newNum;
  }
