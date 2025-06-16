/*Number divided into halves
 

Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`. */

//Firma de la funcion
function numDiv(number){
    const numArray = [0,0];
    let numHalf = number/2;
    numHalf = parseInt(numHalf);
    numArray.fill(numHalf);
    return numArray;
}

const numberGiven = prompt("Ingrese un numero");
console.log(numDiv(numberGiven));

