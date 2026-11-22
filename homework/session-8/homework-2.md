# Homework 02: Quick Budget & Expense Logger ("The Ledger")

> **Deliverable Files:** `budget.html` and `budget.js`  
> **Topic:** Compound In-Memory State, Numeric Input Parsing (`Number()`), Dynamic Status Styling (Positive/Negative/Zero Colors), Event Delegation on Transaction Records, and Running Totals Calculation  
> **Prerequisites:** Session 07 (DOM Selection & Safe Updates), Session 08 (Event Listeners & State)  
> **Submission:** Commit and push `homework/session-8/budget.html` and `homework/session-8/budget.js` to your repository before Session 09.

---

## 🎯 The Mission

Welcome to the **Quick Budget & Expense Logger** project! 💰

Financial applications require rock-solid arithmetic, real-time balance tracking, and clear visual indicators of monetary health. Scraping dollar values from HTML spans produces catastrophic rounding and parsing errors.

Your mission is to build `budget.js` using a **robust in-memory state model**:
1. Store all ledger transactions as an array of structured objects in memory:
   ```javascript
   { id: 1, title: "Freelance Design", amount: 450.00, type: "income", category: "work" }
   ```
2. Parse user-submitted numbers safely using `Number()` with defensive validation (`amount > 0` and `!isNaN(amount)`).
3. Compute total income, total expenses, and the net balance dynamically.
4. Dynamically adjust the net balance color: **Green** if positive, **Red** if negative, and **Neutral** if zero.
5. Render transaction history rows safely and allow users to delete any transaction via **Event Delegation**, automatically recalculating running balances.

---

## 💻 Starter Templates

### 1. `budget.html`
Save this file into `homework/session-8/budget.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Session 08 — Quick Budget & Expense Logger</title>
  <style>
    :root {
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --border: #e2e8f0;
      --accent: #4338ca;
      --green: #15803d;
      --green-soft: rgba(21, 128, 61, 0.1);
      --red: #dc2626;
      --red-soft: rgba(220, 38, 38, 0.1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 48px 24px;
    }

    .container {
      width: 100%;
      max-width: 600px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .app-header {
      text-align: center;
    }
    .app-header h1 {
      font-size: 30px;
      font-weight: 800;
      margin-bottom: 6px;
    }
    .app-header p {
      color: var(--muted);
      font-size: 15px;
    }

    /* Summary Metric Cards */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    .metric-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 18px 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.04);
    }
    .metric-label {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--muted);
    }
    .metric-value {
      font-size: 24px;
      font-weight: 800;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    }
    .metric-value.positive { color: var(--green); }
    .metric-value.negative { color: var(--red); }

    /* Main Card Form */
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.06);
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-title {
      font-size: 18px;
      font-weight: 800;
      color: var(--text);
    }

    .budget-form {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .form-row {
      display: flex;
      gap: 12px;
    }
    .input-field {
      flex: 1;
      padding: 10px 14px;
      border: 1.5px solid var(--border);
      border-radius: 10px;
      font-size: 15px;
      outline: none;
      transition: border-color 0.15s ease;
    }
    .input-field:focus {
      border-color: var(--accent);
    }

    .type-selector {
      display: flex;
      gap: 10px;
    }
    .type-btn {
      flex: 1;
      padding: 10px;
      border-radius: 10px;
      border: 1.5px solid var(--border);
      background: var(--bg);
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      text-align: center;
      transition: all 0.15s ease;
    }
    .type-btn.active-income {
      border-color: var(--green);
      background: var(--green-soft);
      color: var(--green);
    }
    .type-btn.active-expense {
      border-color: var(--red);
      background: var(--red-soft);
      color: var(--red);
    }

    .btn-submit {
      background: var(--accent);
      color: #ffffff;
      border: none;
      border-radius: 10px;
      padding: 12px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: opacity 0.15s ease;
    }
    .btn-submit:hover {
      opacity: 0.9;
    }

    /* History List */
    .history-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
      padding-bottom: 10px;
    }
    .history-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--text);
    }

    .transaction-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .transaction-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      border-left: 5px solid var(--muted);
    }
    .transaction-item.income { border-left-color: var(--green); }
    .transaction-item.expense { border-left-color: var(--red); }

    .trans-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .trans-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--text);
    }
    .trans-category {
      font-size: 12px;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .trans-right {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .trans-amount {
      font-size: 16px;
      font-weight: 800;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    }
    .trans-amount.income { color: var(--green); }
    .trans-amount.expense { color: var(--red); }

    .btn-delete-trans {
      background: transparent;
      border: none;
      color: var(--muted);
      cursor: pointer;
      font-size: 15px;
      padding: 4px 6px;
      border-radius: 6px;
      transition: all 0.15s ease;
    }
    .btn-delete-trans:hover {
      color: var(--red);
      background: var(--red-soft);
    }

    .empty-state {
      text-align: center;
      padding: 24px 0;
      color: var(--muted);
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="app-header">
      <h1>Quick Budget Ledger</h1>
      <p>Session 08 · State-Driven Monetary Calculations</p>
    </header>

    <!-- Top Metrics Overview -->
    <section class="summary-grid">
      <div class="metric-card">
        <span class="metric-label">Total Income</span>
        <span id="total-income" class="metric-value positive">$0.00</span>
      </div>
      <div class="metric-card">
        <span class="metric-label">Total Expenses</span>
        <span id="total-expense" class="metric-value negative">$0.00</span>
      </div>
      <div class="metric-card">
        <span class="metric-label">Net Balance</span>
        <span id="net-balance" class="metric-value">$0.00</span>
      </div>
    </section>

    <!-- Add Transaction Card -->
    <main class="card">
      <h2 class="form-title">Record New Transaction</h2>
      <form id="transaction-form" class="budget-form">
        <div class="type-selector">
          <button type="button" class="type-btn active-income" data-type="income">Income (+)</button>
          <button type="button" class="type-btn" data-type="expense">Expense (-)</button>
        </div>

        <div class="form-row">
          <input
            id="desc-input"
            class="input-field"
            type="text"
            placeholder="Description (e.g. Freelance, Groceries)"
            required
            autocomplete="off"
          />
          <input
            id="amount-input"
            class="input-field"
            type="number"
            step="0.01"
            min="0.01"
            placeholder="Amount ($)"
            required
          />
        </div>

        <div class="form-row">
          <select id="category-select" class="input-field">
            <option value="General">General</option>
            <option value="Work & Freelance">Work & Freelance</option>
            <option value="Food & Dining">Food & Dining</option>
            <option value="Utilities & Bills">Utilities & Bills</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          <button id="add-trans-btn" class="btn-submit" type="submit">Add Entry</button>
        </div>
      </form>
    </main>

    <!-- Transaction History Card -->
    <section class="card">
      <div class="history-header">
        <h2 class="history-title">Transaction History</h2>
        <span id="trans-count" class="metric-label">0 Records</span>
      </div>
      <ul id="transaction-list" class="transaction-list"></ul>
    </section>
  </div>

  <script src="./budget.js"></script>
</body>
</html>
```

---

### 2. `budget.js`
Save this file into `homework/session-8/budget.js` and complete the labeled tasks:

```javascript
/**
 * Session 08 - Homework 02: Quick Budget & Expense Logger
 * Deliverable: budget.js
 */

// ─── Step 1: In-Memory State Model ────────────────────────────────────────────
let transactions = [
  { id: 1, title: "Monthly Freelance Retainer", amount: 1200.0, type: "income", category: "Work & Freelance" },
  { id: 2, title: "Grocery Market", amount: 145.5, type: "expense", category: "Food & Dining" },
  { id: 3, title: "Fiber Internet Subscription", amount: 65.0, type: "expense", category: "Utilities & Bills" },
];

let selectedType = "income"; // Options: 'income' | 'expense'

// ─── Step 2: DOM Element Cache ───────────────────────────────────────────────
const form = document.querySelector("#transaction-form");
const descInput = document.querySelector("#desc-input");
const amountInput = document.querySelector("#amount-input");
const categorySelect = document.querySelector("#category-select");
const typeButtons = document.querySelectorAll(".type-btn");

const totalIncomeEl = document.querySelector("#total-income");
const totalExpenseEl = document.querySelector("#total-expense");
const netBalanceEl = document.querySelector("#net-balance");
const transactionListEl = document.querySelector("#transaction-list");
const transCountEl = document.querySelector("#trans-count");

// ─── Step 3: Pure State Helper Functions ─────────────────────────────────────

/**
 * Task 3A: formatMoney(amount)
 * - Returns formatted dollar string with 2 decimal places.
 * - Example: formatMoney(1200) -> "$1200.00"
 */
function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

/**
 * Task 3B: calculateTotals()
 * - Computes { income, expense, balance } from the transactions array.
 * - income: sum of amounts where type === 'income'
 * - expense: sum of amounts where type === 'expense'
 * - balance: income - expense
 */
function calculateTotals() {
  let income = 0;
  let expense = 0;

  for (const t of transactions) {
    if (t.type === "income") {
      income += t.amount;
    } else if (t.type === "expense") {
      expense += t.amount;
    }
  }

  const balance = income - expense;
  return { income, expense, balance };
}

/**
 * Task 3C: addTransaction(title, amount, type, category)
 * - Creates a transaction object and pushes to `transactions` state.
 */
function addTransaction(title, amount, type, category) {
  const newEntry = {
    id: Date.now(),
    title: title.trim(),
    amount: Number(amount),
    type: type,
    category: category,
  };

  transactions.unshift(newEntry); // Add to top of list
}

/**
 * Task 3D: deleteTransaction(id)
 * - Filters out the transaction matching id from `transactions`.
 */
function deleteTransaction(id) {
  transactions = transactions.filter((t) => t.id !== Number(id));
}

// ─── Step 4: DOM Rendering Function ──────────────────────────────────────────

/**
 * Task 4: render()
 * Synchronizes state to UI:
 * 1. Calculates running totals and updates metric cards.
 * 2. Applies conditional colors: Green for balance >= 0, Red for balance < 0.
 * 3. Mounts transaction cards safely into `transactionListEl`.
 */
function render() {
  const { income, expense, balance } = calculateTotals();

  // 1. Update Metrics
  totalIncomeEl.textContent = formatMoney(income);
  totalExpenseEl.textContent = formatMoney(expense);
  netBalanceEl.textContent = formatMoney(balance);

  // Dynamic balance color state:
  if (balance > 0) {
    netBalanceEl.className = "metric-value positive";
  } else if (balance < 0) {
    netBalanceEl.className = "metric-value negative";
  } else {
    netBalanceEl.className = "metric-value";
  }

  transCountEl.textContent = `${transactions.length} Records`;

  // 2. Render Transaction List
  transactionListEl.innerHTML = "";

  if (transactions.length === 0) {
    const emptyLi = document.createElement("li");
    emptyLi.className = "empty-state";
    emptyLi.textContent = "No transactions recorded yet. Add your first entry above!";
    transactionListEl.appendChild(emptyLi);
    return;
  }

  for (const item of transactions) {
    const li = document.createElement("li");
    li.className = `transaction-item ${item.type}`;
    li.dataset.id = item.id;

    // Info wrapper
    const infoDiv = document.createElement("div");
    infoDiv.className = "trans-info";

    const titleSpan = document.createElement("span");
    titleSpan.className = "trans-title";
    titleSpan.textContent = item.title;

    const catSpan = document.createElement("span");
    catSpan.className = "trans-category";
    catSpan.textContent = item.category;

    infoDiv.appendChild(titleSpan);
    infoDiv.appendChild(catSpan);

    // Right side (amount + delete)
    const rightDiv = document.createElement("div");
    rightDiv.className = "trans-right";

    const amountSpan = document.createElement("span");
    amountSpan.className = `trans-amount ${item.type}`;
    const sign = item.type === "income" ? "+" : "-";
    amountSpan.textContent = `${sign}${formatMoney(item.amount)}`;

    const delBtn = document.createElement("button");
    delBtn.className = "btn-delete-trans";
    delBtn.type = "button";
    delBtn.textContent = "✕";
    delBtn.setAttribute("aria-label", "Delete transaction");

    rightDiv.appendChild(amountSpan);
    rightDiv.appendChild(delBtn);

    li.appendChild(infoDiv);
    li.appendChild(rightDiv);

    transactionListEl.appendChild(li);
  }
}

// ─── Step 5: Wiring Event Listeners ──────────────────────────────────────────

// 5A. Type Toggle Buttons (Income vs Expense)
typeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedType = btn.dataset.type;

    // Update button visual active classes:
    typeButtons.forEach((b) => {
      b.classList.remove("active-income", "active-expense");
    });

    if (selectedType === "income") {
      btn.classList.add("active-income");
    } else {
      btn.classList.add("active-expense");
    }
  });
});

// 5B. Form Submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop default browser reload!

  const title = descInput.value.trim();
  const rawAmount = amountInput.value;
  const amount = Number(rawAmount);
  const category = categorySelect.value;

  // Defensive validation:
  if (!title || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid description and a positive dollar amount.");
    return;
  }

  addTransaction(title, amount, selectedType, category);

  // Reset inputs
  descInput.value = "";
  amountInput.value = "";
  descInput.focus();

  render();
});

// 5C. Event Delegation for Delete Buttons
transactionListEl.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".btn-delete-trans");
  if (!deleteBtn) return;

  const item = deleteBtn.closest(".transaction-item");
  if (!item) return;

  const transId = item.dataset.id;
  deleteTransaction(transId);
  render();
});

// ─── Step 6: Initial Render & Verification Suite ─────────────────────────────
render();

console.log("--- 🧪 Session 08 Homework 02 Verification Suite ---");
console.assert(formatMoney(10) === "$10.00", "formatMoney test failed");
console.assert(typeof calculateTotals === "function", "calculateTotals must be a function");
const testTotals = calculateTotals();
console.assert(typeof testTotals.balance === "number", "Totals balance must be numeric");
console.log("✅ Budget ledger state model verified successfully!");
```

---

## 📋 Evaluation Checklist

- [ ] Form submission halts page reload with `event.preventDefault()`.
- [ ] Number inputs are converted using `Number(val)` and validated against `isNaN()` and `amount <= 0`.
- [ ] Total income, total expenses, and net balance compute accurately from the array.
- [ ] The net balance value receives `.positive` or `.negative` color classes depending on net funds.
- [ ] Clicking transaction delete buttons removes entries via event delegation (`closest()`).
- [ ] Safe `textContent` is used exclusively for all user-submitted text and numbers.
- [ ] Console verification assertions pass without errors.
