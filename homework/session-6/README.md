# Session 06 — Homework Assignments

Welcome to the homework assignments for **Session 06: Non-Primitives, Memory References & Control Flow**!

In this session, you stepped beyond basic variable declarations and explored the true memory reality and computational machinery of JavaScript:
- **The Memory Split:** The fast, fixed-size **Call Stack** (storing primitives and memory addresses) vs. the dynamic **Memory Heap** (storing objects and arrays).
- **Copy by Value vs. Copy by Reference:** Why assigning a primitive produces an independent clone, while assigning an object shares a pointer to the exact same heap memory slot.
- **The `const` Paradox:** Why `const` locks stack reassignment but allows mutating properties of objects and arrays in the heap.
- **Restoring vs. Mutating References:** Breaking pointers, creating safe shallow copies (`{ ...obj }`, `[...arr]`), and why `{} === {}` evaluates to `false`.
- **Foundational Operators:** Arithmetic, strict equality (`===`) vs loose equality (`==`), logical short-circuiting (`||` for fallbacks vs `&&` for guards), and the ternary operator (`? :`).
- **Defensive Control Flow:** Branching with `if/else`, understanding the **8 Falsy Values**, and refactoring nested code into flat **Guard Clauses**.
- **Algorithmic Iteration:** The classic `for` loop, `while` loops, loop control with `break` / `continue`, and collection traversal with `for...of`.
- **Arrays of Objects:** Working with real-world e-commerce catalogs and records.

---

## 📋 The Assignments at a Glance

| Assignment | Deliverable File | What You Will Build | Key Concepts Mastered |
| :--- | :--- | :--- | :--- |
| **[Homework 1: Safe E-Commerce Cart & Discount Processor](./homework-1.md)** | `cart.js` | A shopping cart script that prevents master catalog corruption, computes order subtotals, and applies discount rules. | Stack vs Heap references, safe object cloning, `for...of` loops, strict equality (`===`), ternary operator (`? :`), guard clauses. |
| **[Homework 2: Student Analytics & Profile Processor](./homework-2.md)** | `analytics.js` | A data processing script that iterates student records, calculates averages, determines passing status, and generates summary stats. | Arrays of objects, `while` / `for` loops, logical operators (`||`, `&&`), letter grade classification (`switch`), reference isolation. |

---

## 🌟 2 Golden Rules to Remember

### 1. Primitives Clone, Non-Primitives Share (The Pointer Rule)
When you assign a primitive, JavaScript creates an independent clone:
```javascript
let scoreA = 100;
let scoreB = scoreA;
scoreB = 85; // scoreA remains 100!
```
When you assign an object or array, JavaScript copies **only the memory pointer address**:
```javascript
const itemA = { title: "Headphones", price: 99 };
const itemB = itemA;
itemB.price = 10; // ⚠️ DANGER! itemA.price is now 10 because both point to the same Heap address!
```
*Golden Habit:* Whenever you take in an object or array that you intend to modify, clone it first using `{ ...itemA }` or `[...list]` to break the shared reference link!

---

### 2. Guard Clauses Flatten Nested Logic
Avoid nested pyramids of `if` statements. Check for error conditions and edge cases at the very top:
```javascript
// ✅ Clean Linear Guard Clauses
if (!order) {
  status = "Invalid order";
} else if (order.items.length === 0) {
  status = "Cart empty";
} else if (!order.isPaid) {
  status = "Payment required";
} else {
  status = "Order confirmed";
}
```

---

## 🚀 Submission Guidelines
1. Ensure your repository has `homework/session-6/`.
2. Place `cart.js` and `analytics.js` inside this folder.
3. Verify your scripts by running them in your terminal:
   ```bash
   node cart.js
   node analytics.js
   # or with Bun:
   bun run cart.js
   bun run analytics.js
   ```
4. Confirm that all automated assertions print passing checkmarks (`✅`) before committing!
