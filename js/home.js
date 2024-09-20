document.getElementById("add-money-btn").addEventListener("click", (event) => {
  event.preventDefault();

  const addMoneyInput = document.getElementById("add-money-input").value;
  const pinInput = document.getElementById("pin-input").value;
  const currentBalance = document.getElementById("current-balance").innerText;

  if (pinInput === "1234") {
    alert("add money in your accout");
  } else {
    alert("failed to add money");
  }

  const newBalance = parseFloat(currentBalance) + parseFloat(addMoneyInput);
  document.getElementById("current-balance").innerText = newBalance;
});
