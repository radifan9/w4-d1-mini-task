let papanCatur = [];
let row = "ganjil";

for (let i = 1; i <= 64; i++) {
  if (row == "ganjil") {
    if (!(i % 2 == 0)) {
      // Ganjil, masukkan putih
      const newPutih = document.createElement("div");
      newPutih.classList.add("putih");
      // papanCatur.push(newPutih);
      papanCatur.append(newPutih);
    } else {
      // Genap, masukkan hitam
      const newHitam = document.createElement("div");
      newHitam.classList.add("hitam");
      // papanCatur.push(newHitam);
    }
  } else {
    if (!(i % 2 == 0)) {
      // Genap, masukkan hitam
      const newHitam = document.createElement("div");
      newHitam.classList.add("hitam");
      // papanCatur.push(newHitam);
    } else {
      // Ganjil, masukkan putih
      const newPutih = document.createElement("div");
      newPutih.classList.add("putih");
      // papanCatur.push(newPutih);
    }
  }

  if (i % 8 == 0) {
    if (row == "ganjil") {
      row = "genap";
    } else {
      row = "ganjil";
    }
  }
}

const body = document.querySelector(".papan-catur");
body.append(papanCatur);
