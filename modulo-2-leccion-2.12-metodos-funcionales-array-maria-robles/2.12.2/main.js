'use strict';

//Ejercicio 1

const users = [
  {name: 'María', isPremium: false},
  {name: 'Lucía', isPremium: true},
  {name: 'Susana', isPremium: true},
  {name: 'Rocío', isPremium: false},
  {name: 'Inmaculada', isPremium: false},
];

const premiumUsers = users.filter((vip) => vip.isPremium);

console.log(premiumUsers);

//Ejercicio 2

const pins = [2389, 2384, 2837, 5232, 8998];

const evenPins = pins.filter((even) => even % 2 === 0);

console.log(evenPins);

//Ejercicio 3

const users2 = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const validatedUsers = users2.filter((user2) => user2.pin % 2 === 0);

console.log(validatedUsers);