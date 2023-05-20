'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// avatar que eligió el usuario al registrarse
let userAvatar = 'https://dev.adalab.es/gato-siames.webp';

// document.querySelector('.user__avatar').src = userAvatar;

/* si userAvatar === '' entonces: 
    document.querySelector('.user__avatar').src = DEFAULT_AVATAR;

   si userAvatar !== '' entonces: 
    document.querySelector('.user__avatar').src = userAvatar;
*/

document.querySelector('.user__avatar').src = userAvatar || DEFAULT_AVATAR;
