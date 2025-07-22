// Mulai dengan lampu red-light
let currentLamp = "red-light";

const delayTrafficLight = (currentLamp) => {
  return new Promise((resolve) => {
    const startTime = Date.now(); //
    switch (currentLamp) {
      case "red-light":
        // Jika sekarang warna red-light maka kasih delay 3s sebelum ke yellow-light
        setTimeout(() => {
          console.log(`Delay waktu : ${Date.now() - startTime} ms`);
          resolve("yellow-light");
        }, 3000);
        break;

      case "yellow-light":
        setTimeout(() => {
          console.log(`Delay waktu : ${Date.now() - startTime} ms`);
          resolve("green-light");
        }, 2000);
        break;

      case "green-light":
        setTimeout(() => {
          console.log(`Delay waktu : ${Date.now() - startTime} ms`);
          resolve("red-light");
        }, 3000);
        break;
    }
  });
};

const jalankanLampuLaluLintas = async (currentLamp) => {
  try {
    while (true) {
      console.log(`Lampu sekarang yang nyala : ${currentLamp}`);
      currentLamp = await delayTrafficLight(currentLamp);

      let redLight = document.querySelector(".red-light");
      let yellowLight = document.querySelector(".yellow-light");
      let greenLight = document.querySelector(".green-light");

      switch (currentLamp) {
        case "red-light":
          greenLight.classList.toggle("green-light-nyala");
          redLight.classList.add("red-light-nyala");
          break;

        case "yellow-light":
          redLight.classList.toggle("red-light-nyala");
          yellowLight.classList.add("yellow-light-nyala");
          break;

        case "green-light":
          yellowLight.classList.toggle("yellow-light-nyala");
          greenLight.classList.add("green-light-nyala");
          break;
      }
    }
  } catch (error) {
    console.error(error);
  }
};

jalankanLampuLaluLintas(currentLamp);
