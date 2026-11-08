# Homework 01: The Safe E-Commerce Cart & Discount Processor ("The Reference Guard")

> **Deliverable File:** `cart.js`  
> **Topic:** Memory Stack vs. Heap Mechanics, Object/Array Cloning vs. Reference Sharing, Control Flow with Guard Clauses, Operators (`===`, `||`, `&&`, `? :`), and Iteration with Loops  
> **Prerequisites:** Session 05 (Primitives & Variables), Session 06 (Memory References, Conditionals & Loops)  
> **Submission:** Commit and push `homework/session-6/cart.js` to your repository before Session 07.

---

## 🎯 The Mission

Welcome to the **Safe E-Commerce Cart & Discount Processor** project! 🛒

Imagine you are hired as a software engineer at an online electronics store. During a flash sale, disaster strikes: customers notice that when an item in a user cart is modified, **the price of that item in the master store catalog is corrupted for all users worldwide!**

The bug was caused by reference sharing:
```javascript
// ❌ CRITICAL BUG:
const item = MASTER_CATALOG[0];
userCart.push(item); // ⚠️ Shared reference! userCart points to the MASTER catalog in the Heap!
userCart[0].price = 9.99; // Corrupts MASTER_CATALOG[0].price in the Heap!
```

Your mission is to write `cart.js`:
1. Safely clone master catalog items using spread syntax `{ ...product }` so mutations never corrupt the master inventory.
2. Accumulate cart subtotals using a `for...of` loop and arithmetic operators.
3. Apply discount codes using conditionals and the ternary operator (`? :`).
4. Validate execution with a built-in verification suite.

---

## 💻 Starter Template (`cart.js`)

Copy this code into `homework/session-6/cart.js` and implement the tasks:

```javascript
/**
 * Session 06 - Homework 01: Safe E-Commerce Cart & Discount Processor
 * File: cart.js
 */

// ─── Step 1: Master Product Catalog (Source of Truth in Heap) ─────────────────
const MASTER_CATALOG = Object.freeze([
  { id: 101, title: "Studio Headphones", price: 250, inStock: true },
  { id: 102, title: "Mechanical Keyboard", price: 140, inStock: true },
  { id: 103, title: "USB-C Charging Hub", price: 50, inStock: true },
  { id: 104, title: "Wireless Gaming Mouse", price: 80, inStock: false },
]);

// ─── Step 2: Build a Safe Cart (Zero Reference Leakage) ────────────────────────
// Instructions:
// 1. Initialize an empty array: const cart = [];
// 2. Clone item 101 and item 103 from MASTER_CATALOG using spread syntax { ...item }
// 3. Add a `quantity` property (e.g. quantity: 2 for item 101, quantity: 1 for item 103)
// 4. Push the safe cloned objects into `cart`.

const cart = [];

for (const product of MASTER_CATALOG) {
  if (product.id === 101) {
    cart.push({ ...product, quantity: 2 });
  } else if (product.id === 103) {
    cart.push({ ...product, quantity: 1 });
  }
}

// ─── Step 3: Calculate Subtotal with for...of Loop ────────────────────────────
let subtotal = 0;

for (const item of cart) {
  subtotal += item.price * item.quantity;
}

// ─── Step 4: Apply Discount & Shipping Rules with Conditionals ────────────────
const couponCode = "SAVE10";
const isVipMember = true;

let discountAmount = 0;

// Apply discount rules:
if (couponCode === "SAVE10") {
  discountAmount = subtotal * 0.10;
} else if (couponCode === "VIP20" && isVipMember) {
  discountAmount = subtotal * 0.20;
} else {
  discountAmount = 0;
}

// Shipping fee using ternary operator: VIP members get 0, others pay 15
const shippingFee = isVipMember ? 0 : 15;

const finalTotal = (subtotal - discountAmount) + shippingFee;

// ─── Step 5: Print Checkout Receipt ───────────────────────────────────────────
console.log("=== CHECKOUT RECEIPT ===");
console.log(`Subtotal: $${subtotal}`);
console.log(`Discount: -$${discountAmount}`);
console.log(`Shipping: $${shippingFee}`);
console.log(`Final Total: $${finalTotal}\n`);

// ─── Automated Verification Suite ─────────────────────────────────────────────
console.log("🧪 Running Verification Tests for cart.js...\n");

// Test 1: Verify master catalog was NOT mutated
const originalPrice = MASTER_CATALOG[0].price;
if (cart.length > 0) {
  cart[0].price = 1; // Attempt to mutate cart item
}
const catalogUnmutated = MASTER_CATALOG[0].price === originalPrice;
console.log(catalogUnmutated
  ? "✅ Test 1 Passed: Master catalog memory isolated against mutations."
  : "❌ Test 1 FAILED: Master catalog was mutated in the Heap!");

// Test 2: Verify subtotal calculation
console.log(subtotal === 550
  ? "✅ Test 2 Passed: Subtotal calculated accurately ($550)."
  : `❌ Test 2 FAILED: Expected 550, got ${subtotal}`);

// Test 3: Verify discount and shipping
console.log(discountAmount === 55 && shippingFee === 0 && finalTotal === 495
  ? "✅ Test 3 Passed: Discounts and shipping calculated correctly."
  : "❌ Test 3 FAILED: Final total calculation incorrect.");

console.log("\n🎉 Verification complete!");
```

---

## 🏆 Grading Rubric

| Criterion | Points | Requirement |
| :--- | :--- | :--- |
| **Reference Isolation** | 35 pts | `MASTER_CATALOG` is never mutated; items are cloned using spread `{ ...product }`. |
| **Iteration & Subtotal** | 25 pts | `for...of` loop correctly calculates item subtotal (`price * quantity`). |
| **Conditionals & Operators** | 25 pts | Correct use of `===`, `&&`, and ternary `? :` for discounts and shipping. |
| **Verification Execution** | 15 pts | Script runs with `node cart.js` or `bun run cart.js` and all tests pass. |
| **Total** | **100 pts** | |
