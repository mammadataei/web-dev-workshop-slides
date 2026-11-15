# Homework 01: The Dynamic E-Commerce Product Catalog ("The DOM Stager")

> **Deliverable Files:** `catalog.html` and `catalog.js`  
> **Topic:** Pure Calculation Functions, Default Parameters, `document.querySelector()`, Safe `textContent` Injection, Dynamic Class Toggling (`classList.toggle`), and Defensive DOM Guard Clauses  
> **Prerequisites:** Session 06 (Objects, Arrays & Memory), Session 07 (Functions & The DOM Bridge)  
> **Submission:** Commit and push `homework/session-7/catalog.html` and `homework/session-7/catalog.js` to your repository before Session 08.

---

## 🎯 The Mission

Welcome to the **Dynamic E-Commerce Product Catalog** project! 🛍️

You are hired as a frontend engineer at an online boutique. The marketing team has created a static product card template in HTML and CSS, but currently the data is hardcoded placeholder text.

Your mission is to write **pure reusable helper functions** and connect them to the **live browser DOM**:
1. Implement pure helper functions to calculate discounted prices, format currency strings, and evaluate inventory thresholds.
2. Select target DOM elements defensively using `document.querySelector()` with guard clauses.
3. Inject live product data safely using `element.textContent` (avoiding unsafe `innerHTML`).
4. Dynamically toggle CSS classes (`badge-sale`, `badge-out-of-stock`, `card-highlight`) based on product state.

---

## 💻 Starter Templates

### 1. `catalog.html`
Save this file into `homework/session-7/catalog.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Session 07 — Dynamic Product Catalog</title>
  <style>
    :root {
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --border: #e2e8f0;
      --accent: #de3b3d;
      --sale: #16a34a;
      --soldout: #dc2626;
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
      max-width: 480px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .catalog-header {
      text-align: center;
    }
    .catalog-header h1 {
      font-size: 28px;
      font-weight: 800;
      color: var(--text);
      margin-bottom: 6px;
    }
    .catalog-header p {
      color: var(--muted);
      font-size: 15px;
    }

    .product-card {
      background: var(--card-bg);
      border-radius: 16px;
      border: 1px solid var(--border);
      overflow: hidden;
      box-shadow: 0 4px 20px -2px rgba(0,0,0,0.06);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .product-card.card-highlight {
      border: 2px solid var(--accent);
      box-shadow: 0 10px 30px -4px rgba(222, 59, 61, 0.15);
    }

    .card-image-box {
      height: 220px;
      background: #e2e8f0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: var(--muted);
      position: relative;
    }

    .badge {
      position: absolute;
      top: 14px;
      right: 14px;
      padding: 6px 12px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: none;
    }
    .badge.badge-sale {
      display: inline-block;
      background: var(--sale);
      color: #ffffff;
    }
    .badge.badge-out-of-stock {
      display: inline-block;
      background: var(--soldout);
      color: #ffffff;
    }

    .card-body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .product-category {
      font-size: 13px;
      font-weight: 700;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .product-title {
      font-size: 22px;
      font-weight: 800;
      color: var(--text);
      line-height: 1.25;
    }

    .product-description {
      font-size: 14px;
      color: var(--muted);
      line-height: 1.5;
    }

    .pricing-row {
      display: flex;
      align-items: baseline;
      gap: 12px;
      margin-top: 8px;
    }
    .current-price {
      font-size: 26px;
      font-weight: 800;
      color: var(--text);
    }
    .original-price {
      font-size: 16px;
      color: var(--muted);
      text-decoration: line-through;
      display: none;
    }
    .original-price.is-discounted {
      display: inline;
    }

    .inventory-status {
      font-size: 13px;
      font-weight: 600;
      color: var(--muted);
      margin-top: 4px;
    }
    .inventory-status.low-stock {
      color: #b45309;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="catalog-header">
      <h1>Featured Showcase</h1>
      <p>Rendered dynamically with JavaScript functions</p>
    </header>

    <article id="hero-product-card" class="product-card">
      <div class="card-image-box">
        <span id="product-img-label">[ High-Res Audio Canvas ]</span>
        <span id="product-badge" class="badge">Sale</span>
      </div>
      <div class="card-body">
        <span id="product-category" class="product-category">Category</span>
        <h2 id="product-title" class="product-title">Product Title</h2>
        <p id="product-description" class="product-description">Description copy goes here...</p>
        <div class="pricing-row">
          <span id="current-price" class="current-price">$0.00</span>
          <span id="original-price" class="original-price">$0.00</span>
        </div>
        <p id="inventory-status" class="inventory-status">Checking stock...</p>
      </div>
    </article>
  </div>

  <script src="./catalog.js"></script>
</body>
</html>
```

---

### 2. `catalog.js`
Save this file into `homework/session-7/catalog.js` and complete the labeled tasks:

```javascript
/**
 * Session 07 - Homework 01: Dynamic E-Commerce Product Catalog
 * Deliverable: catalog.js
 */

// ─── Step 1: Master Product Entity ────────────────────────────────────────────
const ACTIVE_PRODUCT = {
  id: "prod-701",
  title: "Aura Studio Wireless Headphones",
  category: "Audiophile Hardware",
  description: "Precision-engineered 40mm beryllium drivers with adaptive active noise cancellation and 45-hour playback time.",
  originalPrice: 299.99,
  discountPercent: 20, // 20% discount applied
  stockCount: 4,       // Threshold <= 5 triggers "Low Stock Warning"
  isFeatured: true,
};

// ─── Step 2: Pure Calculation & Formatting Functions ─────────────────────────

/**
 * Task 2A: calculateFinalPrice(basePrice, discountPercent)
 * - Returns discounted price rounded to 2 decimal places.
 * - If discountPercent is 0 or omitted, return basePrice.
 * - Formula: basePrice * (1 - discountPercent / 100)
 */
function calculateFinalPrice(basePrice, discountPercent = 0) {
  if (discountPercent <= 0) return basePrice;
  const finalPrice = basePrice * (1 - discountPercent / 100);
  return Number(finalPrice.toFixed(2));
}

/**
 * Task 2B: formatCurrency(amount)
 * - Returns a formatted string prefixed with "$" and exactly 2 decimal places.
 * - Example: formatCurrency(239.992) -> "$239.99"
 */
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

/**
 * Task 2C: getStockLabel(stock)
 * - If stock === 0 -> "Out of Stock"
 * - If stock <= 5 -> `Only ${stock} left in stock - order soon!`
 * - Else -> `In Stock (${stock} units available)`
 */
function getStockLabel(stock) {
  if (stock === 0) return "Out of Stock";
  if (stock <= 5) return `Only ${stock} left in stock - order soon!`;
  return `In Stock (${stock} units available)`;
}

// ─── Step 3: DOM Rendering Function ──────────────────────────────────────────

/**
 * Task 3: renderProductToDOM(product)
 * Connects JavaScript memory to the live HTML elements.
 */
function renderProductToDOM(product) {
  // 1. Select the container and card
  const cardEl = document.querySelector("#hero-product-card");
  if (!cardEl) {
    console.error("Card element #hero-product-card not found!");
    return;
  }

  // 2. Select internal elements
  const titleEl = cardEl.querySelector("#product-title");
  const categoryEl = cardEl.querySelector("#product-category");
  const descEl = cardEl.querySelector("#product-description");
  const currentPriceEl = cardEl.querySelector("#current-price");
  const originalPriceEl = cardEl.querySelector("#original-price");
  const badgeEl = cardEl.querySelector("#product-badge");
  const inventoryEl = cardEl.querySelector("#inventory-status");

  // 3. Compute derived values using our pure functions
  const finalPrice = calculateFinalPrice(product.originalPrice, product.discountPercent);
  const formattedFinal = formatCurrency(finalPrice);
  const formattedOriginal = formatCurrency(product.originalPrice);
  const stockText = getStockLabel(product.stockCount);

  // 4. Safely update text content
  if (titleEl) titleEl.textContent = product.title;
  if (categoryEl) categoryEl.textContent = product.category;
  if (descEl) descEl.textContent = product.description;
  if (currentPriceEl) currentPriceEl.textContent = formattedFinal;

  // 5. Handle Discount Display & Badge
  if (product.discountPercent > 0) {
    if (originalPriceEl) {
      originalPriceEl.textContent = formattedOriginal;
      originalPriceEl.classList.add("is-discounted");
    }
    if (badgeEl) {
      badgeEl.textContent = `${product.discountPercent}% OFF`;
      badgeEl.classList.add("badge-sale");
      badgeEl.classList.remove("badge-out-of-stock");
    }
  } else if (product.stockCount === 0) {
    if (badgeEl) {
      badgeEl.textContent = "Sold Out";
      badgeEl.classList.add("badge-out-of-stock");
      badgeEl.classList.remove("badge-sale");
    }
  }

  // 6. Handle Inventory status & warning styles
  if (inventoryEl) {
    inventoryEl.textContent = stockText;
    if (product.stockCount <= 5 && product.stockCount > 0) {
      inventoryEl.classList.add("low-stock");
    } else {
      inventoryEl.classList.remove("low-stock");
    }
  }

  // 7. Toggle card highlight if product is featured
  cardEl.classList.toggle("card-highlight", Boolean(product.isFeatured));
}

// ─── Step 4: Initial Render Execution ─────────────────────────────────────────
renderProductToDOM(ACTIVE_PRODUCT);

// ─── Step 5: Automated Verification Suite ─────────────────────────────────────
console.log("--- 🧪 Session 07 Homework 01 Verification Suite ---");
console.assert(calculateFinalPrice(100, 20) === 80, "calculateFinalPrice test failed!");
console.assert(calculateFinalPrice(50, 0) === 50, "calculateFinalPrice 0% discount test failed!");
console.assert(formatCurrency(24.5) === "$24.50", "formatCurrency test failed!");
console.assert(getStockLabel(0) === "Out of Stock", "getStockLabel sold out test failed!");
console.assert(getStockLabel(3).includes("Only 3 left"), "getStockLabel low stock test failed!");
console.log("✅ All helper assertions passed successfully!");
```

---

## 📋 Evaluation Checklist

- [ ] `calculateFinalPrice()` calculates accurate percentage reductions and handles default parameters.
- [ ] `formatCurrency()` returns proper `$` strings formatted with 2 fixed decimals.
- [ ] `textContent` is exclusively used to populate strings into DOM nodes (no `innerHTML`).
- [ ] `classList.add()`, `classList.remove()`, and `classList.toggle()` direct all visual state changes.
- [ ] Defensive guard clauses protect queries from throwing runtime errors.
- [ ] All assertions print passing checkmarks in the browser console.
