/*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.*/

function factorial(number){
    
    if (number >= 1) {
        let newNumero =  prompt("Introduce un numero entero");
        newNumero = parseInt(newNumero);
        factorial(newNumero);
    } else {
        console.log("Aqui se acaba el factorial")
    }
}

let numero = prompt("Introduce un numero entero");
numero = parseInt(numero);
console.log(factorial(numero));