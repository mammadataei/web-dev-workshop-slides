# Homework 01: The Interactive Task Tracker & Filter ("The Reactive List")

> **Deliverable Files:** `tasks.html` and `tasks.js`  
> **Topic:** Form Submissions with `event.preventDefault()`, Live Text Input Processing (`input.value.trim()`), Event Delegation on Dynamic Elements (`closest()`), In-Memory State Arrays, and Unidirectional View Rendering  
> **Prerequisites:** Session 07 (DOM Selection & Safe Updates), Session 08 (Event Listeners & State)  
> **Submission:** Commit and push `homework/session-8/tasks.html` and `homework/session-8/tasks.js` to your repository before Session 09.

---

## 🎯 The Mission

Welcome to the **Interactive Task Tracker & Filter** project! 📝

You have been tasked with building a modern client-side task manager. Users need to add new tasks, mark tasks as completed (striking through the text), delete tasks from the list, and toggle between three filter views: **All**, **Active**, and **Completed**.

Your mission is to write `tasks.js` following the **Unidirectional State-Action-Render Architecture**:
1. Store all tasks in a JavaScript state array (`tasks = [...]`) as the single source of truth.
2. Intercept the task entry form submission with `event.preventDefault()` and validate input strings.
3. Use **Event Delegation** on the parent `<ul>` container to handle both status toggles and deletion with a single listener.
4. Render the task list dynamically, updating the "Items remaining" badge in real time.
5. Provide filter buttons that change the current filter state (`currentFilter = 'all' | 'active' | 'completed'`) and re-render the view.

---

## 💻 Starter Templates

### 1. `tasks.html`
Save this file into `homework/session-8/tasks.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Session 08 — Interactive Task Tracker</title>
  <style>
    :root {
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --border: #e2e8f0;
      --accent: #de3b3d;
      --accent-soft: rgba(222, 59, 61, 0.08);
      --mint: #16a34a;
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
      max-width: 520px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .app-header {
      text-align: center;
    }
    .app-header h1 {
      font-size: 28px;
      font-weight: 800;
      color: var(--text);
      margin-bottom: 6px;
    }
    .app-header p {
      color: var(--muted);
      font-size: 15px;
    }

    .card {
      background: var(--card-bg);
      border-radius: 16px;
      border: 1px solid var(--border);
      box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.06);
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .task-form {
      display: flex;
      gap: 10px;
    }
    .task-input {
      flex: 1;
      padding: 12px 16px;
      border-radius: 10px;
      border: 1.5px solid var(--border);
      font-size: 16px;
      outline: none;
      transition: border-color 0.15s ease;
    }
    .task-input:focus {
      border-color: var(--accent);
    }
    .btn-add {
      background: var(--accent);
      color: #ffffff;
      border: none;
      border-radius: 10px;
      padding: 12px 20px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: opacity 0.15s ease;
    }
    .btn-add:hover {
      opacity: 0.9;
    }

    .filter-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }
    .filter-group {
      display: flex;
      gap: 6px;
    }
    .filter-btn {
      background: transparent;
      border: 1px solid transparent;
      border-radius: 8px;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 600;
      color: var(--muted);
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .filter-btn.active {
      background: var(--accent-soft);
      border-color: var(--accent);
      color: var(--accent);
    }
    .items-left {
      font-size: 13px;
      color: var(--muted);
      font-weight: 600;
    }

    .task-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .task-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 10px;
      gap: 12px;
    }
    .task-left {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
    }
    .task-checkbox {
      width: 18px;
      height: 18px;
      cursor: pointer;
      accent-color: var(--mint);
    }
    .task-text {
      font-size: 15px;
      color: var(--text);
      word-break: break-word;
      transition: color 0.15s ease;
    }
    .task-item.is-completed .task-text {
      text-decoration: line-through;
      color: var(--muted);
    }

    .btn-delete {
      background: transparent;
      border: none;
      color: var(--muted);
      cursor: pointer;
      padding: 4px 8px;
      font-size: 16px;
      border-radius: 6px;
      transition: all 0.15s ease;
    }
    .btn-delete:hover {
      color: var(--accent);
      background: var(--accent-soft);
    }

    .empty-state {
      text-align: center;
      padding: 24px 0;
      color: var(--muted);
      font-size: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="app-header">
      <h1>Task Tracker</h1>
      <p>Session 08 · Event-Driven State Architecture</p>
    </header>

    <main class="card">
      <form id="task-form" class="task-form">
        <input
          id="task-input"
          class="task-input"
          type="text"
          placeholder="What needs to be done?"
          autocomplete="off"
        />
        <button id="add-btn" class="btn-add" type="submit">Add Task</button>
      </form>

      <div class="filter-bar">
        <div class="filter-group">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="active">Active</button>
          <button class="filter-btn" data-filter="completed">Completed</button>
        </div>
        <span id="items-left" class="items-left">0 items left</span>
      </div>

      <ul id="task-list" class="task-list"></ul>
    </main>
  </div>

  <script src="./tasks.js"></script>
</body>
</html>
```

---

### 2. `tasks.js`
Save this file into `homework/session-8/tasks.js` and implement the tasks according to the labeled comments:

```javascript
/**
 * Session 08 - Homework 01: Interactive Task Tracker & Filter
 * Deliverable: tasks.js
 */

// ─── Step 1: In-Memory State Model ────────────────────────────────────────────
// The single source of truth lives in JavaScript variables:
let tasks = [
  { id: 1, text: "Master addEventListener callback functions", completed: true },
  { id: 2, text: "Build the unidirectional State -> Render loop", completed: false },
  { id: 3, text: "Implement event delegation on parent containers", completed: false },
];

let currentFilter = "all"; // Options: 'all' | 'active' | 'completed'

// ─── Step 2: DOM Element Node Cache ──────────────────────────────────────────
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const itemsLeftDisplay = document.querySelector("#items-left");
const filterButtons = document.querySelectorAll(".filter-btn");

// ─── Step 3: Pure State Helper Functions ─────────────────────────────────────

/**
 * Task 3A: addTask(text)
 * - Creates a new task object: { id: Date.now(), text: text.trim(), completed: false }
 * - Pushes it to the `tasks` state array.
 */
function addTask(text) {
  const cleanText = text.trim();
  if (!cleanText) return;

  const newTask = {
    id: Date.now(),
    text: cleanText,
    completed: false,
  };

  tasks.push(newTask);
}

/**
 * Task 3B: toggleTask(id)
 * - Finds task by numeric id and inverts its `completed` boolean.
 */
function toggleTask(id) {
  const target = tasks.find((t) => t.id === Number(id));
  if (target) {
    target.completed = !target.completed;
  }
}

/**
 * Task 3C: deleteTask(id)
 * - Removes the task matching id from the `tasks` state array.
 */
function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== Number(id));
}

/**
 * Task 3D: getFilteredTasks()
 * - Returns a filtered sub-array of tasks based on `currentFilter`:
 *   - 'active' -> tasks where completed === false
 *   - 'completed' -> tasks where completed === true
 *   - 'all' -> all tasks
 */
function getFilteredTasks() {
  if (currentFilter === "active") {
    return tasks.filter((t) => !t.completed);
  }
  if (currentFilter === "completed") {
    return tasks.filter((t) => t.completed);
  }
  return tasks;
}

/**
 * Task 3E: getActiveCount()
 * - Returns the count of tasks that are NOT completed.
 */
function getActiveCount() {
  return tasks.filter((t) => !t.completed).length;
}

// ─── Step 4: DOM Rendering Function ──────────────────────────────────────────

/**
 * Task 4: render()
 * Synchronizes the in-memory state to the live DOM:
 * 1. Empties the `taskList` container.
 * 2. Gets filtered tasks from `getFilteredTasks()`.
 * 3. Mounts <li> cards safely using document.createElement and textContent.
 * 4. Updates `itemsLeftDisplay` with remaining active count.
 */
function render() {
  // Clear container
  taskList.innerHTML = "";

  const visibleTasks = getFilteredTasks();

  if (visibleTasks.length === 0) {
    const emptyLi = document.createElement("li");
    emptyLi.className = "empty-state";
    emptyLi.textContent = "No tasks found in this view.";
    taskList.appendChild(emptyLi);
  } else {
    for (const task of visibleTasks) {
      // <li> wrapper
      const li = document.createElement("li");
      li.className = `task-item ${task.completed ? "is-completed" : ""}`;
      li.dataset.id = task.id;

      // Left container
      const leftDiv = document.createElement("div");
      leftDiv.className = "task-left";

      // Checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-checkbox";
      checkbox.checked = task.completed;

      // Label text (safe text injection)
      const span = document.createElement("span");
      span.className = "task-text";
      span.textContent = task.text;

      leftDiv.appendChild(checkbox);
      leftDiv.appendChild(span);

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn-delete";
      deleteBtn.type = "button";
      deleteBtn.textContent = "✕";
      deleteBtn.setAttribute("aria-label", "Delete task");

      li.appendChild(leftDiv);
      li.appendChild(deleteBtn);

      taskList.appendChild(li);
    }
  }

  // Update items left indicator
  const activeCount = getActiveCount();
  itemsLeftDisplay.textContent = `${activeCount} item${activeCount === 1 ? "" : "s"} left`;
}

// ─── Step 5: Wiring Event Listeners ──────────────────────────────────────────

// 5A. Form Submission: Add new task
taskForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop default browser reload!

  const text = taskInput.value.trim();
  if (!text) return;

  addTask(text);
  taskInput.value = ""; // Clear input field
  render();
});

// 5B. Event Delegation on Task List: Checkbox toggles and Delete clicks
taskList.addEventListener("click", (event) => {
  const target = event.target;
  const taskItem = target.closest(".task-item");
  if (!taskItem) return;

  const taskId = taskItem.dataset.id;

  // If user clicked the checkbox:
  if (target.classList.contains("task-checkbox")) {
    toggleTask(taskId);
    render();
  }

  // If user clicked the delete button:
  if (target.classList.contains("btn-delete")) {
    deleteTask(taskId);
    render();
  }
});

// 5C. Filter Button Toggles
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active class on filter buttons
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Update state and re-render
    currentFilter = btn.dataset.filter;
    render();
  });
});

// ─── Step 6: Initial Render & Verification Suite ─────────────────────────────
render();

console.log("--- 🧪 Session 08 Homework 01 Verification Suite ---");
console.assert(typeof addTask === "function", "addTask must be a function");
console.assert(typeof toggleTask === "function", "toggleTask must be a function");
console.assert(typeof deleteTask === "function", "deleteTask must be a function");
console.assert(getActiveCount() >= 0, "getActiveCount must return a non-negative number");
console.log("✅ State functions loaded and verified successfully!");
```

---

## 📋 Evaluation Checklist

- [ ] Submitting the task form intercepts default page reloading with `event.preventDefault()`.
- [ ] Blank or whitespace-only inputs are ignored via `input.value.trim()`.
- [ ] Task checkbox clicks toggle the completed state in memory and update visual line-through styles.
- [ ] Delete button clicks remove the item from the state array using event delegation.
- [ ] Filter buttons ("All", "Active", "Completed") update `currentFilter` and immediately refresh the visible list.
- [ ] The "Items remaining" indicator updates dynamically after every action.
- [ ] All elements are populated safely with `textContent` (no unsafe user `innerHTML`).
