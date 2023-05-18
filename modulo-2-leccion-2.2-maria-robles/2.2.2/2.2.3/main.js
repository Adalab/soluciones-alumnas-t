'use strict';

const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const listaPerretes = document.querySelector('.listaPerretes');

listaPerretes.innerHTML = `
<li class=perri1>La primera perrita se llama ${firstDogName} y esta es su foto: <img src="${firstDogImage}"><li class=perri2>La segunda perrita se llama ${secondDogName} y esta es su foto: <img src="${secondDogImage}"><li class=perri3>La tercera perrita se llama ${thirdDogName} y esta es su foto: <img src="${thirdDogImage}">`;


//

const miNombre = 'María Robles Bermúdez ';

console.log('Mi nombre es ' + miNombre + 'y tiene ' + miNombre.length + ' caracteres. ')

//




