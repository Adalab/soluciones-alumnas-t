'use strict';

//Ejercicio 1

const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map((mark) => mark + 1);

console.log(inflatedMarks);

//Ejercicio 2

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const greetings = names.map((name) => 'Bienvenida ' + name);

console.log(greetings);

//Ejercicio 3

const users = [
  {name: 'María', isPremium: false},
  {name: 'Lucía', isPremium: true},
  {name: 'Susana', isPremium: true},
  {name: 'Rocío', isPremium: false},
  {name: 'Inmaculada', isPremium: false},
];

const greetings2 = users.map(user => {
    const container = {};

    container[user.name] = user.isPremium;
    if (user.isPremium) {
        container.greeting = 'Bienvenida ' + user.name + '. Gracias por confiar en nosotros.';
    } else {
        container.greeting = 'Bienvenida ' + user.name;
    }
    

    return container;
});

console.log(greetings2);