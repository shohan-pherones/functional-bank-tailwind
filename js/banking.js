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

//get current balance
function getCurrentBalance() {
  const balanceHolder = document.getElementById("balance-holder");
  const previousBalance = parseFloat(balanceHolder.innerText);
  return previousBalance;
}

//update balance
function updateBalance(amount, isAdd) {
  const balanceHolder = document.getElementById("balance-holder");
  const previousBalance = getCurrentBalance();
  if (isAdd == true) {
    const newBalance = previousBalance + amount;
    balanceHolder.innerText = newBalance;
  } else {
    const newBalance = previousBalance - amount;
    balanceHolder.innerText = newBalance;
  }
}

//deposit handle
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // get deposit amount
    const depositAmount = getInput("deposit-input");
    if (depositAmount > 0) {
      //display deposit amount
      displayAmount(depositAmount, "deposit-holder");
      //update balance
      updateBalance(depositAmount, true);
    } else {
      alert("Please enter the right amount!");
    }
  });

//withdraw handle
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    //get withdraw amount
    const withdrawAmount = getInput("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
      //display withdraw amount
      displayAmount(withdrawAmount, "withdraw-holder");
      //update balance
      updateBalance(withdrawAmount, false);
    } else {
      alert("Please enter the right amount!");
    }
  });
