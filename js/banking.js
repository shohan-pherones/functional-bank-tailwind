//get input value
function getInput(inputID) {
  const inputField = document.getElementById(inputID);
  const amount = parseFloat(inputField.value);
  inputField.value = "";
  return amount;
}

//display amount
function displayAmount(amount, amountHolderID) {
  const amountHolder = document.getElementById(amountHolderID);
  const previousAmount = parseFloat(amountHolder.innerText);
  const newAmount = previousAmount + amount;
  amountHolder.innerText = newAmount;
}

//deposit handle
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // get deposit amount
    const depositAmount = getInput("deposit-input");
    //display deposit amount
    displayAmount(depositAmount, "deposit-holder");
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
    displayAmount(withdrawAmount, "withdraw-holder");
    //update balance
    const balanceHolder = document.getElementById("balance-holder");
    const previousBalance = parseFloat(balanceHolder.innerText);
    const newBalance = previousBalance - withdrawAmount;
    balanceHolder.innerText = newBalance;
  });
