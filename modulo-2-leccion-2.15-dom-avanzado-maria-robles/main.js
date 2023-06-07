'use strict';

//Ejercicio 1

const numbers = [1, 2, 3];

for (let i=0; i<numbers.length; i++) {
    const number = numbers[i];

    const newItem = document.createElement('li');
    const newContent = document.createTextNode(numbers[i]);
    newItem.appendChild(newContent);

    const items = document.querySelector('.list');
    items.appendChild(newItem);
}

//Ejercicio 2

const chosenCity = document.querySelector('select');
const btn = document.querySelector('.btn');

const madrid = [
    'https://thumbs.dreamstime.com/z/plaza-espa%C3%B1a-madrid-cuadrada-3233892.jpg',

    'https://thumbs.dreamstime.com/b/plaza-espa%C3%B1a-madrid-cuadrada-3233891.jpg', 

    'https://thumbs.dreamstime.com/b/plaza-cuadrada-ramales-de-madrid-en-el-centro-la-ciudad-con-110349381.jpg'
];

const paris = [
    'https://thumbs.dreamstime.com/b/cuadrado-de-la-torre-eiffel-23897294.jpg',

    'https://thumbs.dreamstime.com/b/par%C3%ADs-se%C3%B1al-cuadrada-de-vendome-en-puesta-del-sol-francia-27825561.jpg',

    'https://thumbs.dreamstime.com/z/el-cuadrado-m%C3%A1s-grande-de-par%C3%ADs-la-plaza-concordia-con-obelisco-egipcio-luxor-y-arc-du-triompe-en-champs-elysees-adentro-136053776.jpg',
]

const ny = [
    'https://img.pixers.pics/pho_wat(s3:700/FO/53/60/52/28/700_FO53605228_b304ba42a4d22fb6b627c67835d192bd.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-skyline-de-manhattan-ciudad-de-nueva-york-imagen-cuadrada.jpg.jpg',

    'https://media.istockphoto.com/id/1162428342/es/foto/vista-a%C3%A9rea-del-parque-cuadrado-de-washington-vista-a%C3%A9rea-de-la-ciudad-de-nueva-york.jpg?s=612x612&w=0&k=20&c=f-T_oP0jlt4Lp1_8ecHNm4TAa6j2_YlAbPZgdNzYRDw=',
    
    'https://static8.depositphotos.com/1363517/886/i/600/depositphotos_8867238-stock-photo-times-square.jpg',
]

function chosenCityValue() {
    const cityValue = chosenCity.value;
    return cityValue;
}

function handleClickBtn (event) {
    event.preventDefault();
    chosenCityValue();

    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');
    const img3 = document.querySelector('.img3');
    
    if (chosenCityValue() === 'madrid') {
        img1.src = madrid[0];
        img2.src = madrid[1];
        img3.src = madrid[2];
        
    } else if (chosenCityValue() === 'paris') {
        img1.src = paris[0];
        img2.src = paris[1];
        img3.src = paris[2];
    } else {
        img1.src = ny[0];
        img2.src = ny[1];
        img3.src = ny[2];
    }
};

btn.addEventListener('click', handleClickBtn);


//Ejercicio 3

const data = [
    {
        nombre: 'María',
        apellido: 'Robles', 
        telefono: 666666666,
    }, 

    {
        nombre: 'Jony',
        apellido: 'Braxs', 
        telefono: 612345666,
    }, 

    {
        nombre: 'Pepe',
        apellido: 'Robles', 
        telefono: 655555555,
    }, 
]

const chooseAName = document.querySelector('.selectData');

function chosenName() {
    const userNameValue = chooseAName.value;
    return userNameValue;
}

function handleClickName() {
    chosenName();
    
    if(chosenName() === 'maria') {
        const newUser1 = document.createElement('input');
        const newData1 = document.createTextNode(data[0].nombre);
        newUser1.appendChild(newData1);

        const datas = document.querySelector('.dataForm');
        datas.appendChild(newData1);
    }
    
}

chooseAName.addEventListener('change', handleClickName);


