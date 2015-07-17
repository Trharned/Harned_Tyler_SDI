/*
 Tyler Harned
 Full Sail University
 SDI 01
 Expressions Assignment
 July 15th, 2015
 */

// Create a calculator that determines how many treats a user's pet eats in weeks, months, or years.

// VARIABLES
var myName; // Create a variable for the user's first name.
var myAnimal; // Create a variable to determine if cat or dog
var dailyTreats; // Used to determine how many treats the user's cat/dog gets a day
var testMethod; // Will be used to test for either weekly, monthly, or yearly tests
var weeklyResults; // Used for the final results of weekly
var monthlyResults; // used for the final results of monthly
var yearlyResults; // Used for the final results of yearly.
var weeklyEndResult; // Used for the weekly calculations
var monthlyEndResults; // Used for the monthly calculations
var yearlyEndResults; // Used for the yearly calculations

// PROMPTS
myName = prompt("Please type in your first name: "); // Gather information about the user.
console.log("The user today is "+myName+"."); // Log the results into the console.

alert("Today, "+myName+", we shall test to see how many treats your cat or dog eats weekly, monthly, or yearly."); // Let the user know what we're here for

myAnimal = prompt("To start, what type of pet do you have? "); // Ask the user what type of animal they have. Set as a variable.
console.log("Today, we will be testing to see how many treats "+myName+"'s "+myAnimal+" eats!"); // Log that into the console.

// END GREETING MESSAGE / PET INFORMATION

alert("Great! We'll first need some basic information about your "+myAnimal+"."); // Alert the user of what's going on next.

dailyTreats = prompt("To start off, how many treats does your "+myAnimal+" eat a day?"); // Ask the user how many treats their pet eats a day.
console.log(myName+"'s "+myAnimal+" eats "+dailyTreats+" treats daily."); // Log that information to the console.

// END DAILY TREATS

testMethod = prompt("We'll need to see how you want to test this.\nPlease enter weekly, monthly, or yearly: "); // See how the user wants to test and store it
alert("Great! So we will test "+testMethod+" then."); // Alert the user what they selected.
console.log("It appears that "+myName+" wants to test "+testMethod+"."); // Log that information into the console.

// END TEST METHOD