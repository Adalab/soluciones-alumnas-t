'use strict';

//Ejercicio 1

const button = document.querySelector('.button');
const userName = document.querySelector('.name');
let messageGreetings = document.querySelector('.greetings');


button.addEventListener ('click', () => {
    messageGreetings.innerHTML = 'Hola ' + userName.value;
})

//Ejercicio 2

const changingButton = document.querySelector('.button2');

//addEventListener al hacer click en el botón
//añadir o quitar la clase .button2-style al hacer click
changingButton.addEventListener('click', () => {
    changingButton.classList.toggle('style');
})

//Ejercicio 3

const loremText = document.querySelector('.text-1');
const loremTextB = document.querySelector('.text-2');

loremText.addEventListener('click', () => {
    loremTextB.classList.toggle('hidden');
})


