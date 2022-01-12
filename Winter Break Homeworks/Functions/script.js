// **Functions

// Task 1: Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.


function minutesConversion (minutes) {
    parseInt(minutes);
    const secondsInMinute = 60;
    let minutesToSeconds = minutes * secondsInMinute;
    console.log(minutesToSeconds);
}

minutesConversion(10);


// Task 2: Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.


function incrementationFunction (number) {
    parseInt(number);
    let numberIncrement = number + 1;
    console.log(numberIncrement);

    console.log(typeof(number));
    console.log(typeof(numberIncrement));
}

incrementationFunction(7);


// Task 3: Convert Hours into Seconds
// Write a function that converts hours into seconds.


function hoursConversion (hours) {
    parseInt(hours);
    const secondsInHour = 3600;
    let hoursToSeconds = hours * secondsInHour;
    console.log(hoursToSeconds);
}

hoursConversion(10);


// Task 4: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.


function remainderFunction (x, y) {
    parseInt(x, y);
    let dividingNumbers = x % y;
    console.log(dividingNumbers);
}

remainderFunction(50, 5);


// Task 5: The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.


function theFarmProblem (chicken, cows, pigs) {
    parseInt(chicken, cows, pigs);
    let totalChickenLegs = chicken * 2;
    let totalCowLegs = cows * 4;
    let totalPigLegs = pigs * 4;
    let totalAnimalLegs = totalChickenLegs + totalCowLegs + totalPigLegs;

    console.log(totalAnimalLegs);
}

theFarmProblem (45, 8, 25);


// Task 6: Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of 
// characters in the first string is equal to the total number of characters in the second string.


function stringsComparasion (string1 , string2) {
    console.log(string1.length === string2.length);
}

stringsComparasion ('JS Basics', 'Still learning the basics of JavaScript');


// Task 7: Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".



function singularOrPlural (word) {
    let pluralWord = word.endsWith ('s');
    console.log(pluralWord)
}

singularOrPlural ('Cars');


// Task 8: Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.


function insensitiveComparasion (item1, item2) {
    firstComaparasion = item1 === item2;
    secondComparasion = item1.toUpperCase() === item2.toUpperCase();

    console.log(firstComaparasion) // true
    console.log(secondComparasion) // false
}


// Task 9: Convert Number to Corresponding Month Name
// Create a function that takes a number and returns its corresponding month name as a string. For example, if you're given 3 as input, 
// your function should return "March", because March is the 3rd month.


function numberToMonth (){
    let number = parseInt(prompt("Enter your number"));
    if (number === 1) {
    console.log ("January");
    }
    else if (number === 2){
    console.log("February");
    }
    else if (number === 3){
    console.log("March");
    }
    else if (number === 4){
    console.log("April");
    }
    else if (number === 5){
    console.log("May");
    }
    else if (number === 6){
    console.log("June");
    }
    else if (number === 7){
    console.log("July");
    }
    else if (number === 8){
    console.log("August");
    }
    else if (number === 9){
    console.log("September");
    }
    else if (number === 10){
    console.log("October");
    }
    else if (number === 11){
    console.log("November");
    }
    else if (number === 12){
    console.log("December");
    }
    }
    
    numberToMonth ();


