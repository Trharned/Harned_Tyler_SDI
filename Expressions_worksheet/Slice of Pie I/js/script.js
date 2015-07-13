/*
 Tyler Harned
 Full Sail University
 SDI 01
 Expressions Worksheet - Slice of Pie I
 July 11th, 2015
 */

// Create a calculator to determine how many slices of pie each person will get at a party

//Create the variable's for each parts needed
// Number of slices per pizza
// Number of people at the party
// Number of pizzas ordered.

// Create a variable to hold how many slices there is in a pizza
var slicesPer = prompt("How many slices are in a pizza?");
// Log that into the console.
console.log("Each pizza holds "+slicesPer+" slices of pizza.");

// Create a variable to hold how many people are at the party.
var totalPeople = prompt("How many people are at the party?");
// Log that into the console.
console.log("There are a total of "+totalPeople+" at the party.");

// Create a variable to hold how many pizzas where ordered at the party.
var totalPizzas = prompt("How many pizzas total where ordered?");
// Log that into the console.
console.log("There where a total of "+totalPizzas+" ordered.");

// Create the calculations to determine the results.
var results = slicesPer * totalPizzas / totalPeople;
// Log that into the console. 
console.log("Each person ate "+results+" slices of pizza at the party.");