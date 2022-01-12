//** Arrays

// Task 0: Create an array
// Create a function that takes an number and creates array with all numbers till that number.


function firstFunction () {
    let firstArray = [];
    for (var i = 1; i <= 777; i++) {
        firstArray.push(i);
    }
    console.log(firstArray);
}

firstFunction();


// Task 1: Return the First Element in an Array
// Create a function that takes an array and returns the first element.


function secondFunction () {
    let secondArray = ['Daisy','Mushi', 'Mario', 'Mone'];
    console.log(secondArray [0]);
}

secondFunction();


// Task 2: Reverse an Array
// Write a function to reverse an array.


function thirdFunction () {
    let thirdArray = ['Vlatko', 'Mario', 'Jana', 'Monika'];
    let reversedArray = [];
    for (let i = thirdArray.length - 1; i >= 0; i--) {
        reversedArray.push(thirdArray[i]);
    }
    return reversedArray;
    // console.log(thirdArray.reverse()); - quicker way with a JS method.
}


// Task 3: Find the Index
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function findIndex (number) {
    let fourthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numberExists = false;
    let newValue;
    for (let i = 0; i<= fourthArray.length - 1; i++) {
        if (fourthArray[i] === number) {
            numberExists = true;
            newValue = i;
        }
    }
    if (numberExists) {
        return newValue;
    } 
      else {
        return -1;
    }
}

console.log(findIndex());


// Task 4: Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.


function checkStudentName(numbers, input) {
    let isInList = false;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === input) {
            isInList = true;
        }
    }

    if (isInList) {
        return `The number ${input} is in the list`;
    } else {
        return 'There is no such number.';
    }
}

let numbersArray = [1, 2, 3, 4,6,7,8,9,10,11,,13,14,15];
let inputNumber = parseInt(prompt('Enter number:'));

console.log(checkStudentName(numbersArray, inputNumber));


// Task 5: Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.


function negatingFunction () {
    let numbersArray = [10, 15, 20, 25, 30];
    let negatedArray = [];
    // for ( i = 0; i < numbersArray.length; i++) {
    //     negatedArray.push(numbersArray[i] * -1);
    // }

    for (let number of numbersArray) {
        negatedArray.push(number * -1); 
    }
    return negatedArray;
}

console.log(negatingFunction());


// Task 6: Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.


function differenceMinMax () {
    let numbersArray = [3, 22, 35, 343, 3453];
    let min = numbersArray[1];
    let max = numbersArray[1];
    for (i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > max) {
            max = numbersArray[i];
        } else if (numbersArray[i] < min) {
            min = numbersArray[i];
        }
    }
    return max - min;
}

console.log(differenceMinMax());


// Task 7: Multiply by Length
// Create a function to multiply all values in an array by the amount of values in that array.


function multiplyFunction (){
    let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
    let arrayLength = numbersArray.length;
    let newArray = [];
    for ( let number of numbersArray){
        let newNumber = number * arrayLength;
        newArray.push(newNumber);
    }
    return newArray;
}

console.log(multiplyFunction());


// Task 8: Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.
// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.


function hurdleJump (jumperHeight) {
    let hurdleHeights = [0.95, 1.00, 105.00, 110.00];
    for ( let height of hurdleHeights) {
        if (jumperHeight >= height) {
            console.log(`The jumper can jump over the ${height} centimeter height`);

        }
          else {
            console.log(`The jumper can't jump over the ${height} centimeter height`);
        }
    }
}

hurdleJump (105.00);


// Task 9: Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.


function countdownFunction (number) {
    let countdownArray = [];
    for (i = number; i >= 0; i--) {
        countdownArray.push(i);
    }
    return countdownArray;
}

console.log(countdownFunction(50));


// Task 10: Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.


function incrementDecrement() {
    let numbersArray = [1,2,3,4,5,6,7,];
    //let evenArray = [];
    //let oddArray = [];
    let newArray = [];
    for (let number of numbersArray) {
        if (number % 2 == 0) {
            newArray.push ( number = number - 1);
        }
         else {
            newArray.push ( number = number + 1);
        }
    }
   // return `${evenArray} ${oddArray}`;
    return newArray
}

console.log(incrementDecrement());