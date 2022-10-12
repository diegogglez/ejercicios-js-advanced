// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div$$ = document.createElement('div');
document.body.appendChild(div$$);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2$$ = document.createElement('div');
div2$$.innerHTML = '<p class ="usandoInnerHtml">Hola soy un párrafo</p>';
document.body.appendChild(div2$$);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

for (let i = 0; i < 6; i++){
  const p$$ = document.createElement('p');
  p$$.classList.add('loop');
  div2$$.appendChild(p$$);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const soyDinamico$$ = document.createElement('p');
soyDinamico$$.textContent = 'Soy dinámico';
div$$.appendChild(soyDinamico$$);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

document.querySelector('.fn-insert-here').textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const appList$$ = document.createElement('ul');

document.body.appendChild(appList$$);

for (let app of apps) {
  const platform$$ = document.createElement('li');
  platform$$.innerText = app;
  appList$$.appendChild(platform$$);

}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const deleteP = document.querySelectorAll('.fn-remove-me');
for (let p of deleteP){

  p.remove(); 
}

//* tenemos que eliminar cada elemento del array con un bucle, no podemos eliminar el array de una?

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const voyEnMedio$$ = document.createElement('p');
const divSelection$$ = document.querySelectorAll('div');

voyEnMedio$$.textContent = 'Voy en medio!';
document.body.insertBefore(voyEnMedio$$, divSelection$$[1]);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divInsert$$ = document.querySelectorAll('.fn-insert-here');

for (div of divInsert$$) {
  const dentro = document.createElement('p');
  dentro.textContent = 'Voy dentro!';
  div.appendChild(dentro);
}