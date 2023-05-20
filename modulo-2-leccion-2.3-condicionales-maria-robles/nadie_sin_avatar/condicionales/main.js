'use strict';

//Control de acceso

let userName = document.querySelector('.user__name').value;
if (userName === 'María' || userName === 'Luisa') {
    alert ('Bienvenida ' + userName);
} else {
    alert ('Lo siento pero el usuario que has introducido no está registrado');
}

//Completa las condiciones

let perfectNumber = 17;

if (perfectNumber === 100) {
  console.log('El número es 0')
} else if (perfectNumber < 0) {
  console.log('El número es negativo')
} else if (perfectNumber + 2 > 13 && perfectNumber + 2 <= 20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
} else if (perfectNumber > 20 && perfectNumber < 50) {
  console.log('El número es mayor que 20 pero menor que 50')
} else {
  console.log('el número no es 123123125')
}

//Conversor de edad de perro a humano

let dogAge = parseInt(document.querySelector('.dog__age').value);
const firstYear = 15;
const secondYear = 9;
const thirdYear = 5;
const fromFourthOn = ((dogAge-2)*thirdYear)+firstYear+secondYear;
//1 año = 15
//2 años = 15+9
//3 años = 15+9+5
//4 años = 15+9+5+5

console.log(dogAge);

if (dogAge === 1) {
    console.log (`Tu perro tiene ${firstYear} años humanos`);
} else if (dogAge === 2) {
    console.log ('Tu perro tiene ' + (firstYear+secondYear) + ' años humanos');
} else if (dogAge === 3) {
    console.log ('Tu perro tiene ' + (firstYear+secondYear+thirdYear) + ' años humanos');
} else {
    console.log ('Tu perro tiene ' + fromFourthOn + ' años humanos');
}


