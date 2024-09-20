document.getElementById("show-cashout-btn").addEventListener("click", () => {
  document.getElementById("cashout-form").classList.remove("hidden");
  document.getElementById("add-money-form").classList.add("hidden");
});

document.getElementById("show-add-money-btn").addEventListener("click", () => {
    document.getElementById("cashout-form").classList.add("hidden");
    document.getElementById("add-money-form").classList.remove("hidden");
});
