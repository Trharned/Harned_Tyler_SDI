/*
    Tyler Harned
    Full Sail University
    GoToTraining Week 4
    July 29th, 2015
 */

//alert("JavaScript Works!");

//     ***     ***     ***     ***     *** //          VARIABLES           // ***     ***     ***     ***     ***     //
var myName = prompt("Please enter your name:");
var myRandom;

//     ***     ***     ***     ***     *** //          FUNCTIONS           // ***     ***     ***     ***     ***     //
function nameValidation(firstName) {

    var timesClicked = 1;

    // while loop
    while (firstName === "") {

        firstName = prompt("Do not leave this blank!\nPlease enter your name:");

        timesClicked ++;

        if (timesClicked === 10) {

            alert("You've entered an invalid answer too many times!");
            console.log("You've entered an invalid answer too many times!");
            // this breaks out of the loop
            break;

        }

    }

    // returns the value of firstName back to the main code and the returned value variable
    return firstName;

}

// function to generate random numbers
function randomNumGen(min, max, num) {

    var randomArray = [];
    // Math is an object - has properties and methods
    // Math.random() * (max - min) + min
    // Math.round() = round to the nearest whole value

    for (var i = 0; i < num; i++) {
        var randomNum = Math.random() * (max - min) + min;
        randomArray[i] = Math.round(randomNum);
    }
    return randomArray;

}

//     ***     ***     ***     ***     *** //          MAIN CODE           // ***     ***     ***     ***     ***     //
myName = nameValidation(myName);
console.log("Hello, " + myName + ". Welcome!");

myRandom = randomNumGen(5, 25, 5);
console.log(myRandom);

myRandom = randomNumGen(100, 1000, 10);
console.log(myRandom);