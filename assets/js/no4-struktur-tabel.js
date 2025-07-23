"use strict";

// A
// Added a new row with the name of charlie and the value of 92
const tbody = document.querySelector("#data-table tbody");
const newRow = document.createElement("tr");
newRow.innerHTML = "<td>Carlie</td><td>92</td>";
tbody.append(newRow);

// B
tbody.querySelector("tr:nth-child(2) td:nth-child(2)").textContent = "89";

// C
// Add "top-scorer" class to alice
tbody.querySelector("tr:nth-child(1)").classList.add("top-scorer");

// D
// Dapatkan nilai rata-rata
let sum = 0,
  count = 0;
tbody.querySelectorAll("tr").forEach((tr) => {
  sum += parseInt(tr.cells[1].textContent);
  count++;
});
const average = sum / count;

const tfoot = document.createElement("tfoot");
tfoot.innerHTML = `<tr><td>Average</td><td>${average}</td></tr>`;
document.querySelector("#data-table").append(tfoot);
