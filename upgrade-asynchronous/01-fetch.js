// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

fetch('https://api.agify.io?name=michael')
  .then((data) => data.json()) //* convertimos todos los datos a un formato que podamos entender
  .then((data) => console.log(data)); //* guardamos esos datos en una variable 

// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io/?name=';
const button$$ = document.querySelector('button');
const input$$ = document.querySelector('input');

const buscador = () => {
  fetch(baseUrl + input$$.value)
    .then((data) => data.json())
    .then((data) => console.log(data));
}

button$$.addEventListener('click', () => buscador());

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.

// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

button$$.addEventListener('click', () => buscador2());

const deleteThis = (delete1, delete2) => {
  delete1.remove();
  delete2.remove();
}

const print = (person) => {
  const p$$ = document.createElement('p');
  const buttonX$$ = document.createElement('button');

  p$$.textContent = `El nombre ${person.name} tiene un ${person.country[0].probability * 100} porciento de ser de ${person.country[0].country_id}`;
  buttonX$$.textContent = 'X';

  document.body.appendChild(p$$);
  document.body.appendChild(buttonX$$);

  buttonX$$.addEventListener('click', () => deleteThis(p$$, buttonX$$));
  
} 


const buscador2 = () => {
  fetch(baseUrl + input$$.value)
    .then((data) => data.json())
    .then((person) => print(person));
}
