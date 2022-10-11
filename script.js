"use strict";

let state = true;
document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".profile-english").classList.toggle("disabled");
  document.querySelector(".profile-portuguese").classList.toggle("disabled");
  if (state) {
    document.querySelector(".set--language").textContent = "Português";
    state = false;
    console.log(state);
  } else {
    document.querySelector(".set--language").textContent = "English";
    state = true;
    console.log(state);
  }
});
