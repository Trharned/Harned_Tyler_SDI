/*
 Tyler Harned
 Full Sail University
 SDI 01
 Expressions Worksheet - Slice of Pie II
 July 11th, 2015
 */

/*
 At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?

 Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)
 Given:

 Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.
 Result Variables:

 Number of slices Sparky gets to eat.
 Result to Print:

 “Sparky got X slices of pizza.”
 */

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
console.log("Each person ate "+math.round(results)+" slices of pizza at the party.");