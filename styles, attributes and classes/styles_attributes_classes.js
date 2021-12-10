// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

/*
console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(computedStyle(message).height);
*/
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";


// Attributes
const logo = document.querySelector(".nav_logo");
logo.alt = "Beautiful minimalist logo";
logo.getAttribute("src");

const link = document.querySelector(".twitter-link");


// Classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();      // not includes
// Don't use
logo.className = "shubham";