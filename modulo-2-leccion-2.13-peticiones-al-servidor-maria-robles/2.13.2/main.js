'use strict';

//Ejercicio 1

function getChihuahua() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getChihuahua);

function getPug() {
    fetch('https://dog.ceo/api/breed/pug/images/random')
        .then((response) => response.json())
        .then((data)=> {
            const img2 = document.querySelector('.img2');
            img2.src = data.message;
            img2.alt = 'Un carlino';
        })
}
const btn2 = document.querySelector('.js-dog2');
btn2.addEventListener('click', getPug);

function getBeagle() {
    fetch('https://dog.ceo/api/breed/beagle/images/random')
        .then((response) => response.json())
        .then((data) => {
            const img3 = document.querySelector('.img3');
            img3.src = data.message;
            img3.alt = 'Un Beagle';
        })
}
const btn3 = document.querySelector('.js-dog3');
btn3.addEventListener('click', getBeagle);

//Ejercicio 2

function getUser() {
    fetch('https://api.github.com/users/'+inputText.value)
        .then((response) => response.json())
        .then((data) => {
            const name = document.querySelector('.js_textName');
            name.innerHTML = data.name;
            const picture = document.querySelector('.js_userImg');
            picture.src = data.avatar_url;
            picture.alt = 'Foto de usuario';
            const numberOfRepos = document.querySelector('.js_numberOfRepos');
            numberOfRepos.innerHTML = data.public_repos;
        })
}
const button = document.querySelector('.js_btn');
const inputText = document.querySelector('.js_inputText');
button.addEventListener('click', getUser);