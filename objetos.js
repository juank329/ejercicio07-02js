// Objeto con tus datos personales
let yo = {
    nombre: "Juan",
    apellido: "Avendaño",
    edad: 42,
    altura: 1.75,
    eresDesarrollador: true
};
console.log(yo);


// Variable que obtiene tu edad a partir del objeto anterior
let miEdad = yo.edad;
console.log(miEdad);



// Lista que contiene el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let amigos = [yo, {
    nombre: "Pamela",
    apellido: "Balboa",
    edad: 36,
    altura: 1.65,
    eresDesarrollador: false
}, {
    nombre: "Bastian",
    apellido: "Avendaño",
    edad: 11,
    altura: 1.20,
    eresDesarrollador: false
}];

console.log(amigos);



// Nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
let amigosOrdenados = amigos.sort((a, b) => b.edad - a.edad);
console.log(amigosOrdenados);




