/*
Tyler Harned

Website JavaScript file

This is for testing purposes, anything learned during my
courses at Full Sail University will go towards finishing
and creating my very own personal website. Also new ideas
will also be tested to see how they function.
 */

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

// PROMPTS
myName = prompt("Please type in your first name: "); // Gather information about the user.
alert("Greeting, "+myName+"!"); // Greet the user
console.log("The user today is "+myName+"."); // Log the results into the console.

alert("Today, "+myName+", we shall test to see how many treats your cat or dog eats weekly, monthly, or yearly."); // Let the user know what we're here for

myAnimal = prompt("To start, what type of animal shall we test for?\nType either Cat or Dog: ");
console.log("Today, we will be testing to see how many treats "+myName+"'s "+myAnimal+" eats!");

if(myAnimal === "Cat" || "cat" || "CAT" || "Dog" || "dog" || "DOG"){
    alert("Great! We shall test for "+myAnimal+" to see how many treats he/she eats!");
    dailyTreats = prompt("Please enter how many treats your "+myAnimal+" eats daily: ");
    if(isNaN(dailyTreats)){
        dailyTreats = prompt("Please only use numbers!\nHow many treats does your "+myAnimal+" eat daily?");
    }
    console.log(myName+"'s "+myAnimal+" eats "+dailyTreats+" treats a day.");
}else{
    alert("Great! We shall test for "+myAnimal+" to see how many treats he/she eats!");
    dailyTreats = prompt("Please enter how many treatas your "+myAnimal+" eats daily: ");
    if(isNaN(dailyTreats)){
        dailyTreats = prompt("Please only use numbers!\nHow many treats does your "+myAnimal+" eat daily?");
    }
    console.log(myName+"'s "+myAnimal+" eats "+dailyTreats+" treats a day.");
}

alert("Great! So we will be testing to see how many your "+myAnimal+" eats either weekly, monthly, or yearly!");
testMethod = prompt("Shall we test for weekly, monthly, or yearly? ");

if(testMethod = "weekly" || "Weekly" || "WEEKLY"){
    alert("Great! We'll see how many treats your "+myAnimal+" eats in weeks!");
    weeklyResults = prompt("Please enter how many weeks you wish to test for: ");
    weeklyEndResult = weeklyResults * 7 * dailyTreats;
    alert("It appears that your "+myAnimal+" eats a total of "+weeklyEndResult+" treats in "+weeklyResults+" weeks!");
    console.log(myName+"'s "+myAnimal+" eats a total of "+weeklyEndResult+" treats during the "+weeklyResults+" week period.");
}

if(testMethod = "monthly" || "Monthly" || "MONTHLY"){
    alert("Great! We'll see how many treats your "+myAnimal+" eats months!");
    weeklyResults = prompt("Please enter how many weeks you wish to test for: ");
    weeklyEndResult = weeklyResults * 7 * dailyTreats;
    alert("It appears that your "+myAnimal+" eats a total of "+weeklyEndResult+" treats in "+weeklyResults+" weeks!");
    console.log(myName+"'s "+myAnimal+" eats a total of "+weeklyEndResult+" treats during the "+weeklyResults+" week period.");
}
// MATH EQUATIONS TO TAKE NOTE OF
// PEMDAS = ()'s, Exponents, /, +, -
