document.getElementById("diposit-btn").addEventListener("click", function () {
  const dipositField = document.getElementById("diposit-field");
  const dipositFieldValue = dipositField.value;
  const newDipositAmount = parseFloat(dipositFieldValue);
  dipositField.value = "";

  if (isNaN(newDipositAmount)) {
    alert("Please input an amount!");
    return;
  }

  const prevTotalDiposit = document.getElementById("total-diposit");
  const totalDipositField = prevTotalDiposit.innerText;
  const totalDipositAmount = parseFloat(totalDipositField);

  const currentTotalDiposit = totalDipositAmount + newDipositAmount;
  prevTotalDiposit.innerText = currentTotalDiposit;

  const totalBalanceField = document.getElementById("total-balance");
  const prevTotalBalanceField = totalBalanceField.innerText;
  const prevTotalBalance = parseFloat(prevTotalBalanceField);

  const currentTotalBalance = prevTotalBalance + newDipositAmount;
  totalBalanceField.innerText = currentTotalBalance; 
});
