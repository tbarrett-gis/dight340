// Ex 3 completed — this is refactored but still works.
const output = document.getElementById("output");

// Class Scores by Person
const record = [
  { name: "Ada", score1: 94, score2: 88, score3: 92 },
  { name: "Grace", score1: 78, score2: 85, score3: 81 },
  { name: "Alan", score1: 72, score2: 65, score3: 69 },
]

// Averaging Function (Declaration)
function avg(a, b, c) {
  const average = ((a + b + c) / 3);
  return average;
}

// Rounding Function (Function Expression)
const rnd = function (value, places = 1) {
  return Math.round((value) * 10 ** places) / 10 ** places;
};

// Letter Assignment Function (Declaration)
function ltr(rounded) {
  if (rounded >= 90) {
    return "A";
  } else if (rounded >= 80) {
    return "B";
  } else if (rounded >= 70) {
    return "C";
  } else if (rounded >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Format Function (Arrows)
const frmt = (averaged, rounded, graded) => `${averaged}: ${rounded} (${graded})\n`;

// Final Printout
let lines = "DigHT 340 — Grade Report\n------------------------\n";
let classTotal = 0;

for (const details of record) {
  const n = details.name;
  const a = avg(details.score1, details.score2, details.score3); // holds the averaged score
  const r = rnd(a); // passes the averaged number into the rounder
  const g = ltr(r); // calls the rounded number and generates the letter
  lines += frmt(n, r, g);
  classTotal += a;
}

// Whole class
const classAverage = rnd(classTotal / 3, 2);
lines += "------------------------\n";
lines += `Class average: ${classAverage}\n`;
output.textContent = lines