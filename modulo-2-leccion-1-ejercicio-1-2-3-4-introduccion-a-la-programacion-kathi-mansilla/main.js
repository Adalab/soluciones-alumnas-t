'use strict'; 
document.querySelector('h1').innerHTML = '¡Hola mundo!'; 

// primer ejercicio
document.querySelector('p').innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente'

// segundo ejercicio
let myaddress = 'Madrid, 28009'; 
myaddress = 'Valladolid, 47009';

//tercer ejercicio
const paragraphElement = document.querySelector('.paragraph');
paragraphElement.innerHTML = paragraphElement.innerHTML + ' mundo';

//cuarto ejercicio
const selectionElement = document.querySelector('.selection');
const student1Element = document.querySelector('.student1');
const student2Element = document.querySelector('.student2');
selectionElement.innerHTML = selectionElement.innerHTML + student2Element.innerHTML;

//quinto ejercicio
//¿Cómo divido el code en más líneas?
const postElement = document.querySelector('.post');
const content = '<h2>Lorem ipsum</h2> <img src="http://via.placeholder.com/350x150" alt="boceto de imagen"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';
postElement.innerHTML = content;

//sexto ejercicio
const oneElement = document.querySelector('.one');
oneElement.classList.add('disabled');

