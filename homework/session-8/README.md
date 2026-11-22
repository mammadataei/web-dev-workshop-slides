# Session 08 — Homework Assignments

Welcome to the homework assignments for **Session 08: Event-Driven Programming: Clicks, Inputs & State**!

In this breakthrough session, you transformed static web pages into reactive, interactive user experiences:
- **The Event-Driven Mental Model:** How the browser pauses, listens, and dispatches execution via the Event Loop and Callback Queue.
- **`addEventListener` & The Callback Contract:** Binding target DOM elements to executable handler functions by reference.
- **The Event Object (`e` / `event`):** Inspecting `e.target`, `e.currentTarget`, `e.key`, and coordinate data.
- **Preventing Default Actions:** Halting native browser form reloads and navigation using `e.preventDefault()`.
- **Event Bubbling & Event Delegation:** Attaching a single event listener to a parent container instead of dozens of fragile listeners on child elements.
- **UI State in Memory:** Maintaining variables in JavaScript RAM as the single source of truth (`let count = 0;`), treating the DOM merely as a visual projection.
- **The Unidirectional State-Action-Render Loop:** `[User Action] -> [State Mutation] -> [DOM Re-Render]`.
- **Real-Time Input Handling:** Capturing live keystrokes with `input.value`, distinguishing `input` vs. `change` vs. `keydown`, and building real-time counters.

---

## 📋 The Assignments at a Glance

| Assignment | Deliverable Files | What You Will Build | Key Concepts Mastered |
| :--- | :--- | :--- | :--- |
| **[Homework 1: Interactive Task Tracker & Filter](./homework-1.md)** | `tasks.html`<br>`tasks.js` | A responsive task management interface with task creation, complete/strike-through toggles, task deletion via event delegation, and real-time status filtering (All, Active, Completed). | `form` submission with `e.preventDefault()`, `input.value.trim()`, event delegation with `e.target.closest()`, in-memory state array, dynamic filter buttons, active count indicator. |
| **[Homework 2: Quick Budget & Expense Logger](./homework-2.md)** | `budget.html`<br>`budget.js` | A personal finance ledger that logs income and expenses, tracks a running balance in memory, calculates category totals, updates balance status colors dynamically, and supports transaction removal. | Numeric input parsing (`Number()`), compound state management, dynamic color state classes, event delegation, transaction history rendering, validation guard clauses. |

---

## 🌟 2 Golden Rules to Remember

### 1. The DOM Is a Projection, Not a Database
Never read state back from `textContent` or parse strings with `parseInt()` to figure out what data your application holds:
```javascript
// ❌ WRONG: Scraping data from the DOM
const currentBalance = parseInt(balanceDisplay.textContent.replace('$', '')); // Fragile!

// ✅ CORRECT: The state lives in JavaScript memory as the single source of truth
let currentBalance = 1250.50; // Pure numeric state

function updateDisplay() {
  balanceDisplay.textContent = `$${currentBalance.toFixed(2)}`;
  balanceDisplay.style.color = currentBalance >= 0 ? '#15803d' : '#dc2626';
}
```

---

### 2. Delegate Dynamic Child Clicks to the Parent
Never loop over dynamically generated items to attach individual event listeners:
```javascript
// ❌ WRONG: Attaching individual listeners to 50 items (fails on new items!)
document.querySelectorAll('.delete-btn').forEach(btn => {
  btn.addEventListener('click', handleDelete);
});

// ✅ CORRECT: Attach 1 listener to the container and use event delegation
taskList.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('.delete-btn');
  if (!deleteBtn) return; // Click was not on a delete button

  const taskId = deleteBtn.dataset.id;
  deleteTask(taskId);
});
```

---

## 🚀 Submission Guidelines
1. Ensure your repository has the directory `homework/session-8/`.
2. Place `tasks.html`, `tasks.js`, `budget.html`, and `budget.js` inside this folder.
3. Open `tasks.html` and `budget.html` in your browser (or use VS Code Live Server) to verify visual rendering and interactivity.
4. Verify all automated console checks in the DevTools Console (`F12` $\rightarrow$ Console) before committing!
