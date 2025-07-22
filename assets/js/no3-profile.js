"use strict";

const profile = {
  name: "John Doe",
  age: 30,
  profession: "Web Developer",
  hobbies: ["Reading", "Hiking", "Photography"],
};

// Buat div dengan class profile-card
const divProfile = document.createElement("div");
divProfile.classList.add("profile-card");

// const card = document.querySelector(".profile-card");

// Elemen h2
const h2 = document.createElement("h2");
const h2Text = document.createTextNode(profile.name);
h2.append(h2Text);
divProfile.append(h2);

// Paragraf
const paragraf = document.createElement("p");
const text = document.createTextNode(
  `Saya sekarang berumur ${profile.age}. Saya adalah seorang ${profile.profession} handal di perusahaan multinasional.`
);
paragraf.append(text);
divProfile.append(paragraf);

// Hobby
const ulHobbies = document.createElement("ul");

for (const hobby of profile.hobbies) {
  const hobby1 = document.createElement("li");
  const isiHobby1 = document.createTextNode(hobby);
  hobby1.append(isiHobby1);

  // Masukkan ke ul
  ulHobbies.append(hobby1);
}

// Masukkan ul
divProfile.append(ulHobbies);

const body = document.querySelector("body");
body.append(divProfile);
