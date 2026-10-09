# Homework 01: The Accessible Event Showcase Card

> **Deliverable File:** `event.html`  
> **Topic:** Semantic HTML5, Page Structure & Landmark Accessibility  
> **Prerequisites:** Session 02  
> **Submission:** Push `event.html` to your GitHub repository before the start of Session 03.

---

## 🎯 The Mission

Imagine you are building a landing page for an upcoming event — such as a **tech conference**, a **music festival**, a **design workshop**, or a **community meetup**.

Your goal is to build a standalone, fully accessible web page named `event.html` using **pure Semantic HTML5**.

No CSS styling is required for this homework! Our entire focus is on writing clean, meaningful HTML tags that communicate the structure and meaning of your content to browsers, search engines, and screen readers.

---

## 📐 Page Blueprint (What It Looks Like Conceptually)

Here is a simple map of how your page should be organized:

```text
+-------------------------------------------------------------------+
| <header>                                                          |
|   <h1>City Tech Conference 2026</h1>                              |
|   <nav>                                                           |
|     <ul>                                                          |
|       <li><a href="#schedule">Schedule</a></li>                   |
|       <li><a href="#speakers">Speakers</a></li>                   |
|       <li><a href="#venue">Venue</a></li>                         |
|     </ul>                                                         |
|   </nav>                                                          |
| </header>                                                         |
+-------------------------------------------------------------------+
| <main>                                                            |
|   <article class="event-card">                                    |
|     <img src="..." alt="Description of the event poster">         |
|     <h2>Event Title & Theme</h2>                                  |
|     <p>📅 Date & Time: Saturday, November 14, 2026 at 9:00 AM</p> |
|     <p>📍 Location: Metro Convention Center, Hall B</p>           |
|     <p>Brief event description explaining what attendees will...</p>
|                                                                   |
|     <!-- Schedule items generated with AI assistance -->          |
|     <h3>Featured Schedule Highlights</h3>                         |
|     <ul>                                                          |
|       <li>09:30 AM — Keynote: The Future of the Open Web</li>     |
|       <li>11:00 AM — Workshop: Hands-on Accessibility</li>        |
|       <li>02:00 PM — Panel: Engineering in the AI Era</li>        |
|     </ul>                                                         |
|                                                                   |
|     <button type="button">Register Now / RSVP</button>            |
|   </article>                                                      |
| </main>                                                           |
+-------------------------------------------------------------------+
| <footer>                                                          |
|   <p>© 2026 City Tech Conference. All rights reserved.</p>        |
|   <p>Questions? <a href="mailto:contact@example.com">Email us</a> |
| </footer>                                                         |
+-------------------------------------------------------------------+
```

---

## 📝 Step-by-Step Requirements

### 1. Document Skeleton
Create a file named `event.html` and begin with the standard HTML5 foundation:
- `<!DOCTYPE html>` on line 1: Tells the browser to interpret this file using modern HTML5 standards.
- `<html lang="en">`: The root container, specifying the primary language as English (crucial for screen readers and search engines).
- `<head>`: Contains page metadata:
  - `<meta charset="UTF-8">` for text encoding.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to ensure mobile devices scale the page properly.
  - `<title>`: A descriptive tab title (e.g., `<title>Web Foundations Conference 2026</title>`).
- `<body>`: Contains all visible page content.

### 2. Semantic Header & Navigation
- Wrap the top section in a `<header>` element.
- Add your event name or organization title in an `<h1>` heading.
- Add a `<nav>` element containing an unordered list (`<ul>`):
  - Each item must be an `<li>` containing a clickable hyperlink (`<a href="...">`).
  - Include at least 3 navigation links: `"Schedule"`, `"Speakers"`, and `"Venue"` (e.g., `<a href="#schedule">Schedule</a>`).
  - *Why a list inside `<nav>`?* Screen readers announce navigation lists as: *"Navigation, list of 3 items"*, letting users know exactly how many menu options exist.

### 3. Core Landmark & The Event Card
- Exactly **ONE** `<main>` element per page: This represents the primary, unique content of this specific document.
- Inside `<main>`, place an `<article class="event-card">`:
  - *Why `<article>`?* An article represents a self-contained unit of content that could theoretically be shared, syndicated, or reused on another page.
- Inside the `<article>`, include:
  - **Poster Image (`<img>`):** Include a valid image link (you can use any free image URL or an image from Unsplash, e.g. `https://picsum.photos/600/300`).
    - **Crucial Rule:** The `<img>` tag **must** have a descriptive `alt` attribute explaining what the image shows (e.g., `alt="Modern convention hall filled with developers during keynote"`). Never leave `alt` empty or write `alt="image"`!
  - **Event Heading (`<h2>`):** The name of your conference or event.
  - **Date, Time & Venue (`<p>`):** Clear paragraphs with date, time, and location details.
  - **Event Description (`<p>`):** 2–3 sentences explaining what attendees can expect.

### 4. The Action Button (The "Doorman Rule")
- Add a button for attendees to take action:
  ```html
  <button type="button">Register Now / RSVP</button>
  ```
- ⚠️ **Strict Rule:** Do **NOT** use `<div onclick="...">Register</div>` or `<a href="#">Register</a>`.
- *Why?* Real `<button>` elements are natively accessible:
  1. The browser automatically gives them keyboard focus when pressing the `Tab` key.
  2. Users can trigger them by pressing `Space` or `Enter`.
  3. Screen readers announce: *"Register Now, button"*.
  A `<div>` has none of these superpowers.

### 5. Semantic Footer
- Wrap the bottom section in a `<footer>` element.
- Include a copyright notice using the HTML entity `&copy;` (e.g., `<p>&copy; 2026 Web Dev Workshop. All rights reserved.</p>`).
- Include a contact email hyperlink using the `mailto:` protocol:
  ```html
  <a href="mailto:organizer@example.com">Contact the Organizing Team</a>
  ```

---

## 🤖 The Pragmatic AI Task: Prompt & Audit Drill

For the schedule section inside your event card, practice using AI as a junior assistant:

### Step 1: Send the "Spec Prompt" to AI
Copy and paste this prompt into your favorite AI tool (ChatGPT, Claude, Gemini, etc.):

> *"Generate an accessible HTML list showing 3 realistic workshop schedule sessions for a tech conference (e.g., Keynote, Hands-on Workshop, Panel Discussion). Use an unordered list (`<ul>`) with list items (`<li>`). Include session times in bold (`<strong>`) and speaker names. Do NOT use generic `<div>` containers. Return only clean HTML."*

### Step 2: The 60-Second AI Audit
Before copying the AI's output into your `event.html`, inspect it closely:
1. **Did it use `<ul>` and `<li>`?** If it wrapped items in `<div class="item">`, reject or fix them!
2. **Did it add unnecessary wrapper `<div>`s?** Strip them away. Keep your HTML lean and semantic.
3. **Are tags closed properly?** Check that every `<strong>` and `<li>` has its matching closing tag (`</strong>`, `</li>`).

### Step 3: Embed the Clean HTML
Paste the clean, verified schedule list into your `<article>` above the RSVP button.

---

## 🧪 How to Test Your Work in Google Chrome

Follow these 3 testing steps before submitting:

### 1. View in Live Server
- In VS Code, right-click `event.html` and select **"Open with Live Server"**.
- Your browser will open the page at `http://127.0.0.1:5500/event.html`.

### 2. The Keyboard Tab Test (No Mouse Allowed!)
- Click the browser address bar, then press your **Tab** key repeatedly.
- **Check 1:** Does the focus outline move smoothly from the first navigation link through all three menu items?
- **Check 2:** Does pressing Tab reach the **Register Now** button?
- **Check 3:** With the button highlighted, press **Spacebar** or **Enter**. The button should trigger (it visibly presses down).
- **Check 4:** Does focus reach the email contact link in the footer?
- If any clickable item is skipped by the Tab key, check if you accidentally used a `<div>` instead of a real `<button>` or `<a>`!

### 3. The DevTools DOM Tree Inspection
- Press `F12` (or `Cmd + Option + I` on Mac / `Ctrl + Shift + I` on Windows) to open Chrome Developer Tools.
- In the **Elements** tab, inspect your DOM tree:
  - Verify that `<header>`, `<main>`, and `<footer>` are direct children of `<body>`.
  - Verify that there is **only one** `<main>` tag.
  - Verify that `<article>` is inside `<main>`.

---

## ✅ Self-Evaluation Checklist

Check off every box before pushing your code:

- [ ] **01. Skeleton Check:** Line 1 has `<!DOCTYPE html>`, root has `<html lang="en">`, `<head>` has UTF-8 charset and `<title>`, all visual elements are in `<body>`.
- [ ] **02. Landmarks Check:** Exactly ONE `<main>` element exists. Page has a `<header>`, a `<nav>` with `<ul>`, an `<article>` card, and a `<footer>`.
- [ ] **03. Interaction Check:** Navigation uses `<a href="...">`. Registration uses a native `<button type="button">`. There are ZERO `<div onclick>` elements.
- [ ] **04. Attribute Check:** The `<img>` tag has a descriptive `alt` attribute that paints a picture of the image.
- [ ] **05. AI Audit Check:** The 3 schedule items use semantic `<li>` items and have no unnecessary `<div>` wrappers.
- [ ] **06. Keyboard Test:** You can Tab through all links and the button without touching a mouse.

---

## 📤 Submission

1. Save your completed `event.html` file in your repository.
2. Commit your file:
   ```bash
   git add event.html
   git commit -m "Complete Homework 01: Accessible event card"
   ```
3. Push your branch/commit to GitHub:
   ```bash
   git push
   ```
