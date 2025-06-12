/*Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
1. prompt pidiendo palabra o frase
2. Almacenar en un array
3. Utilizamos funciones para quitar mayusculas, espacios y signos de puntación
4. copiamos el array en otro y aplicamos toSort para invertir el orden del mismo
5. comparamos contenido y Determinamos si lo introducido es palindromo 
*/

const textPrueba = prompt("Introduce una palabra o frase para saber si es palindromo o no");
const transText = [...textPrueba];
const textoLimpio = transText.filter((caracter) => caracter !== " " && caracter !== "," && caracter !== ".");
let arregloBack = [...textoLimpio];
arregloBack = arregloBack.reverse();

if (textoLimpio.every((elemento, indice) => elemento === arregloBack[indice])) {
    console.log(`La frase "${textPrueba}" si es un palindromo`);
} else {
    console.log(`La frase no es un palindromo, lo siento`);
}
console.log(transText);
console.log(textoLimpio);
console.log(arregloBack);

