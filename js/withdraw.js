document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get Withdraw amount 

    const newWithdrawElement = document.getElementById('withdraw-field');
    const newWithdrawAmountString = newWithdrawElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // clear the withdraw field

    newWithdrawElement.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a number')
        return;
    }

    // get previous withdraw amount

    const previousWithdrawElement = document.getElementById('total-withdraw');
    const previousWithdrawAmountString = previousWithdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);



    //  get the  previous total balance 

    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    if (newWithdrawAmount > previousTotalBalance) {
        alert('Tor baap er bank e eto tk nai')
        return;
    }

    // set the current withdraw amount

    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    previousWithdrawElement.innerText = totalWithdrawAmount;

    // set the total balance

    const totalBalance = previousTotalBalance - newWithdrawAmount;
    totalBalanceElement.innerText = totalBalance;


})