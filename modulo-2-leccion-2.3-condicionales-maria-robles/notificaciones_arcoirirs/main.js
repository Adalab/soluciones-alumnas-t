'use strict';

const alertType = document.querySelector('.alert');
let title = document.querySelector('.title');
let text = document.querySelector('.text');

if (alertType.classList.contains('warning')) {
    title.innerHTML = 'AVISO' , text.innerHTML = 'Tenga cuidado';
} else if (alertType.classList.contains('error')) {
    title.innerHTML = 'ERROR' , text.innerHTML = 'Ha surgido un error';
} else if (alertType.classList.contains('success')) {
    title.innerHTML = 'CORRECTO' , text.innerHTML = 'Los datos son correctos';
} else {
    console.log('Nada que comprobar');
}


