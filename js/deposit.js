document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const presentDepositAmountString = depositField.value;
    const presentDepositAmount = parseFloat(presentDepositAmountString);
    depositField.value = '';

    if(isNaN(presentDepositAmount)){
        alert('Please provide valid number');
        return;
    }

    const depositAmountElement = document.getElementById('deposit-amount');
    const previousDepositTotalString = depositAmountElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    const currentDepositTotal = previousDepositTotal + presentDepositAmount;
    depositAmountElement.innerText = currentDepositTotal;
    

    //total balance
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString)

    const currentBalanceTotal = previousBalanceTotal + presentDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    console.log(previousBalanceTotalString)    
})