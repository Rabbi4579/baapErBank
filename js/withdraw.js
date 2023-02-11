document.getElementById('btn-widthdraw').addEventListener('click', function(){
    const widthdrawField = document.getElementById('withdraw-field');
    const newWidthdrawString = widthdrawField.value;
    const newWidthdrawAmount = parseFloat(newWidthdrawString)
    widthdrawField.value = '';
    if(isNaN(newWidthdrawAmount)){
        alert('Please provide a valid number')
        return;
    }

    //second step
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrowTotalString = withdrawTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowTotalString);

    

    
    //third step
    const presetBalance = document.getElementById('total-balance');
    const presentBalanceString = presetBalance.innerText;
    const presetBalanceTotal = parseFloat(presentBalanceString);
    
    if(newWidthdrawAmount > presetBalanceTotal){
        alert('baap er bank a ato taka nai')
        return;
    }
    const currentWithdrowTotal = previousWithdrowTotal + newWidthdrawAmount;
    withdrawTotalElement.innerText = currentWithdrowTotal;
    const currenTotalBalance = presetBalanceTotal - newWidthdrawAmount;
    presetBalance.innerText = currenTotalBalance;
    // console.log(presetBalanceTotal)

   
})