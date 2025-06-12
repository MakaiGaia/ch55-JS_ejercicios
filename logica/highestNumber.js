/*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers. 

*/

const numberArr = [];
let index = 0;

while (index<10) {
    numberArr.push(prompt(`Veamos que numero es el mayor, Introduce un número a la vez, faltan ${10-index}`));
    index++;
}

const sortNumbers = numberArr.toSorted((a,b) => b-a);
console.log(sortNumbers);
alert(`El número mayor que introduciste fue ${sortNumbers[0]}`);
