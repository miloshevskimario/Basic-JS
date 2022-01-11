
function cashWithdraw () {
    let accountBalance = 25000;
    let withdrawAmount = prompt('Please enter the amount you wish to withdraw');
    if (withdrawAmount <= 25000) {
        console.log('Please take your cash!');
    } else if (withdrawAmount >= 25000) {
        console.log('You do not have enough money!');
    }

    let moneyLeft = accountBalance - withdrawAmount;
    if (withdrawAmount < accountBalance) {
    console.log('You withdrew ' + withdrawAmount + '$' + ' Your current balance is ' + moneyLeft + '$');
    }
}

cashWithdraw ();