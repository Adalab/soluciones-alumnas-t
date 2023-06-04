'use strict';
// SECCIÓN querySelector

const listElement = document.querySelector('.js__listElement');
const messageElement = document.querySelector('.js__messageElement');

// SECCIÓN DE DATOS
const tasks = [
    {name: 'Recoger setas en el campo', completed: true},
    {name: 'Comprar pilas', completed: true},
    {name: 'Poner una lavadora de blancos', completed: true},
    {name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false},
  ];
//CÓDIGO PARA EL PUNTO C DEL EJERCICIO:
//Sección de funciones

const renderTasks = () => {
    for (let i = 0; i < tasks.length; i++) {
      const oneTask = tasks[i];
      // ? -> operador ternario que evalúa la condición y ejecuta un código por T y otro por F, que se encuentran separados por :
      const isChecked = oneTask.completed ? 'checked="checked"' : '';
      const isCompleted = oneTask.completed ? ' class="completed"' : '';
      //data es un atributo de HTML para guardar info adicional, es buena práctica asignarle un nombre seguido de - y el nombre del dato que se guardará, por eso aquí se llama data-index. Así cuando se haga click podremos obtener el índice del elemento dentro del array usando el método getAtributte('data-index');
      const itemListElement = `<li><input type="checkbox" data-index="${i}" ${isChecked}><span${isCompleted} id="task${i}">${oneTask.name}</span></li>`;
      listElement.innerHTML += itemListElement;
    }
  };

  const handleClickCheck = (event) => {
    const inputCheckbox = event.target;
    const indexData = parseInt(inputCheckbox.getAttribute('data-index'));
    //para acceder al span le puse un id y apliqué document.getElementById con el nombre del id
    //const idSpanTask = `task${indexData}`;
    const spanElement = document.getElementById(`task${indexData}`);

    if (inputCheckbox.checked) {
        tasks[indexData].completed = true;
        spanElement.classList.add('completed');
        numberOfCompletedTasks += 1;
        numberOfUncompletedTasks -= 1;
        console.log(numberOfCompletedTasks)
        console.log(numberOfUncompletedTasks);
    }
    else {
        tasks[indexData].completed = false;
        spanElement.classList.remove('completed');
        numberOfCompletedTasks -= 1;
        numberOfUncompletedTasks += 1;
        console.log(numberOfCompletedTasks)
        console.log(numberOfUncompletedTasks);
    }
    messageElement.innerHTML = `Tienes ${totalTasks} tareas. ${numberOfCompletedTasks} completadas y ${numberOfUncompletedTasks} por realizar.`;
    console.log('Index:', indexData);
    console.log('Tasks:', tasks);
  };

//Sección de ejecución de funciones
renderTasks();

//Sección de eventos
listElement.addEventListener('click', handleClickCheck);

//Sección de cargar y actualizar la página
const totalTasks = tasks.length;
const allCompletedTasks = [];
const allUncompletedTasks = [];
let numberOfCompletedTasks = '';
let numberOfUncompletedTasks = '';

const getCompletedAndaUncompletedTasks = () => {
    for (const task of tasks) {
        if (task.completed) {
            allCompletedTasks.push(task);
            numberOfCompletedTasks = allCompletedTasks.length;
    
        }
        else {
            allUncompletedTasks.push(task);
            numberOfUncompletedTasks = allUncompletedTasks.length;
        }
    };
}
getCompletedAndaUncompletedTasks();
messageElement.innerHTML = `Tienes ${totalTasks} tareas. ${numberOfCompletedTasks} completadas y ${numberOfUncompletedTasks} por realizar.`;




// CÓDIGO PARA LOS PUNTOS A Y B DEL EJERCICIO
/*
  //FUNCIONES
  const renderTasks = () => {
    for (const oneTask of tasks) {
        if (oneTask.completed) {
            listElement.innerHTML += `<li><input type="checkbox"checked="checked"><span class="completed">${oneTask.name}</span></li>`;  
        }   
        else {
            listElement.innerHTML += `<li><input type="checkbox"><span>${oneTask.name}</span></li>`;  
        };   
      };
  };
  //SECCIÓN DE EVENTOS
  
  
  //SECCIÓN DE CUANDO CARGA LA PAGE
  renderTasks();
*/
  
