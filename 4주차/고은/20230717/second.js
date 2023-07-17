"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
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
              ).toFixed(1)} people</p> <!--toFixed 소수점 아래 한자리까지-->
              
              <p class="country__row"><span>🗣️</span>${
                data.languages[languagekey]
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[currencykey].name
              }</p>
            </div>
          </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html); //div가 끝나기 전에 마지막 자식요소로 들어감
  countriesContainer.style.opacity = 1;
};
//https://geocode.xyz/
//whereAmI using lat,lng
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
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);
//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message}`));
// };
// whereAmI(37.56291, 126.98249);

//Getting my position
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then((res) => console.log(res));

//Build WhereAmI using My position
// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=113481022370462e15969969x113003`
//       );
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);
//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message}`));
// };

//Refactor using async/await
const whereAmI = async function () {
  try {
    const pos = await getPosition(); //await은  .then 과 비슷
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=113481022370462e15969969x113003`
    );
    console.log(resGeo);
    const dataGeo = await resGeo.json(); //parsing
    console.log(dataGeo);
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    console.log(res);
    if (!res.ok) throw new Error("Problem getting location data");
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`${err.message}`);
    throw err;
  }
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

btn.addEventListener("click", whereAmI);
