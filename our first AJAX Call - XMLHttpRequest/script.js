"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = " ") {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    // countriesContainer.style.opacity = 1;
};


const renderError = function(msg) {
    countriesContainer.insertAdjacentText("beforeend", msg);
    // countriesContainer.style.opacity = 1;
};


/* // Our first AJAX Call : XMLHttpRequest
const getCountryData = function (country) {
    const btn = document.querySelector(".btn-country");
    const countriesContainer = document.querySelector(".countries");

    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener("load", function() {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
        <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML("beforeend", html);
        countriesContainer.style.opacity = 1;
    });
};
*/

// Welcome to callback hell
const getCountryAndNeighbour = function (country) {
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country 1
        renderCountry(data);

        // Get neighbour country (2)
        const [neighbour] = data.borders; 

        if (!neighbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        
        request2.addEventListener("load", function () {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);

            renderCountry(data2, "neighbour");
        });
    });
}; 

// getCountryAndNeighbour("bharat");


/* // Callback Hell
setTimeout(() => {
    console.log(`1 second passed`);
    setTimeout(() => {
        console.log(`2 second passed`);
        setTimeout(() => {
            console.log(`3 second passed`);
            setTimeout(() => {
                console.log(`4 second passed`);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// Consuming Promises
const request = fetch(`https://restcountries.com/v2/name/portugal`);
console.log(request);


const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        renderCountry(data[0]);
    });
};


// Above code in much more simplied manner || Arrow Function
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
*/

// Chaining Promises
const getCountryData = function (country) {
    // Country 1
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
        response => response.json(), 
        // err => alert(err)
    )
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0]

        if(!neighbour) return;

        // Country 2
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(
        response => response.json(),
        // err => alert(err)
    )
    .then(data => renderCountry(data, "neighbour"))
    .catch(err => {
        console.error(`${err} !! !! !!`);
        renderError(`Something went wrong ❗❗❗ ~ ${err.message}. Try again!`);
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    }); 
};


btn.addEventListener("click", function() {
    getCountryData("bharat");
});

