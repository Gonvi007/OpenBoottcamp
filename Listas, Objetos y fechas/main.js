// Listas, Array o Arreglo
const lista = [1, "Hola, true, undefined, null"];
const lista2 = new Array(1, "Hola, true, undefined, null");
const lista3 = new array(3);
lista3[0] = "Soy primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos

const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contacto: ["Kokun", "Marcelo", "Rataoille"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },

}

movil.year = 2019;
movil.marca = "Samsung";

console.log(movil.marca);

// Fechas
// Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora); /* Aqui muestra la hora actual de tu ordenador*/

const fecha_milis = new Date(10) // Usando los milisegundos
console.log(fecha_milis) /* Muestra la che del año 1970 😮 */

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);


const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const year = ahora.getFullYear();

console.log(dia, mes, year);