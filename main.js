var expenseNameInput = document.getElementById("expense-name");
var expenseAmountInput = document.getElementById("expense-amount");
var addBtn = document.querySelector(".add-btn");
var expenseList = document.querySelector(".expense-list");
addBtn.addEventListener("click", function () {
    var expenseName = expenseNameInput.value.trim();
    var expenseAmount = Number(expenseAmountInput.value);
    if (!expenseName || expenseAmount <= 0) {
        alert("Please enter valid expense");
        return;
    }
    var expenseItem = document.createElement("div");
    expenseItem.className = "expense-item";
    expenseItem.innerHTML = "\n        <div class=\"expense-details\">\n            <div class=\"expense-name\">".concat(expenseName, "</div>\n            <div class=\"expense-amount\">Rs. ").concat(expenseAmount, "</div>\n        </div>\n        <button class=\"remove-btn\">Remove</button>\n    ");
    expenseList.appendChild(expenseItem);
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
});
expenseList.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("remove-btn")) {
        var expenseItem = target.closest(".expense-item");
        expenseItem === null || expenseItem === void 0 ? void 0 : expenseItem.remove();
    }
});
