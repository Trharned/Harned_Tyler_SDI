/*
    Tyler Harned
    Full Sail University
    Scalable Data Infrastructures #01
    Functions Assignment
    July 29th, 2015
 */

// alert("The JavaScript file works!");   // TEST TO SEE IF THE JAVASCRIPT FILE LOADED CORRECTLY

// Create a random number generator that calculates either Powerball numbers or Florida Lottery numbers
// Must contain BOTH Powerball and Florida generators
// Must contain at least

//     ***     ***     ***     ***     *** //          VARIABLES           // ***     ***     ***     ***     ***     //

var firstName = prompt("Please enter your first name:"); // Create a variable for the users name.



//     ***     ***     ***     ***     *** //          FUNCTIONS           // ***     ***     ***     ***     ***     //

function validateName(name) { // Create a function to validate the firstName variable.

    var clicked = 1; // Create a count of the amount of times that the name variable was left blank

    // while loop - Test to see if the user entered blank data
    while (name === "") {

        // Run this code when the condition is true.
        name = prompt("Please do not leave this blank!\nPlease enter your first name:"); // Prompt the user to not leave the field blank.

        clicked++; // Each time the loop is ran, add 1 to the variable clicked.

        // if loop - Check to see if the user entered a blank data for ten times in a row.
        if (clicked === 10) { // If clicked is 10, run this

            alert("That's too many incorrect answers!\nMoving On."); // Alert the user that they've left the field blank too many times.
            console.log("The user has entered too many incorrect attempts. Moving on!"); // Log that data into the console.
            break; // Allows us to get out of this loop when the condition is met.

        }

    }

    return name; // Return the name argument to the main code.

}

//     ***     ***     ***     ***     *** //          MAIN CODE           // ***     ***     ***     ***     ***     //

firstName = validateName(firstName); // Catch the returned variable and set it to firstName.
console.log("Welcome to the script, " + firstName + "."); // Welcome to user to the script.