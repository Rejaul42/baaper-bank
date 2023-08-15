document.getElementById('btn-deposit').addEventListener('click', function(){

    // get new deposit amount 

    const depositFieldElement = document.getElementById('deposit-field');
    const newDepositAmountString = depositFieldElement.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // get previous deposit amount 

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotalElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    // set total deposit amount 

    const totalDepositAmount = newDepositAmount + previousDepositAmount;
    depositTotalElement.innerText = totalDepositAmount;

    // clear deposit field

    depositFieldElement.value = '';

    //  get previous total balance

    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    // Set total balance
    
    const totalBalance = previousTotalBalance + newDepositAmount;
    totalBalanceElement.innerText = totalBalance;
})