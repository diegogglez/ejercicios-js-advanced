// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countriesList$$ = document.createElement('ul');
document.body.appendChild(countriesList$$);

for (let country of countries) {
  const li$$ = document.createElement('li');
  li$$.textContent = country;
  countriesList$$.appendChild(li$$);
}


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

document.querySelector('.fn-remove-me').remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const carsList$$ = document.createElement('ul');
const carsDiv$$ = document.querySelector('[data-function = "printHere"]');
carsDiv$$.appendChild(carsList$$);

for (let car of cars) {
  const car$$ = document.createElement('li');
  car$$.textContent = car;
  carsList$$.appendChild(car$$);
}

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
 ];

 for (let key in countries2) {
  
  const divContainer$$ = document.createElement('div');
  const title$$ = document.createElement('h4');
  const img$$ = document.createElement('img');
  const deleteThis$$ = document.createElement('button');

  img$$.setAttribute('src', countries2[key].imgUrl);
  title$$.textContent = countries2[key].title;
  deleteThis$$.textContent = 'delete'
  deleteThis$$.addEventListener('click', () => deleteThis())
  
  divContainer$$.appendChild(title$$);
  divContainer$$.appendChild(img$$);
  divContainer$$.appendChild(deleteThis$$);
  document.body.appendChild(divContainer$$);

  const deleteThis = () => divContainer$$.remove();



 }

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

button$$ = document.createElement('button');
button$$.textContent = 'delete last one';
document.body.appendChild(button$$);

button$$.addEventListener('click', () => deleteLastOne())

const deleteLastOne = () => {
  const divSelection$$ = document.querySelectorAll('div');
  divSelection$$[divSelection$$.length - 1].remove();
}



// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.


