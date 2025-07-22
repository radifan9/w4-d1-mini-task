// Mulai dengan lampu merah
let currentLamp = "merah";

const delayLampuLaluLintas = (currentLamp) => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    switch (currentLamp) {
      case "merah":
        // Jika sekarang warna merah maka kasih delay 3s sebelum ke kuning
        setTimeout(() => {
          console.log(`Delay waktu : ${Date.now() - startTime} ms`);
          resolve("kuning");
        }, 3000);
        break;

      case "kuning":
        setTimeout(() => {
          console.log(`Delay waktu : ${Date.now() - startTime} ms`);
          resolve("hijau");
        }, 2000);
        break;

      case "hijau":
        setTimeout(() => {
          console.log(`Delay waktu : ${Date.now() - startTime} ms`);
          resolve("merah");
        }, 3000);
        break;
    }
  });
};

const jalankanLampuLaluLintas = async (currentLamp) => {
  try {
    while (true) {
      console.log(`Lampu sekarang yang nyala : ${currentLamp}`);
      currentLamp = await delayLampuLaluLintas(currentLamp);

      let lampuMerah = document.querySelector(".merah");
      let lampuKuning = document.querySelector(".kuning");
      let lampuHijau = document.querySelector(".hijau");

      switch (currentLamp) {
        case "merah":
          lampuHijau.classList.toggle("hijau-nyala");
          lampuMerah.classList.add("merah-nyala");
          break;

        case "kuning":
          lampuMerah.classList.toggle("merah-nyala");
          lampuKuning.classList.add("kuning-nyala");
          break;

        case "hijau":
          lampuKuning.classList.toggle("kuning-nyala");
          lampuHijau.classList.add("hijau-nyala");
          break;
      }
    }
  } catch (error) {
    console.error(error);
  }
};

jalankanLampuLaluLintas(currentLamp);
