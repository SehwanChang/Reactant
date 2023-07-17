"use strict";

const countriesContainer = document.querySelector(".countries");

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const langugekey = Object.keys(data.languages)[0];
//     const currencykey = Object.keys(data.currencies)[0];
//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[langugekey]}</p>
//         <p class="country__row"><span>💰</span>${
//           data.currencies[currencykey].name
//         }</p>
//       </div>
//     </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const renderCountry = function (data, className = "") {
  const langugekey = Object.keys(data.languages)[0];
  const currencykey = Object.keys(data.currencies)[0];
  const html = `
      <article class="countr ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${
            data.languages[langugekey]
          }</p>
          <p class="country__row"><span>💰</span>${
            data.currencies[currencykey].name
          }</p>
        </div>
      </article>`;
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
//     renderCountry(data);
//     // Get neighbour country (2)

//     const [neighbour] = data.borders;

//     if (!neighbour) return;
//     // AJAX call country (2)
//     const request = new XMLHttpRequest();
//     request.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request.send();
//     request.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("france");

// Refactor using async, await 

const whereAmI = async function (){
  try{
    const pos = await getPosition();
    const {latitude: lat, longitude : lng} = pos.coords;
    const resGeo = await fetch('http')
  }
}

const getCountryData = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      console.log(data);
      const [neighbour] = data[0].borders;
      console.log(neighbour);
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], "neighbour"));
};

getCountryData("usa");
