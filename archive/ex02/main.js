const output = document.getElementById("output");

for (let i = 1; i <= 60; i++) {
  if (i % 12 === 0) {
    output.textContent += `Go Cougars!\n`;
  }
  else if (i % 3 === 0) {
    output.textContent += `Go\n`;
  } 
  else if (i % 4 === 0) {
    output.textContent += `Cougars\n`;
  }
  else output.textContent += i + `\n`;
}