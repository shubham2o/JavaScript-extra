"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i <= btnsOpenModal.length - 1; i++) {
    console.log(btnsOpenModal[i]);
    console.log(btnsOpenModal[i].textContent);
}