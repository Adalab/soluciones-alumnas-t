'use strict';
//2.12.2 FILTER 
//1. Solo los premium
const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
  ];

  const getPremiumUsers = (premiumUser) => premiumUser.isPremium;

  const premiumUsers = users.filter(getPremiumUsers);
  console.log(premiumUsers);

  //2. Los pares pueden entrar
  const pins = [2389, 2384, 2837, 5232, 8998];
  
  const getEvenPins = (eachPin) => eachPin % 2 === 0;

  const evenPins = pins.filter(getEvenPins);
  console.log('Ejercicio 2 -> ' + evenPins);

  //3. Los usuarios que pueden entrar
  const users2 = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
  ];

const getElegibleUsers = (eachUser) => eachUser.pin % 2 === 0;

const elegibleUsers = users2.filter(getElegibleUsers);
console.log(elegibleUsers);
