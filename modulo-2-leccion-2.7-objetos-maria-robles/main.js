'use strict';

//Ejercicio 1: Bio de Adalabers

/*  1. Crear párrafo por donde se mostrará la frase
    2. Crear objeto llamado adalaber1 con los valores 'Susana', '34 años' y 'Periodista'
    3. Traer el párrafo donde voy a insertar la frase
    4. Montar la frase 'Mi nombre es Susana, tengo 34 años y soy periodista'
*/

const parrafo1 = document.querySelector('.js-p-adalaber1');
const parrafo2 = document.querySelector('.js-p-adalaber2');

const adalaber1 = {
    name: 'Susana',
    age: '34 años',
    ocupation: 'periodista',
}
const adalaber2 = {
    name: 'Rocío',
    age: '25 años',
    ocupation: 'actriz',
}

parrafo1.innerHTML = 'Mi nombre es ' + adalaber1.name + ', tengo ' + adalaber1.age + ' y soy ' + adalaber1.ocupation; 
parrafo2.innerHTML = 'Mi nombre es ' + adalaber2.name + ', tengo ' + adalaber2.age + ' y soy ' + adalaber2.ocupation; 

//Ejercicio 2: A la carrera
/*  1. Crear método run que muestre en consola la frase 'Estoy corriendo'
    2. Añadir parámetro distance con el valor 50
    3. Crear método runAMarathon que toma el parámetro distance
    4. Al ejecutar el método muestra en consola 'Estoy corriendo un maratón de 50 kilómetros'
 */

function run () {
    adalaber1.speak = 'Estoy corriendo';
    // return(console.log(adalaber1.speak));
    console.log(adalaber1.speak);
}
 run();

// function runAMarathon (distance) {
//     // adalaber1.distance = 50;
//     // return(console.log(adalaber1.speak += ' un maratón de ' + adalaber1.distance + ' kilómetros'))
//     console.log(adalaber1.speak += ` un maratón de ${distance} kilómetros`);
// }
// runAMarathon(50);

adalaber1.marathon = (distance) => adalaber1.speak += ` un maratón de ${distance} kilómetros`;

console.log(adalaber1.marathon(50));



