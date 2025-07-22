"use strict";

// const selector = ".data-table";
const tbody = document.querySelector("#data-table tbody");

const newRow = document.createElement("tr");

const newTd = document.createElement("td");
const newText = document.createTextNode("Carlie");
newTd.append(newText);

const newTd2 = document.createElement("td");
const newText2 = document.createTextNode("92");
newTd2.append(newText2);

newRow.append(newTd);
newRow.append(newTd2);

tbody.append(newRow);

// b
const bob = document.querySelector(
  "#data-table tbody tr:nth-child(2) td:nth-child(2)"
);
bob.innerHTML = "89";

// c
const alice = document.querySelector("#data-table tbody tr:nth-child(1)");
alice.classList.add("top-scorer");

// d
// Dapatkan nilai rata-rata
let sum = 0;
let count = 0;

const allScore = document.querySelectorAll("#data-table tbody tr");
// console.log(allScore);
allScore.forEach((element) => {
  console.log(element);
  sum = sum + parseInt(element.cells[1].firstChild.data);
  count++;
});

const average = sum / count;
console.log(average);
// Tambahkan footer
const table = document.querySelector("#data-table");
const addTFoot = document.createElement("tfoot");
const addTR = document.createElement("tr");

// TD average score
const tdAverageData = document.createElement("td");
const textAverage = document.createTextNode(average);

const trAverage = document.createElement("td");
const textTRAverage = document.createTextNode("Average");

tdAverageData.append(textAverage);

trAverage.append(textTRAverage);
addTR.append(trAverage);
addTR.append(tdAverageData);
addTFoot.append(addTR);
table.append(addTFoot);
