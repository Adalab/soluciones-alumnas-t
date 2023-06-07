'use strict';

const dos = "2";
const diez = '10';
const veinticinco = '25';

const createPromise = (dos) =>
//   fetch('https://dog.ceo/api/breeds/images/random/2').then((response) =>
//     response.json()
//   );
  fetch(`https://dog.ceo/api/breeds/image/random/${dos}`).then((response) =>
    response.json()
  );
  


function getBreedImages() {
   
  const promises = [
    
    createPromise(), 
  ]
  Promise.all(promises).then((responses) => {
    // debugger;
    // for (let i = 0; i < responses.length; i++) {

    //   const img = document.querySelector('.dog' + (i + 1));
    //   img.src = responses[i].message;
    // }
    for (let i = 0; i < responses[0].message.length; i++) {

      const img = document.querySelector('.dog' + (i + 1));
      img.src = responses[0].message[i];
    }
    console.log(responses);
  });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedImages);