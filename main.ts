var expenseNameInput = document.getElementById("expense-name") as HTMLInputElement;
var expenseAmountInput = document.getElementById("expense-amount") as HTMLInputElement;
var addBtn = document.querySelector(".add-btn") as HTMLButtonElement;
var expenseList = document.querySelector(".expense-list") as HTMLDivElement;

addBtn.addEventListener("click", () => {
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = Number(expenseAmountInput.value);

    if (!expenseName || expenseAmount <= 0) {
        alert("Please enter valid expense");
        return;
    }

    const expenseItem = document.createElement("div");
    expenseItem.className = "expense-item";
    expenseItem.innerHTML = `
        <div class="expense-details">
            <div class="expense-name">${expenseName}</div>
            <div class="expense-amount">Rs. ${expenseAmount}</div>
        </div>
        <button class="remove-btn">Remove</button>
    `;

    expenseList.appendChild(expenseItem);
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
});

expenseList.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("remove-btn")) {
        const expenseItem = target.closest(".expense-item");
        expenseItem?.remove();
    }
});
