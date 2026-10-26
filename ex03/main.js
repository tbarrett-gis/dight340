// Ex 3 starter — this works. It also repeats itself. Fix that.
const output = document.getElementById("output");

output.textContent += "DigHT 340 — Grade Report\n";
output.textContent += "------------------------\n";

// Student 1
const name1 = "Ada";
const average1 = Math.round(((94 + 88 + 92) / 3) * 10) / 10;
let letter1;
if (average1 >= 90) {
  letter1 = "A";
} else if (average1 >= 80) {
  letter1 = "B";
} else if (average1 >= 70) {
  letter1 = "C";
} else if (average1 >= 60) {
  letter1 = "D";
} else {
  letter1 = "F";
}
output.textContent += `${name1}: ${average1} (${letter1})\n`;

// Student 2
const name2 = "Grace";
const average2 = Math.round(((78 + 85 + 81) / 3) * 10) / 10;
let letter2;
if (average2 >= 90) {
  letter2 = "A";
} else if (average2 >= 80) {
  letter2 = "B";
} else if (average2 >= 70) {
  letter2 = "C";
} else if (average2 >= 60) {
  letter2 = "D";
} else {
  letter2 = "F";
}
output.textContent += `${name2}: ${average2} (${letter2})\n`;

// Student 3
const name3 = "Alan";
const average3 = Math.round(((72 + 65 + 69) / 3) * 10) / 10;
if (average3 >= 90) {
  var letter3 = "A";
} else if (average3 >= 80) {
  var letter3 = "B";
} else if (average3 >= 70) {
  var letter3 = "C";
} else if (average3 >= 60) {
  var letter3 = "D";
} else {
  var letter3 = "F";
}
output.textContent += `${name3}: ${average3} (${letter3})\n`;

// Whole class
const classAverage =
  Math.round(((94 + 88 + 92 + 78 + 85 + 81 + 72 + 65 + 69) / 9) * 100) / 100;
output.textContent += "------------------------\n";
output.textContent += `Class average: ${classAverage}\n`;
