// CREACIÓN DE UNA COLECCIÓN DE PELÍCULAS
// El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto. Para esto, deberás:
// 1. Crear la estructura adecuada para guardar las siguientes películas: "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
// Importante: verificá que todo funciona correctamente accediendo a alguna de las películas una vez creada la estructura correspondiente.

const coleccionPeliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

const indice = 2;
const accederPeliculasPorIndex = coleccionPeliculas[indice];

// console.log(accederPeliculasPorIndex);

// CONVERSIÓN A MAYÚSCULAS
// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. Para esto solicitan que crees una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas. Pista: revisá qué hace el método de strings .toUpperCase().

let pelisMayusculas = [];

const arrayMayusculas = (arryaPelis) => {
  for (const pelicula of arryaPelis) {
    pelisMayusculas.push(pelicula.toUpperCase());
  }
};
arrayMayusculas(coleccionPeliculas);
// console.log(pelisMayusculas);

// COMBINACIÓN DE ARRAYS
// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que crear otra estructura similar a la primera, pero con las siguientes películas animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros, para poder agregar los elementos contenidos en el segundo array dentro del primero, y así retornar un solo array con todas las películas como sus elementos. Importante: las películas animadas también deberían convertirse a mayúsculas.

const coleccionPeliculasAnimadas = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

arrayMayusculas(coleccionPeliculasAnimadas);

// console.log(pelisMayusculas);

// ELIMINACIÓN DE UN ELEMENTO ESPECÍFICO
// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el contenido al array que contenga todas las películas.
// PD: por precaución, guarda el elemento que vas a eliminar en una variable.
let elementoEliminado;

const eliminarUltimoElementoArray = (arrayPelis) => {
  elementoEliminado = arrayPelis.pop();
};
eliminarUltimoElementoArray(pelisMayusculas);
// console.log(pelisMayusculas);
// console.log(elementoEliminado);

// COMPARACIÓN DE ARRAYS DE CALIFICACIONES
// 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios del mundo sobre las películas con el siguiente formato:
// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Te piden crear una función que compare las calificaciones e indique si son iguales o diferentes. Te confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en orden al del array resultante de combinar películas con películas animadas. Es decir, el primer elemento del array de películas general corresponde al primer elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.
// Para verificar que hasta acá viene todo bien, te recomendamos probar cada una de las funciones y testear su correcto funcionamiento.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// console.log(asiaScores[3]);

let sonIguales = [];

const compararScores = (asia, euro) => {
  for (const [i, scoreAsia] of asia.entries()) {
      for (const [j, scoreEuro] of euro.entries()) {
      
      if (i === j && scoreAsia ===scoreEuro) {
        sonIguales.push("iguales")
      }else if ((i === j && scoreAsia != scoreEuro) ){
        sonIguales.push("diferente")
      }
    }
  }
};
compararScores(asiaScores, euroScores);
console.log(sonIguales);

// Si llegaste hasta este punto y está todo bien, el tech leader del equipo debe estar extremadamente alegre con tu trabajo y desempeño.
// ¡Buen trabajo!