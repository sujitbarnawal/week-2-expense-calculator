var expenseNameInput = document.getElementById("expense-name");
var expenseAmountInput = document.getElementById("expense-amount");
var addBtn = document.querySelector(".add-btn");
var expenseList = document.querySelector(".expense-list");
var totalItemsEl = document.getElementById("total-items");
var totalAmountEl = document.getElementById("total-amount");
var clearAllBtn = document.getElementById("clear-all");
function updateSummary() {
    var items = expenseList.querySelectorAll(".expense-item");
    var totalAmount = 0;
    items.forEach(function (item) {
        var amountText = item.querySelector(".expense-amount").textContent;
        var amount = Number(amountText.replace("Rs.", "").trim());
        totalAmount += amount;
    });
    totalItemsEl.textContent = items.length.toString();
    totalAmountEl.textContent = "Rs.".concat(totalAmount);
}
addBtn.addEventListener("click", function () {
    var expenseName = expenseNameInput.value.trim();
    var expenseAmount = Number(expenseAmountInput.value);
    if (!expenseName || expenseAmount <= 0) {
        alert("Please enter valid expense");
        return;
    }
    var expenseItem = document.createElement("div");
    expenseItem.className = "expense-item";
    expenseItem.innerHTML = "\n        <div class=\"expense-details\">\n            <div class=\"expense-name\">".concat(expenseName, "</div>\n            <div class=\"expense-amount\">Rs.").concat(expenseAmount, "</div>\n        </div>\n        <button class=\"remove-btn\">Remove</button>\n    ");
    expenseList.appendChild(expenseItem);
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
    updateSummary();
});
expenseList.addEventListener("click", function (event) {
    var _a;
    var target = event.target;
    if (target.classList.contains("remove-btn")) {
        (_a = target.closest(".expense-item")) === null || _a === void 0 ? void 0 : _a.remove();
        updateSummary();
    }
});
clearAllBtn.addEventListener("click", function () {
    expenseList.innerHTML = "";
    updateSummary();
});
// Initial calculation (for default item in HTML)
updateSummary();
