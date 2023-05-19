const superWave = document.querySelector('.super-wave');
superWave.classList.add('highlight');
console.log(superWave);
//
const kiwi = 5;
const pera = 2;
const uva = 4;
console.log(kiwi + pera + uva);
//
const age = 29;
const hourDay = 24;
const yearDays = 365;
console.log(age * hourDay * yearDays);

//
const listElement = document.querySelector('.js_list');
const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';
const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';
const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

listElement.innerHTML = `<li><img src="${firstDogImage}" alt="dog"><p>${firstDogName}</p></li>
    <li><img src="${secondDogImage}" alt="dog"><p>${secondDogName}</p></li>
    <li><img src="${thirdDogImage}" alt="dog"><p>${thirdDogName}</p></li>`;
//
const nameElement = 'Rebeca';
const lastName = "Serrano"
const long = nameElement.length + lastName.length;
//
console.log(long);
console.log(isNaN(long));
 


