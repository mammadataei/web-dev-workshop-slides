# Homework 02: Student Performance Analytics & Profile Processor ("The Data Pipeline")

> **Deliverable File:** `analytics.js`  
> **Topic:** Iteration Mechanics (`for...of`, `while`), Arrays of Objects, Logical Fallbacks (`||`), Multi-Branch `switch` Statements, and Non-Mutating Data Pipelines  
> **Prerequisites:** Session 05 (Variables & Types), Session 06 (Memory References, Conditionals, Loops, Objects & Arrays)  
> **Submission:** Commit and push `homework/session-6/analytics.js` to your repository before Session 07.

---

## 🎯 The Mission

Welcome to the **Student Performance Analytics & Profile Processor** project! 📊

In production web applications, data delivered by databases or APIs often needs to be processed, categorized, and summarized. 

You are tasked with writing `analytics.js` to process an array of student objects:
1. Traverse student records using a `for...of` loop.
2. Clean missing names using logical OR fallbacks (`||`).
3. Compute the student's average grade from their scores array.
4. Categorize letter grades (`"A"`, `"B"`, `"C"`, `"F"`) using a clean `switch` statement or `if/else` ladder.
5. Accumulate total passing students and cohort average — **all while ensuring the raw input records remain 100% unmutated!**

---

## 💻 Starter Template (`analytics.js`)

Copy this code into `homework/session-6/analytics.js` and implement the tasks:

```javascript
/**
 * Session 06 - Homework 02: Student Performance Analytics & Profile Processor
 * File: analytics.js
 */

// ─── Step 1: Raw Student Records (Source of Truth in Heap) ────────────────────
const RAW_STUDENTS = [
  { id: 101, name: "Amina Al-Mansoor", scores: [95, 90, 92], attendance: 98 },
  { id: 102, name: "Carlos Reyes",     scores: [80, 85, 78], attendance: 88 },
  { id: 103, name: "Sara Chen",        scores: [55, 60, 58], attendance: 70 },
  { id: 104, name: "",                 scores: [70, 75, 72], attendance: 85 }, // Missing name
];

// ─── Step 2: Process Cohort Records ───────────────────────────────────────────
const processedCohort = [];
let totalScoreSum = 0;
let passingCount = 0;

for (const student of RAW_STUDENTS) {
  // 1. Fallback for missing name using ||:
  const studentName = student.name || "Unknown Student";

  // 2. Calculate average score using a loop:
  let scoreSum = 0;
  for (const score of student.scores) {
    scoreSum += score;
  }
  const averageScore = Math.round(scoreSum / student.scores.length);
  totalScoreSum += averageScore;

  // 3. Classify letter grade tier:
  let letterGrade = "F";
  if (averageScore >= 90) {
    letterGrade = "A";
  } else if (averageScore >= 80) {
    letterGrade = "B";
  } else if (averageScore >= 70) {
    letterGrade = "C";
  } else {
    letterGrade = "F";
  }

  // 4. Determine passing status (needs average >= 65 AND attendance >= 75):
  const isPassing = averageScore >= 65 && student.attendance >= 75;
  if (isPassing) {
    passingCount++;
  }

  // 5. Push clean cloned record into processedCohort:
  processedCohort.push({
    id: student.id,
    name: studentName,
    averageScore,
    letterGrade,
    isPassing,
  });
}

const cohortClassAverage = Math.round(totalScoreSum / RAW_STUDENTS.length);

// ─── Step 3: Print Executive Summary ──────────────────────────────────────────
console.log("=== COHORT PERFORMANCE REPORT ===");
console.log(`Total Students Processed: ${processedCohort.length}`);
console.log(`Cohort Class Average: ${cohortClassAverage}%`);
console.log(`Passing Students: ${passingCount} / ${processedCohort.length}\n`);

// ─── Automated Verification Suite ─────────────────────────────────────────────
console.log("🧪 Running Verification Tests for analytics.js...\n");

// Test 1: Fallback name test
console.log(processedCohort[3].name === "Unknown Student"
  ? "✅ Test 1 Passed: Empty name successfully resolved to 'Unknown Student'."
  : "❌ Test 1 FAILED: Name fallback did not trigger.");

// Test 2: Grade calculation
console.log(processedCohort[0].averageScore === 92 && processedCohort[0].letterGrade === "A"
  ? "✅ Test 2 Passed: Student 101 classified as Grade A (92%)."
  : "❌ Test 2 FAILED: Grade calculation error.");

// Test 3: Passing count check
console.log(passingCount === 3
  ? "✅ Test 3 Passed: Passing count accurate (3 students passed)."
  : `❌ Test 3 FAILED: Expected 3, got ${passingCount}`);

// Test 4: Verify RAW_STUDENTS is unmutated
const rawSafe = RAW_STUDENTS[3].name === "";
console.log(rawSafe
  ? "✅ Test 4 Passed: Raw student dataset remained completely unmutated."
  : "❌ Test 4 FAILED: Raw dataset was mutated in memory!");

console.log("\n🎉 All analytics tests completed!");
```

---

## 🏆 Grading Rubric

| Criterion | Points | Requirement |
| :--- | :--- | :--- |
| **Data Traversal & Iteration** | 30 pts | `for...of` loop correctly traverses students and computes score averages. |
| **Conditionals & Classification** | 25 pts | Correct mapping of letter grades and passing checks using `&&` and `if/else`. |
| **Fallbacks & Reference Safety** | 25 pts | Uses `||` for missing names; `RAW_STUDENTS` is not mutated. |
| **Verification Execution** | 20 pts | Script runs with `node analytics.js` or `bun run analytics.js` and all tests pass. |
| **Total** | **100 pts** | |
