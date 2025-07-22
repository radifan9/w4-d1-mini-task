let papanCatur = [];
let row = "ganjil"; // Mulai dengan mengisi row 1
const papan = document.querySelector(".papan-catur");

for (let i = 1; i <= 64; i++) {
  // Jika baris ganjil, masukkan putih terlebih dahulu
  if (row == "ganjil") {
    if (!(i % 2 == 0)) {
      // Ganjil, masukkan putih
      const newPutih = document.createElement("div");
      newPutih.classList.add("putih");
      papan.append(newPutih);
    } else {
      // Genap, masukkan hitam
      const newHitam = document.createElement("div");
      newHitam.classList.add("hitam");
      papan.append(newHitam);
    }
  } else {
    // Jika baris genap, masukkan hitam terlebih dahulu
    if (!(i % 2 == 0)) {
      // Genap, masukkan hitam
      const newHitam = document.createElement("div");
      newHitam.classList.add("hitam");
      papan.append(newHitam);
    } else {
      // Ganjil, masukkan putih
      const newPutih = document.createElement("div");
      newPutih.classList.add("putih");
      papan.append(newPutih);
    }
  }

  // If digunakan untuk mengetahui kita sekarang mengisi untuk baris ganjil atau genap
  if (i % 8 == 0) {
    if (row == "ganjil") {
      row = "genap";
    } else {
      row = "ganjil";
    }
  }
}
