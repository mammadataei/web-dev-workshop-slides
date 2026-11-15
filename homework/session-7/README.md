# Session 07 — Homework Assignments

Welcome to the homework assignments for **Session 07: Functions, Reusable Logic & The Live DOM Bridge**!

In this breakthrough session, you connected pure computation in JavaScript to the visual reality of the browser screen:
- **Functions as Reusable Machines:** Input (Parameters) $\rightarrow$ Processing (Body & Logic) $\rightarrow$ Output (`return` value).
- **Function Syntax Variations:** Declarations, expressions, and modern arrow functions (`() =>`).
- **Execution Scope & The Call Stack:** Local scope frames, avoiding global pollution, and tracing function lifecycles.
- **Pure Functions vs. Side Effects:** Writing deterministic helper functions that compute outputs without mutating external state.
- **The Live DOM Tree:** Understanding how the browser parses HTML into an interactive object graph in RAM (`document`).
- **Precise Element Selection:** Querying single and multiple nodes using `document.querySelector()` and `document.querySelectorAll()`.
- **Defensive Querying:** Protecting against `null` references before accessing properties.
- **Safe Dynamic Updates:** Why `textContent` protects against XSS security vulnerabilities while `innerHTML` introduces severe risks.
- **State-Driven Styling:** Adding, removing, and toggling CSS classes via `element.classList` instead of hardcoding fragile inline styles.
- **Data-to-DOM Rendering:** Writing functional component renderers that transform data objects and arrays into structured HTML cards.

---

## 📋 The Assignments at a Glance

| Assignment | Deliverable Files | What You Will Build | Key Concepts Mastered |
| :--- | :--- | :--- | :--- |
| **[Homework 1: Dynamic E-Commerce Product Catalog](./homework-1.md)** | `catalog.html`<br>`catalog.js` | An e-commerce catalog generator that formats prices, checks stock thresholds, and safely updates product cards in the live DOM. | Pure formatting functions, `document.querySelector()`, `textContent`, `classList.toggle()`, defensive element queries. |
| **[Homework 2: Student Gradebook & Honors Dashboard](./homework-2.md)** | `gradebook.html`<br>`gradebook.js` | A live dashboard that processes student arrays, computes GPA and letter grades, and dynamically mounts table rows with honor badges. | Multi-function pipelines, `document.querySelectorAll()`, `for...of` DOM iteration, dynamic element creation/injection, badge states. |

---

## 🌟 2 Golden Rules to Remember

### 1. Functions Compute Values; Renderers Touch the DOM
Separate your math and formatting from your DOM manipulation:
```javascript
// ✅ PURE HELPER: Computes and returns a formatted string (easy to test, reusable anywhere)
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

// ✅ DOM RENDERER: Selects elements and updates text content safely
function updatePriceDisplay(elementSelector, price) {
  const el = document.querySelector(elementSelector);
  if (!el) return; // Defensive guard clause
  el.textContent = formatCurrency(price);
}
```

---

### 2. Never Use `innerHTML` for Plain Text (The Injection Shield)
Directly setting `innerHTML` with unsanitized data exposes your web application to Cross-Site Scripting (XSS):
```javascript
// ❌ DANGEROUS: If userName contains "<img src=x onerror=alert(1)>", it executes malicious script!
userGreetingEl.innerHTML = `Welcome back, ${userName}!`;

// ✅ SAFE & FAST: Renders purely as text, neutralizing any injected HTML tags
userGreetingEl.textContent = `Welcome back, ${userName}!`;
```
*Golden Habit:* Let HTML structure live in your template, let styles live in CSS classes (`classList.add('badge-sale')`), and use `textContent` to inject user-provided text!

---

## 🚀 Submission Guidelines
1. Ensure your repository has the directory `homework/session-7/`.
2. Place `catalog.html`, `catalog.js`, `gradebook.html`, and `gradebook.js` inside this folder.
3. Open `catalog.html` and `gradebook.html` in your browser (or use VS Code Live Server) to verify visual rendering.
4. Verify all automated console checks in the DevTools Console (`F12` $\rightarrow$ Console) before committing!
