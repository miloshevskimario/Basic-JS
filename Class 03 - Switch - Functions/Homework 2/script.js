// Human Years to Dog Years

function firstConversion() {
     let humanAge = prompt ('Enter your age: ');
     const dogYears = humanAge / 7;
     console.log (dogYears);
}

firstConversion();

// Dog Years to Human Years

function secondConversion() {
    let dogAge = prompt ("Enter your dog's age: ");
    const humanYears = dogAge * 7;
    console.log (humanYears);
}

secondConversion();
