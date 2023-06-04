'use strict';

//Ejercicio 1-a

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const issueUser = users.find((user) => user.pin === 5232);

console.log(issueUser);

//Ejercicio 1-b

const issueUser2 = users.findIndex((user) => user.pin === 5232);
const indexIssueUser = issueUser2;
console.log(indexIssueUser);

const deleteUser = users.splice(3,1);
console.log(users);