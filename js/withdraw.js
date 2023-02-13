// javaScript
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawFieldValue = withdrawField.value;
  const newWithdrawAmount = parseFloat(withdrawFieldValue);
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please input an amount!");
    return;
  }

  const prevTotalWithdraw = document.getElementById("total-withdraw");
  const totalWithdrawField = prevTotalWithdraw.innerText;
  const prevTotalWithdrawAmount = parseFloat(totalWithdrawField);

  const totalBalanceField = document.getElementById("total-balance");
  const prevTotalBalanceField = totalBalanceField.innerText;
  const prevTotalBalance = parseFloat(prevTotalBalanceField);

  if (newWithdrawAmount > prevTotalBalance) {
    alert("Insufficient Balance");
    return;
  }

  const currentTotalWithdraw = prevTotalWithdrawAmount + newWithdrawAmount;
  prevTotalWithdraw.innerText = currentTotalWithdraw;

  const currentTotalBalance = prevTotalBalance - newWithdrawAmount;
  totalBalanceField.innerText = currentTotalBalance;
});
