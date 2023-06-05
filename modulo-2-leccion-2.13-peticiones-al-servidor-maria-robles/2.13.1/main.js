'use strict';

//Ejercicio 1

fetch('https://api.rand.fun/number/integer')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.body.innerHTML = data.result;
  });

//Con parámetros en la URL

fetch('https://api.rand.fun/number/integer?min=10&max=100')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.body.innerHTML = data.result;
  });