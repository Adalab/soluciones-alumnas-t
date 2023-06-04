'use strict';
//2.11.1 MÉTODOS ARRAYS
//1. Numeritos A
const numbers = [];
const get100Numbers = () => {
    for (let i = 1; i < 101; i++) {
        numbers.push(i);
    };
};
get100Numbers();
console.log(numbers);

//1. Numeritos B
let numbersReverse = [];
const getReversed100Numbers = () => {
    /*si llamo a la función anterior dentro de esta, me devuelve el array con 200 elementos, los de la original y los de la reverse. No sé por qué, porque numbersReverse -que es el array que logueo en la línea 22- debería guardar solo los reverse*/
    numbersReverse = numbers.reverse();
};
getReversed100Numbers();
console.log(numbersReverse);

//2. The numbers
const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenNumbers = [];
const multiplesOf3Numbers = [];
let concatEvenAndMultipleOf3= [];
const bestLostNomber = () => {
    for (const number of lostNumbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    };
    for (const number of lostNumbers) {
        if (number % 3 === 0) {
            multiplesOf3Numbers.push(number);
        };
    };
    concatEvenAndMultipleOf3 = evenNumbers.concat(multiplesOf3Numbers);
};

bestLostNomber();
console.log(evenNumbers);
console.log(multiplesOf3Numbers);
console.log(concatEvenAndMultipleOf3);











