'use strict';
//2.12.3 FIND AND FINDINDEX
//1. Encuentra el usuario

 const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const getUser = (user) => user.pin === 5232;

const findUser = users.find(getUser);
console.log(findUser);

//1. Borra al usuario

const getIndexUser = (user) => user.pin === 5232;

const findIndexUser = users.findIndex(getIndexUser);
console.log(findIndexUser);

users.splice(findIndexUser, 1);
console.log(users);