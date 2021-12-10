console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
document.querySelectorAll(".section");

document.getElementById("#section--1");

document.getElementsByTagName("button");

document.getElementsByClassName("btn");

// Creating and Inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
message.textContent = "We use cookied for improved functionality and analytics.";
// to read and set content, use innerHTML
message.innerHTML = 
    "We use cookied for improved functionality and analytics. <button class = "btn btn--close--cookie">Got it!</button>";

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document.querySelector(".btn--close-cookie").addEventListener("click", function() {
    // message.remove();
    message.parentElement.removeChild(message);
});