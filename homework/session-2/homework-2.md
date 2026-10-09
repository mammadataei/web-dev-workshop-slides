# Homework 02: Conference Registration & Schedule Portal

> **Deliverable File:** `portal.html`  
> **Topic:** Accessible HTML Forms, Tabular Data Architecture & Strategic AI  
> **Prerequisites:** Session 02  
> **Submission:** Push `portal.html` to your GitHub repository before the start of Session 03.

---

## 🎯 The Mission

Now that you know how to structure pages with semantic landmarks, it's time to build two of the most critical building blocks on the web:
1. **An Interactive Form (`<form>`):** Where users input and submit information.
2. **A Structured Data Table (`<table>`):** Where data is presented clearly in rows and columns.

You will build a single web page named `portal.html` representing an **Event Registration & Schedule Portal**.

---

## 📐 Page Blueprint (What It Looks Like Conceptually)

```text
+-----------------------------------------------------------------------+
| <header>                                                              |
|   <h1>Global Developer Summit 2026</h1>                               |
|   <p>Registration & Workshop Schedule Portal</p>                      |
| </header>                                                             |
+-----------------------------------------------------------------------+
| <main>                                                                |
|                                                                       |
|   <!-- PART A: The Registration Form -->                              |
|   <section id="registration">                                         |
|     <h2>Attendee Registration</h2>                                    |
|     <form action="/register" method="POST">                           |
|       [Label: Full Name]          -> [Text Input (required)]          |
|       [Label: Email Address]      -> [Email Input (required)]         |
|       [Label: Workshop Track]     -> [Select Dropdown (3+ options)]   |
|       [Attendance Mode]           -> (•) In-Person    ( ) Virtual     |
|       [Label: Dietary / Notes]    -> [Textarea]                       |
|       [ ] I agree to the Code of Conduct (required checkbox)          |
|       [Button: Complete Registration (type="submit")]                 |
|     </form>                                                           |
|   </section>                                                          |
|                                                                       |
|   <!-- PART B: The Workshop Schedule & Pricing Table -->              |
|   <section id="schedule-matrix">                                      |
|     <h2>Workshop Matrix & Pricing</h2>                                |
|     <table>                                                           |
|       <caption>Workshop Schedule & Track Pricing Matrix</caption>     |
|       <thead> (Time | Session Topic | Room | Instructor | Pricing)    |
|       <tbody> (4+ rows of sessions with <th scope="row"> time slots)  |
|       <tfoot> (Summary row with colspan="5" ticket perks)             |
|     </table>                                                          |
|   </section>                                                          |
|                                                                       |
| </main>                                                               |
+-----------------------------------------------------------------------+
| <footer>                                                              |
|   <p>© 2026 Global Developer Summit. All rights reserved.</p>         |
| </footer>                                                             |
+-----------------------------------------------------------------------+
```

---

## 📝 Part A: The Interactive Registration Form (`<form>`)

Forms are how users communicate with servers. Every form element must be built with accessibility in mind.

### 1. Form Container
- Wrap your inputs in a `<form action="/register" method="POST">`.
  - `action`: Specifies where data is sent when submitted.
  - `method="POST"`: Specifies that data is sent securely in the request body (not in the URL).

### 2. The Golden Label Rule: `<label for="...">`
Every form control **must** be paired with a `<label>`.
- The `<label for="abc">` **must match** the input's `id="abc"`.
- *Why is this so important?*
  1. **Touch Target Size:** When users tap or click the label text, the browser automatically activates the input! (Great for people on mobile or with motor impairments).
  2. **Screen Reader Visibility:** When a blind user tabs into a field, the screen reader speaks the label name aloud.
  3. ⚠️ **Never use `placeholder` as a label!** Placeholders vanish the moment someone starts typing and are often skipped by screen readers.

### 3. Required Fields & Input Controls

1. **Full Name:**
   - `<label for="full-name">Full Name *</label>`
   - `<input type="text" id="full-name" name="name" required>`
2. **Email Address:**
   - `<label for="user-email">Email Address *</label>`
   - `<input type="email" id="user-email" name="email" required>`
   - *Tip:* `type="email"` automatically verifies that the user types a valid email containing `@` and a domain!
3. **Workshop Track Selection (Dropdown):**
   - `<label for="track-select">Select Workshop Track *</label>`
   - `<select id="track-select" name="track" required>`
   - Include at least 3 `<option>` choices (e.g., `"Frontend Foundations"`, `"Full-Stack Mastery"`, `"AI Engineering"`).
4. **Attendance Mode (Radio Buttons):**
   - Provide two choices: **In-Person Attendance** and **Virtual Live Stream**.
   - *How Radio Buttons Work:*
     - Both radio buttons **must share the same `name="attendance-mode"`** so only one can be selected at a time!
     - Each radio button **must have a unique `id`** so its own `<label>` can pair with it:
     ```html
     <input type="radio" id="mode-in-person" name="attendance-mode" value="in-person" checked>
     <label for="mode-in-person">In-Person Attendance</label>

     <input type="radio" id="mode-virtual" name="attendance-mode" value="virtual">
     <label for="mode-virtual">Virtual Live Stream</label>
     ```
5. **Special Requirements / Notes:**
   - `<label for="special-requests">Dietary & Accessibility Requirements</label>`
   - `<textarea id="special-requests" name="notes" rows="4"></textarea>`
6. **Code of Conduct Consent:**
   - `<input type="checkbox" id="terms-consent" name="terms" required>`
   - `<label for="terms-consent">I agree to the conference Code of Conduct and Terms *</label>`
7. **Submit Button:**
   - `<button type="submit">Complete Registration</button>`
   - *Note:* Use `type="submit"` so clicking it triggers the form validation and submission.

---

## 📊 Part B: The Workshop Schedule & Pricing Table (`<table>`)

A table is designed to represent **two-dimensional data** (data that has rows and columns).

> ⚠️ **The Cardinal Rule of Tables:**  
> Tables are strictly for structured tabular data. **NEVER use tables for layout or page design!** Using tables for layout breaks mobile responsiveness and destroys accessibility.

### 1. Semantic Table Elements Breakdown

- `<table>`: The outer container.
- `<caption>`: **The title of your table.** Must be the very first element directly inside `<table>`.
  - Example: `<caption>Workshop Schedule & Track Pricing Matrix</caption>`
  - Screen readers read the caption first, so users understand what the table contains before navigating through dozens of cells.
- `<thead>`: The header section containing column labels.
  - Wrap the header row in a `<tr>` (table row).
  - Use `<th>` (table header cell) for each column title.
  - Add `scope="col"` to every column header:
    - `<th scope="col">Time</th>`
    - `<th scope="col">Session Topic</th>`
    - `<th scope="col">Room</th>`
    - `<th scope="col">Instructor</th>`
    - `<th scope="col">Pricing</th>`
- `<tbody>`: The body section containing data rows.
  - Must include **at least 4 session rows** (`<tr>`).
  - In each row:
    - Use `<th scope="row">` for the time slot (e.g., `<th scope="row">09:00 AM</th>`). This identifies the time as the header for that specific row.
    - Use standard `<td>` (table data) cells for Session Topic, Room, Instructor, and Price.
- `<tfoot>`: The summary footer section.
  - Add a summary row that spans all 5 columns using `colspan="5"`:
    ```html
    <tfoot>
      <tr>
        <td colspan="5">Note: All in-person tickets include breakfast, lunch, and lab equipment access.</td>
      </tr>
    </tfoot>
    ```
  - *What does `colspan="5"` mean?* It tells the cell to stretch across 5 columns, creating a full-width banner at the bottom of the table!

---

## 🤖 The Pragmatic AI Task: Mock Data Generation & Audit

Generating realistic table data by hand can be tedious. Practice using AI as your data assistant:

### Step 1: Send the "Mock Data Prompt"
Copy and paste this technical specification prompt into your AI tool:

> *"Generate an accessible HTML5 table for a 4-session tech workshop with columns Time, Session Topic, Room, Instructor, and Price. Include a `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, and proper `<th scope='col'>` and `<th scope='row'>` attributes. In the `<tfoot>`, include a single `<td>` with `colspan='5'` explaining ticket perks. Do not use any generic `<div>` tags or CSS styling. Output only valid HTML."*

### Step 2: The 60-Second AI Audit
AI models often generate obsolete HTML tables. Before pasting the code into your `portal.html`, check these 4 points:
1. 🔍 **Did it include `<caption>`?** If missing, add it as the very first child of `<table>`.
2. 🔍 **Did it include `scope="col"` on column headers and `scope="row"` on row headers?** If missing, add them.
3. 🔍 **Did it put any `<div>` tags inside `<table>`?** Strip them out! A table should only contain `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, and `<td>`.
4. 🔍 **Did it use `colspan="5"` in `<tfoot>`?** Make sure the number matches the total number of columns (5).

---

## 🧪 How to Test Your Work in Google Chrome

Run these 4 practical tests in your browser before submitting:

### 1. The Touch Target Test (Click the Labels!)
- Open `portal.html` in Chrome with Live Server.
- Click directly on the text: **"Full Name *"** -> Notice how the text input immediately gains a blue focus ring and cursor!
- Click directly on the text: **"Virtual Live Stream"** -> Notice how the radio button gets selected!
- Click directly on the text: **"I agree to the..."** -> Notice how the checkbox toggles!
- 👉 *If clicking the text does nothing, check your `for="..."` and `id="..."` values. They must match letter-for-letter!*

### 2. The Native Form Validation Test
- Leave the form completely blank and click **"Complete Registration"**.
- Chrome should block submission and show a popup: *"Please fill out this field"*.
- Try typing `not-an-email` into the email field and submit -> Chrome should warn: *"Please include an '@' in the email address"*.

### 3. The Keyboard Tab Test
- Click in the browser address bar and press **Tab** repeatedly:
  - Does focus move sequentially from Name -> Email -> Dropdown -> Radio -> Textarea -> Checkbox -> Button?
  - Can you use the **Up/Down arrow keys** to switch between radio options when focused on them?
  - Can you press **Spacebar** to check and uncheck the terms checkbox?

### 4. The DevTools Accessibility Inspection
- Press `F12` to open DevTools.
- Inspect the `<table>`:
  - Check that the `<caption>` is the very first child inside `<table>`.
  - Check that all column headers in `<thead>` have `scope="col"`.
  - Check that all time slots in `<tbody>` are `<th scope="row">` tags.

---

## ✅ Self-Evaluation Checklist

- [ ] **01. Form & Label Pairing:** Every single input, select dropdown, and textarea has a paired `<label for="...">` matching its `id`.
- [ ] **02. The Touch Target Test:** Clicking any label text successfully focuses or toggles its corresponding input.
- [ ] **03. Radio Grouping:** Both attendance mode radio buttons share the same `name="attendance-mode"` so only one can be checked at a time.
- [ ] **04. Form Validation:** Full Name, Email, and Terms checkbox are marked `required`. Button uses `type="submit"`.
- [ ] **05. Table Architecture:** Table contains `<caption>`, `<thead>`, `<tbody>`, and `<tfoot>`.
- [ ] **06. Scope Attributes:** Column headers use `<th scope="col">` and row headers use `<th scope="row">`.
- [ ] **07. Table Footer:** `<tfoot>` uses a single cell with `colspan="5"` to summarize ticket perks.
- [ ] **08. No Div Soup:** No generic `<div>` tags are placed inside `<table>`.

---

## 📤 Submission

1. Save your completed `portal.html` file in your repository.
2. Commit your file:
   ```bash
   git add portal.html
   git commit -m "Complete Homework 02: Registration portal and table matrix"
   ```
3. Push to GitHub:
   ```bash
   git push
   ```
