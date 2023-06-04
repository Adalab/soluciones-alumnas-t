'use strict';
// 2.12.1 MAP 1. Inflar las notas
const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((mark) => mark + 1);
console.log(inflatedMarks);

//2. Saludar es de buena educación
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const addGreeting = (name) => '¡Bienvenida ' + name + '!';
const greetingsWithNames = names.map(addGreeting);
console.log(greetingsWithNames);

//3. Gracias por confiar en nosotros
const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
  ];

  const specificGreeting = (user) => {
    if (user.isPremium === true) {
        return user = 'Bienvenida ' + user.name + '. Gracias por confiar en nosotras';
    }
    else {
        return user = 'Bienvenida ' + user.name;
    }
  };
  const greetings = users.map(specificGreeting);
  console.log(greetings);