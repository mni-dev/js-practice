//All needed id
const depositBtn = document.getElementById('deposit-btn')
const btcBtn = document.getElementById('btc-btn')
const ethBtn = document.getElementById('eth-btn')
const depositField = document.getElementById('deposit-field');
const btcField = document.getElementById('btc-field')
const ethField = document.getElementById('eth-field')
const balanceBox = document.getElementById('balance-box')
const btcBox = document.getElementById('btc-box')
const etcBox = document.getElementById('eth-box')

//Common Function for all Buttons and Input Fields
function getInputValue(field){
    const inputField = document.getElementById(field);
    const inputAmount = parseFloat(inputField.value);
    inputField.value = '';
    console.log(inputAmount);
}

//Common Function for sending Input-field Values
function sendInputValue(inputBox, amount){
    const mainField = document.getElementById(inputBox); 
    
} 

//Funciton call
 depositBtn.addEventListener('click', function(){
    // getInputValue('deposit-field')
    const showBalance = parseFloat(balanceBox.innerText);
    const balanceAmount = parseFloat(depositField.value);
    balanceBox.innerText = balanceAmount + showBalance;
    depositField.value = '';
})
btcBtn.addEventListener('click', function(){
    getInputValue('btc-field');
    sendInputValue('btc-box');
})
ethBtn.addEventListener('click', function(){
    getInputValue('eth-field');
    sendInputValue('eth-box');
})