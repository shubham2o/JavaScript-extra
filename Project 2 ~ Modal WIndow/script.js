"use strict";



const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// const btnsCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);



// (OPEN) Function(), classList.remove ~ modal and overlay
const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}



// (CLOSE) Function(), classList.remove ~ modal and overlay
const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}



for (let i = 0; i <= btnsOpenModal.length - 1; i++) {
    console.log(btnsOpenModal[i]);
    console.log(btnsOpenModal[i].textContent);

    // (OPEN) Button
    btnsOpenModal[i].addEventListener("click", openModal)

    // (CLOSE) Button
    document.querySelector(".close-modal").addEventListener("click", closeModal);

    // (CLOSE) Overlay
    overlay.addEventListener("click", closeModal);
}