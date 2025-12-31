const expenseNameInput = document.getElementById("expense-name") as HTMLInputElement;
const expenseAmountInput = document.getElementById("expense-amount") as HTMLInputElement;
const addBtn = document.querySelector(".add-btn") as HTMLButtonElement;
const expenseList = document.querySelector(".expense-list") as HTMLDivElement;
const totalItemsEl = document.getElementById("total-items") as HTMLDivElement;
const totalAmountEl = document.getElementById("total-amount") as HTMLDivElement;
const clearAllBtn = document.getElementById("clear-all") as HTMLButtonElement;

function updateSummary() {
    const items = expenseList.querySelectorAll(".expense-item");
    let totalAmount = 0;

    items.forEach(item => {
        const amountText = item.querySelector(".expense-amount")!.textContent!;
        const amount = Number(amountText.replace("Rs.", "").trim());
        totalAmount += amount;
    });

    totalItemsEl.textContent = items.length.toString();
    totalAmountEl.textContent = `Rs.${totalAmount}`;
}

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
            <div class="expense-amount">Rs.${expenseAmount}</div>
        </div>
        <button class="remove-btn">Remove</button>
    `;

    expenseList.appendChild(expenseItem);
    expenseNameInput.value = "";
    expenseAmountInput.value = "";

    updateSummary();
});

expenseList.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains("remove-btn")) {
        target.closest(".expense-item")?.remove();
        updateSummary();
    }
});

clearAllBtn.addEventListener("click", () => {
    expenseList.innerHTML = "";
    updateSummary();
});

updateSummary();
