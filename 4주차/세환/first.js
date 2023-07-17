"use strict";

const countriesContainer = document.querySelector(".countries");

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`); // 요청할 data 구체화
//   request.send(); // 요청하는
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const languagekey = Object.keys(data.languages)[0];
//     const currencykey = Object.keys(data.currencies)[0];

//     const html = `
//     <article class="country">
//     <img class="country__img" src=" ${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         data.population / 1000000
//       ).toFixed(1)} people </p>
//       <p class="country__row"><span>🗣️</span>${data.languages[languagekey]}</p>
//       <p class="country__row"><span>💰</span>${
//         data.currencies[currencykey].name
//       }</p>
//     </div>
//   </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html); // html 안에 코드를 넣는것
//     countriesContainer.style.opacity = 1;
//   });
// };

const renderCountry = function (data, className = "") {
  const languagekey = Object.keys(data.languages)[0];
  const currencykey = Object.keys(data.currencies)[0];

  const html = `
    <article class="country ${className}"> 
    <img class="country__img" src=" ${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(1)}Million people </p>
      <p class="country__row"><span>🗣️</span>${data.languages[languagekey]}</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[currencykey].name
      }</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html); // html 안에 코드를 넣는것
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`); // 요청할 data 구체화
//   request.send(); // 요청하는
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     if (!data.borders || data.borders.length === 0) return;
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`); // 요청할 data 구체화
//     request2.send(); // 요청하는
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("canada");

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

getCountryData("usa");
