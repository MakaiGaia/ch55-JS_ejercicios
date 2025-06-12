//User Profile 
let counter = 0;
const userName = prompt("Introduzca su nombre de usuario");
const userAge = prompt("Introduce tu edad");
const userFavoriteMovies = [];

for (let index = 1; index <= 5; index++) { 
    userFavoriteMovies.push(prompt("¿Cuales son tus peliculas favoritas?"+`Ingresa la pelicula # ${index}`));
}
console.log(`Hola, soy ${userName}, tengo ${userAge} años y mis peliculas favoritas son: `);
while (counter < userFavoriteMovies.length) {
    console.log(`Mi pelicula favorita numero ${counter+1} es: ${userFavoriteMovies[counter]}`);
    counter++;
}
