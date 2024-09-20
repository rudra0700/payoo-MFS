document.getElementById("cashout-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const cashoutAmount = document.getElementById("cashout-input").value;
  const cashoutPin = document.getElementById("cashout-pin-input").value;

  const currentBalance = document.getElementById("current-balance").innerText;

  if (cashoutPin === "1234") {
    const newBalance = parseFloat(currentBalance) - parseFloat(cashoutAmount);
    document.getElementById("current-balance").innerText = newBalance;
  } else {
    alert("failed to cashout");
  }
});
