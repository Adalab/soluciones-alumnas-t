'use strict';

// Ejercicio 1. Practicando

for (let i = 1; i < 11; i++) {
    console.log('Voy por la vuelta ' + i);
}

let acc = 0;

for (let i = 0; i < 10; i = i+2) {
    acc += i;
}

console.log('El resultado es ' + acc);

// Ejercicio 2. La media

// a y b

const numbers = [1, 2, 3, 4, 5, 6];

let acc2 = 0;

for (let i = 0; i < numbers.length; i++) {
    acc2 += numbers[i] / numbers.length;
}

console.log('La media es ' + acc2);

// c

const numbers2 = [10, 20, 50, 5];

function average (array) {
    let acc3 = 0;
    for (let i = 0; i < array.length; i++) {
    acc3 += array[i];
}
    return acc3 / array.length;
}

console.log(average(numbers));
console.log(average(numbers2));

// Ejercicio 3. Tenemos mucho en común

const btn = document.querySelector('.js_btn');
const favBookText = document.querySelector('.js_text');
const favBook1Input = document.querySelector('.js_input1');
const favBook2Input = document.querySelector('.js_input2');
let book1 = '';
let book2 = '';

function handleClick(event) {
    event.preventDefault();
    book1 = favBook1Input.value;
    book2 = favBook2Input.value;
    const favBooks = [book1, book2];
    for (const book of favBooks) {
        favBookText.innerHTML += `¡A mí también me encantó ${book}! Tenemos mucho en común, humana. `;
    }
}

btn.addEventListener('click', handleClick);







