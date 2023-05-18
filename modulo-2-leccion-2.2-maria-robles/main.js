'use strict';

const precioKiwi = 5;
const precioPera = 2;
const precioUva = 4;

const compraKiwi = 2;
const compraPera = 3;
const compraUva = 0.5;


const precioCompra = (precioKiwi*compraKiwi) + (precioPera*compraPera) + (precioUva*compraUva);

const totalEuros = document.querySelector('.elementTotal');
totalEuros.innerHTML = totalEuros.innerHTML + " " + precioCompra + '€';

// 

let edadUsuaria = 36;
edadUsuaria = 38;
edadUsuaria = 4;
let edad = document.querySelector('.edadUsuaria');
edad.innerHTML = edad.innerHTML + " " + edadUsuaria + ' años.';

const horasEnUnAño = 8760;
const totalHorasVividas = edadUsuaria * horasEnUnAño;

const horasVividas = document.querySelector('.horasVividas');
horasVividas.innerHTML = horasVividas.innerHTML + " " + totalHorasVividas + ' horas. ';





