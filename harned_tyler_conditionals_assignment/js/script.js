/*
 Tyler Harned
 SDI Section 01
 Conditionals Assignment
 "Bar Time!"
 */

// THE VARIABLES
var myName = "Tyler Harned";                   // Created A Name Variable (STRING)
var myAge = prompt("Please enter your age: "); // Created A Age Variable
var drinker = "False";                         // Created A Drinker Variables (Yes or No Question) (ESCAPE VARIABLE)
var drunk = false;                             // Created A Drunk Variable (BOOLEAN VARIABLE)
var drinkingAge = 21;                          // Created a Drinking Age Variable (NUMBER VARIABLE)

// OUTPUTS
console.log("My name is " + myName + "."); // Tell the console who I am
console.log("My age is " + myAge + ".");   // Tell the console my age
console.log("It is " + drinker + " that I am a drinker."); // Tell the console if I am a drinker
console.log("It is " + drunk + " that I am drunk."); // Tell the console if you're drunk

// TEST VARIABLE
validAge = myAge - drinkingAge; // Do an operation to see if the user is old enough to drink.

// CONDITIONS TO RUN IF TRUE OR FALSE
if(validAge >= 21) { // Test to see if the user is above 21
    alert("It looks like you can drink!."); // Let the user know that they can drink.
    console.log("The user can drink, for they are " + myAge + " years old."); // Log that into the console.

    ready = confirm("Are you ready to go? (OK = Yes, CANCEL = No"); // Ask the user if they wish to continue or not. If not, exit.

    if (ready === true) { // Run if the user is ready.

        // Code to run if the condition "READY" is true
        alert("Looks like you're ready to begin!"); // Alert the user
        money = prompt("Please enter how much money you have:\nOnly use numbers!"); // Create a money variable
        console.log(myName + "has $" + money + "."); // Tell the console how much money I have

        if (money >= 10) { // Code to run if the user has more than $10
            alert("Great! It looks like you have enough money."); // Alert the user that they have enough money
            drinkCost = prompt("Please type in how much drinks cost: \nOnly use numbers!"); // Create a Drink Cost Variable
            console.log("Drinks cost $" + drinkCost + " a piece."); // Tell the user how much drinks cost
            totalDrinks = money / drinkCost; // Create a equation to determine how many drinks they can get
            console.log(myName + " can drink a total of " + totalDrinks + " drinks."); // Tell the user how many drinks the user can get
            alert(myName + ", you can drink a total of " + totalDrinks + " drinks."); // Alert the user how many drinks they can have.
            alert("Hope you enjoyed!\nRefresh the browser to reload the script.");

            if (totalDrinks <= 0) {
                alert("It looks like you don't have enough to party!\nTime to go home!"); // Alert the user that they are broke.
                console.log("The user cannot get enough drinks. They need to come back another time with more money."); // Tell the console the above message
            }

        } else {
            alert("It looks like you don't have that much money.\nIt will not be enough fun!"); // Condition to run if the statement is false.
            alert("Time to go home!"); // Alert the user that they need to go home.
            console.log("The user doesn't have enough money. Time to go home!"); // Log that into the console.
        }


    } else {
        alert("It looks like you're not ready to go.\nPlease refresh the browser and click OK instead."); // Alert the user that they didn't answer correctly.
        console.log("Ending Program. // REFRESH BROWSER TO RESTART"); // Log that into the console.
    }
} else {
    yearsUntil = drinkingAge - myAge; // If the condition is false, do this calculation.
    alert("It appears, " + myName + " that you're not old enough to drink!\nYou must be "+drinkingAge+" in order to drink. You're only "+myAge+".\nCome back in "+yearsUntil+" years."); // Alert the user that they cannot drink and when to come back.
    console.log("The user cannot drink. They'll need to come back in "+yearsUntil+" years."); // Log that into the console.
}

// END SCRIPT