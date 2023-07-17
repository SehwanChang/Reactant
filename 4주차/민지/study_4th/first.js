"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const languagekey = Object.keys(data.languages)[0];
//     const currencykey = Object.keys(data.currencies)[0];
//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${
//           data.languages[languagekey]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           data.currencies[currencykey].name
//         }</p>
//       </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("usa");

// 여기까지가 하나 불러오는 코드

const renderCountry = function (data, className = "") {
  const languagekey = Object.keys(data.languages)[0];
  const currencykey = Object.keys(data.currencies)[0];
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${
            data.languages[languagekey]
          }</p>
          <p class="country__row"><span>💰</span>${
            data.currencies[currencykey].name
          }</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country (1)
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render country (1)
//     renderCountry(data);
//     // Get neighbour country (2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return; //자기호출??
//     // AJAX call country (2)
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       // Render country (2)
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("usa");

const getCountryData = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const [neighbour] = data[0].borders;
      console.log(neighbour);
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], "neighbour"));
};

getCountryData("korea");

