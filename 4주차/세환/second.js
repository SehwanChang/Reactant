"use strict";

const countriesContainer = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");
//Where am I  : lat, lng 이용

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=113481022370462e15969969x113003`
//   )
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city} , ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);
//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message}`));
// };
// whereAmI(43.06877, 141.35096);

//Getting my position
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
        <p class="country__row"><span>🗣️</span>${
          data.languages[languagekey]
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[currencykey].name
        }</p>
      </div>
    </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
/* promise 사용한 whereami */
// const whereAmI = function () {
//   getPosition().then((pos) => {
//     const { latitude: lat, longitude: lng } = pos.coords;
//     return fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=113481022370462e15969969x113003`
//     )
//       .then((res) => {
//         if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         console.log(`You are in ${data.city} , ${data.country}`);
//         return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//       })
//       .then((res) => {
//         if (!res.ok) throw new Error(`Country not found ${res.status}`);
//         return res.json();
//       })
//       .then((data) => renderCountry(data[0]))
//       .catch((err) => console.error(`${err.message}`));
//   });
// };

// Refactor using async / await : promise 를 좀 더 간단하게

const renderError = function (msg) {
  countriesContainer.insertAdjacentElement("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=113481022370462e15969969x113003`
    );
    const dataGeo = await resGeo.json();
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error(`Problem getting location data `);

    const data = await res.json(); //parsing
    console.log(data);
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);
    throw err;
  }
};

btn.addEventListener("click", whereAmI);
