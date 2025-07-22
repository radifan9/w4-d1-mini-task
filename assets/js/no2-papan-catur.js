let papanCatur = [];
let row = "ganjil";
const body = document.querySelector(".papan-catur");

for (let i = 1; i <= 64; i++) {
  if (row == "ganjil") {
    if (!(i % 2 == 0)) {
      // Ganjil, masukkan putih
      const newPutih = document.createElement("div");
      newPutih.classList.add("putih");
      body.append(newPutih);
    } else {
      // Genap, masukkan hitam
      const newHitam = document.createElement("div");
      newHitam.classList.add("hitam");
      body.append(newHitam);
    }
  } else {
    if (!(i % 2 == 0)) {
      // Genap, masukkan hitam
      const newHitam = document.createElement("div");
      newHitam.classList.add("hitam");
      body.append(newHitam);
    } else {
      // Ganjil, masukkan putih
      const newPutih = document.createElement("div");
      newPutih.classList.add("putih");
      body.append(newPutih);
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
