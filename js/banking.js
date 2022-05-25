//get input value
function getInput(inputID) {
  const inputField = document.getElementById(inputID);
  const amount = parseFloat(inputField.value);
  inputField.value = "";
  return amount;
}

//deposit handle
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // get deposit amount
    const depositAmount = getInput("deposit-input");
    //display deposit amount
    const depositHolder = document.getElementById("deposit-holder");
    const previousDepositedAmount = parseFloat(depositHolder.innerText);
    const newDepositedAmount = previousDepositedAmount + depositAmount;
    depositHolder.innerText = newDepositedAmount;
    //update balance
    const balanceHolder = document.getElementById("balance-holder");
    const previousBalance = parseFloat(balanceHolder.innerText);
    const newBalance = previousBalance + depositAmount;
    balanceHolder.innerText = newBalance;
  });

//withdraw handle
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //get withdraw amount
    const withdrawAmount = getInput("withdraw-input");
    //display withdraw amount
    const withdrawHolder = document.getElementById("withdraw-holder");
    const previousWithdrawAmount = parseFloat(withdrawHolder.innerText);
    const newWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    withdrawHolder.innerText = newWithdrawAmount;
    //update balance
    const balanceHolder = document.getElementById("balance-holder");
    const previousBalance = parseFloat(balanceHolder.innerText);
    const newBalance = previousBalance - withdrawAmount;
    balanceHolder.innerText = newBalance;
  });
