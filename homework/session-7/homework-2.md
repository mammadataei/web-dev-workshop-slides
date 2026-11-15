# Homework 02: Student Gradebook & Honors Dashboard ("The Functional View")

> **Deliverable Files:** `gradebook.html` and `gradebook.js`  
> **Topic:** Function Pipelines, Arrays of Objects Traversal (`for...of`), Reusable DOM Row Creation, Multi-Branch Class Toggling, Cohort Analytics Calculation, and Defensive Querying  
> **Prerequisites:** Session 06 (Loops & Objects), Session 07 (Functions & The DOM Bridge)  
> **Submission:** Commit and push `homework/session-7/gradebook.html` and `homework/session-7/gradebook.js` to your repository before Session 08.

---

## 🎯 The Mission

Welcome to the **Student Gradebook & Honors Dashboard** project! 🎓

Educational institutions rely on responsive dashboards to monitor cohort performance. You have been tasked with building the frontend data pipeline that takes raw student records from memory and dynamically renders a live gradebook table with summary metric cards.

Your mission is to write `gradebook.js`:
1. Build pure functions to calculate grade averages, assign letter grades (`A`, `B`, `C`, `D`, `F`), and determine honor-roll status.
2. Calculate aggregate cohort metrics (cohort class average, count of honor students, count of at-risk students).
3. Mount each student dynamically into table rows using safe `document.createElement()` and `textContent`.
4. Apply dynamic badge classes (`badge-honor`, `badge-pass`, `badge-risk`) based on student status.
5. Update summary metric cards in the DOM to reflect computed cohort statistics.

---

## 💻 Starter Templates

### 1. `gradebook.html`
Save this file into `homework/session-7/gradebook.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Session 07 — Student Gradebook & Honors Dashboard</title>
  <style>
    :root {
      --bg: #f8fafc;
      --panel: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --border: #e2e8f0;
      --accent: #4338ca;
      --mint: #15803d;
      --amber: #b45309;
      --rose: #dc2626;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      padding: 48px 24px;
      display: flex;
      justify-content: center;
    }

    .container {
      width: 100%;
      max-width: 900px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .dashboard-header h1 {
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 6px;
    }
    .dashboard-header p {
      color: var(--muted);
      font-size: 16px;
    }

    /* Metric Summary Cards */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .metric-card {
      background: var(--panel);
      padding: 20px;
      border-radius: 14px;
      border: 1px solid var(--border);
      box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    }
    .metric-label {
      font-size: 13px;
      font-weight: 700;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .metric-value {
      font-size: 32px;
      font-weight: 800;
      color: var(--text);
    }

    /* Data Table */
    .table-card {
      background: var(--panel);
      border-radius: 16px;
      border: 1px solid var(--border);
      overflow: hidden;
      box-shadow: 0 4px 20px -2px rgba(0,0,0,0.05);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }
    th {
      background: #f1f5f9;
      padding: 16px 20px;
      font-size: 13px;
      font-weight: 700;
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      border-bottom: 1px solid var(--border);
    }
    td {
      padding: 16px 20px;
      font-size: 15px;
      border-bottom: 1px solid var(--border);
      color: var(--text);
    }
    tr:last-child td {
      border-bottom: none;
    }
    tr:hover {
      background: #fafafa;
    }

    .badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 700;
    }
    .badge-honor {
      background: rgba(21, 128, 61, 0.12);
      color: var(--mint);
    }
    .badge-pass {
      background: rgba(67, 56, 202, 0.1);
      color: var(--accent);
    }
    .badge-risk {
      background: rgba(220, 38, 38, 0.12);
      color: var(--rose);
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="dashboard-header">
      <h1>Cohort Performance Dashboard</h1>
      <p>Dynamic DOM rendering via JavaScript function pipelines</p>
    </header>

    <!-- Metrics Summary -->
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-label">Cohort Average</div>
        <div id="stat-cohort-avg" class="metric-value">--%</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Honor Students</div>
        <div id="stat-honors-count" class="metric-value">--</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">At-Risk Students</div>
        <div id="stat-risk-count" class="metric-value">--</div>
      </div>
    </div>

    <!-- Student Table -->
    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Major</th>
            <th>Average</th>
            <th>Grade</th>
            <th>Academic Status</th>
          </tr>
        </thead>
        <tbody id="gradebook-tbody">
          <!-- Dynamically inserted <tr> rows -->
        </tbody>
      </table>
    </div>
  </div>

  <script src="./gradebook.js"></script>
</body>
</html>
```

---

### 2. `gradebook.js`
Save this file into `homework/session-7/gradebook.js` and complete the pipeline:

```javascript
/**
 * Session 07 - Homework 02: Student Gradebook & Honors Dashboard
 * Deliverable: gradebook.js
 */

// ─── Step 1: Raw Student Cohort Dataset ───────────────────────────────────────
const STUDENTS_COHORT = [
  { id: 101, name: "Sara Al-Mansoor", major: "Software Engineering", scores: [94, 98, 92], attendance: 97 },
  { id: 102, name: "Marcus Brody",    major: "Computer Science",     scores: [82, 79, 85], attendance: 88 },
  { id: 103, name: "Elena Rostova",   major: "Data Analytics",       scores: [60, 58, 64], attendance: 75 },
  { id: 104, name: "Tariq Mahmoud",   major: "Cybersecurity",        scores: [90, 88, 95], attendance: 95 },
  { id: 105, name: "Chloe Dupont",    major: "Web Development",      scores: [50, 45, 52], attendance: 65 },
];

// ─── Step 2: Pure Calculation Helper Functions ────────────────────────────────

/**
 * Task 2A: calculateAverage(scores)
 * - Sums scores array and returns the average rounded to 1 decimal place.
 * - Handles empty array guard: returns 0 if scores length is 0.
 */
function calculateAverage(scores) {
  if (!scores || scores.length === 0) return 0;
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return Number((sum / scores.length).toFixed(1));
}

/**
 * Task 2B: getLetterGrade(avg)
 * - >= 90: "A"
 * - >= 80: "B"
 * - >= 70: "C"
 * - >= 60: "D"
 * - < 60:  "F"
 */
function getLetterGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
}

/**
 * Task 2C: getAcademicStatus(avg, attendance)
 * - Returns an object with { label: string, badgeClass: string }
 * - If avg >= 90 && attendance >= 90 -> { label: "Honor Roll", badgeClass: "badge-honor" }
 * - If avg < 60 || attendance < 70 -> { label: "Academic Warning", badgeClass: "badge-risk" }
 * - Else -> { label: "Good Standing", badgeClass: "badge-pass" }
 */
function getAcademicStatus(avg, attendance) {
  if (avg >= 90 && attendance >= 90) {
    return { label: "Honor Roll", badgeClass: "badge-honor" };
  }
  if (avg < 60 || attendance < 70) {
    return { label: "Academic Warning", badgeClass: "badge-risk" };
  }
  return { label: "Good Standing", badgeClass: "badge-pass" };
}

// ─── Step 3: DOM Row Builder Function ─────────────────────────────────────────

/**
 * Task 3: createStudentRow(student)
 * Builds and returns a <tr> element populated with student data.
 * Pure DOM construction using textContent to prevent XSS.
 */
function createStudentRow(student) {
  const avg = calculateAverage(student.scores);
  const grade = getLetterGrade(avg);
  const status = getAcademicStatus(avg, student.attendance);

  const tr = document.createElement("tr");

  // 1. Name cell
  const tdName = document.createElement("td");
  tdName.textContent = student.name;
  tdName.style.fontWeight = "600";
  tr.appendChild(tdName);

  // 2. Major cell
  const tdMajor = document.createElement("td");
  tdMajor.textContent = student.major;
  tr.appendChild(tdMajor);

  // 3. Average cell
  const tdAvg = document.createElement("td");
  tdAvg.textContent = `${avg}%`;
  tr.appendChild(tdAvg);

  // 4. Letter Grade cell
  const tdGrade = document.createElement("td");
  tdGrade.textContent = grade;
  tdGrade.style.fontWeight = "700";
  tr.appendChild(tdGrade);

  // 5. Status Badge cell
  const tdStatus = document.createElement("td");
  const badge = document.createElement("span");
  badge.className = `badge ${status.badgeClass}`;
  badge.textContent = status.label;
  tdStatus.appendChild(badge);
  tr.appendChild(tdStatus);

  return tr;
}

// ─── Step 4: Render Dashboard & Cohort Metrics ────────────────────────────────

function renderDashboard(students) {
  const tbody = document.querySelector("#gradebook-tbody");
  const cohortAvgEl = document.querySelector("#stat-cohort-avg");
  const honorsCountEl = document.querySelector("#stat-honors-count");
  const riskCountEl = document.querySelector("#stat-risk-count");

  if (!tbody) return;

  // Clear existing content safely
  tbody.textContent = "";

  let totalAvgSum = 0;
  let honorsCount = 0;
  let riskCount = 0;

  for (const student of students) {
    const avg = calculateAverage(student.scores);
    const status = getAcademicStatus(avg, student.attendance);

    totalAvgSum += avg;
    if (status.badgeClass === "badge-honor") honorsCount++;
    if (status.badgeClass === "badge-risk") riskCount++;

    const row = createStudentRow(student);
    tbody.appendChild(row);
  }

  // Update Summary Metrics
  const cohortAverage = students.length > 0 ? (totalAvgSum / students.length).toFixed(1) : 0;
  if (cohortAvgEl) cohortAvgEl.textContent = `${cohortAverage}%`;
  if (honorsCountEl) honorsCountEl.textContent = String(honorsCount);
  if (riskCountEl) riskCountEl.textContent = String(riskCount);
}

// ─── Step 5: Mount Dashboard ──────────────────────────────────────────────────
renderDashboard(STUDENTS_COHORT);

// ─── Step 6: Automated Verification Checks ────────────────────────────────────
console.log("--- 🧪 Session 07 Homework 02 Verification Suite ---");
console.assert(calculateAverage([100, 80]) === 90, "calculateAverage standard test failed!");
console.assert(calculateAverage([]) === 0, "calculateAverage empty array test failed!");
console.assert(getLetterGrade(95) === "A", "getLetterGrade A test failed!");
console.assert(getLetterGrade(58) === "F", "getLetterGrade F test failed!");
console.assert(getAcademicStatus(92, 95).badgeClass === "badge-honor", "getAcademicStatus honor test failed!");
console.assert(getAcademicStatus(50, 80).badgeClass === "badge-risk", "getAcademicStatus risk test failed!");
console.log("✅ All student analytics assertions passed successfully!");
```

---

## 📋 Evaluation Checklist

- [ ] `calculateAverage()` computes accurate averages and handles empty lists gracefully.
- [ ] `getLetterGrade()` implements the standard 5-tier grading scale.
- [ ] `createStudentRow()` constructs DOM nodes cleanly without hardcoding brittle HTML strings.
- [ ] Safe `textContent` is applied to all text cells to prevent script injection.
- [ ] Badges correctly reflect honors, good standing, and academic warning.
- [ ] Top metric cards update to show the accurate cohort average, honor count, and at-risk count.
- [ ] Built-in console assertions pass without errors.
