# Session 02 — Homework Assignments

Welcome to the homework for **Session 02: Semantic HTML5, DOM Tree Architecture & Strategic AI**!

In this session, you learned how web pages are built from the inside out: how tags create a nested family tree called the **DOM (Document Object Model)**, why using meaningful **semantic tags** makes your site accessible to everyone, and how to work with AI like a smart engineer rather than blindly trusting it.

These two homework projects let you put those concepts into practice by building two real web pages from scratch.

---

## 📋 The Assignments at a Glance

| Assignment | File Name | What You Will Build | Key HTML Concepts |
| :--- | :--- | :--- | :--- |
| **[Homework 1: Event Showcase Card](./homework-1.md)** | `event.html` | An accessible landing page for an upcoming tech conference, concert, or workshop. | `<!DOCTYPE html>`, `<header>`, `<nav>`, `<main>`, `<article>`, `<img>` with `alt`, `<button>`, `<footer>` |
| **[Homework 2: Event Registration & Schedule Portal](./homework-2.md)** | `portal.html` | A full conference portal combining a registration form and a structured workshop schedule. | `<form>`, `<label for>`, `<input>`, `<select>`, `<textarea>`, `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th scope>` |

---

## 🌟 3 Golden Rules to Remember

Before you write a single line of code, keep these three rules pinned to your desk:

### 1. The Russian Nesting Dolls Rule (Tag Hierarchy)
HTML tags are like Russian nesting dolls: tags must close in the reverse order they opened.
```html
<!-- ✅ CORRECT: article is inside main, p is inside article -->
<main>
  <article>
    <p>Event details go here.</p>
  </article>
</main>

<!-- ❌ WRONG: overlapping tags confuse the browser! -->
<main>
  <article>
    <p>Event details go here.</main>
  </article>
</p>
```

### 2. The Doorman Rule: Links vs. Buttons
Ask yourself: **Where does this click lead?**
- **Navigating to a new page or section?** Use an anchor tag: `<a href="...">Link Text</a>`.
- **Performing an action on the page (submitting, opening, clicking)?** Use a button: `<button type="button">Click Me</button>`.
- **Never use `<div onclick="...">`!** A `<div>` is an invisible generic box. Screen readers and keyboards cannot recognize it as clickable.

### 3. The Label Contract
Every form input must have a `<label>` whose `for` attribute matches the input's `id`.
```html
<!-- ✅ Clicking the word "Name" automatically puts your cursor inside the text box -->
<label for="user-name">Your Full Name:</label>
<input type="text" id="user-name" name="name" required>
```

---

## 🤖 How to Use AI on Your Homework

In modern web development, you are the **lead architect** and the AI is your **junior assistant**.

1. **Write the page structure yourself:** Do not ask AI to generate your entire page for you. If you don't write the skeleton yourself, you won't build the muscle memory.
2. **Use AI for specific mock data:** When you need realistic event sessions or table rows, prompt AI with strict instructions.
3. **Always run the 3-Point Audit before copying code:**
   - 🔍 **Landmark Check:** Did the AI use `<header>`, `<nav>`, `<main>`, `<article>` — or did it lazily spit out generic `<div>` soup?
   - 🔍 **Interaction Check:** Did it give you real `<button>` elements, or fake `<div onclick>` / `<a href="#">` hacks?
   - 🔍 **Attribute Check:** Did it remember descriptive `alt="..."` attributes on images, and matching `<label for="...">` on every form input?

---

## 🛠️ Recommended Tools & Workflow

1. **Editor:** [VS Code](https://code.visualstudio.com/)
2. **Extension:** **Live Server** (by Ritwick Dey)
   - Right-click your `.html` file and click **"Open with Live Server"**.
   - Your page will automatically refresh whenever you save your file!
3. **Browser:** Google Chrome
   - Open Developer Tools by pressing `F12` (or `Cmd + Option + I` on Mac / `Ctrl + Shift + I` on Windows).
   - Use the **Elements tab** to inspect your DOM tree.
   - Use your **Tab key** on your keyboard to test if you can navigate through all links, buttons, and inputs without touching your mouse.

---

## 🚀 Get Started!

Click on the assignment you want to start:
- 📄 **[Go to Homework 1: The Accessible Event Showcase Card (`event.html`)](./homework-1.md)**
- 📄 **[Go to Homework 2: Conference Registration & Schedule Portal (`portal.html`)](./homework-2.md)**
