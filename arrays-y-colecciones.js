// Arrays y colecciones 
// Vamos a afianzar nuestro conocimiento de arrays explorando distintas acciones sobre ellos. Veremos si se comportan como esperamos u ocurren resultados inesperados. 
// En primer lugar, practiquemos las acciones más comunes y necesarias: 

// 1). Acceder a elementos específicos de un array. 

const array = [1 , 3, 5]
console.log("el valor del indice 1 del array [1 , 3, 5] es: " + array[1]);
// => 3

const arrayA = [1 , 3, 5]

const indice = 2
const accederArray = arrayA[indice]
console.log("El indice" + indice + " del array [1 , 3, 5] es; " + accederArray);
// => 5

// 2). Modificar cada uno de sus elementos e imprimirlos. 

const arrayB = [1 , 3, 5]
console.log("El resultado del metodo ´splice(1)´ del array [1 , 3, 5] es: " + arrayB.splice(1));

// 3). Agregar elementos a un array. 
const arrayC = [1 , 3, 5]
arrayC.push(0, 2)
console.log("Si aplicamos .push(0,2) al array [1 , 3, 5] el resultado sera: " + arrayC);

arrayC.splice(0,0,3)
console.log("si al resultado del array anterior le agregamos splice(0,0,3) el resultado sera: " + arrayC);


