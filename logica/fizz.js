/*
Reto de Programación: FizzBuzz
Descripción:

Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:

Si el número es múltiplo de 3, imprime "Fizz".

Si el número es múltiplo de 5, imprime "Buzz".

Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".

Si no es múltiplo de ninguno, imprime el número tal cual

1.100 numeros
2.Crear un bucle que recorra 100 numeros
3.Si el número es múltiplo de 3, imprime "Fizz".
    3.1 Ocupar operación módulo
    3.2 Es verdadero si el modulo es 0
4.Si el número es múltiplo de 5, imprime "Buzz".
    4.1 Ocupar operación módulo
    4.2 Es verdadero si el modulo es 0
5.Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".
    5.1 Ocupar la expresion de modulos evaluados con el operador &&
*/

for (let numero = 1; numero <= 100; numero++)
    {
    if (numero%3 === 0 && numero%5 === 0)
        {
        console.log("FizzBuzz");
        } else if(numero%3 === 0)
            {
            console.log("Fizz");
            }else if(numero%5 === 0)
                {
                console.log("Buzz");
                }else
                    {
                    console.log(numero);
                    }
    }

   
let counter = 1;
do {
    if (counter % 3 === 0 && counter % 5 === 0) {
        console.log (`El numero ${counter} es FizzBuzz`) ;
    } else if(counter % 3 === 0){
        console.log(`El numero ${counter} es Fizz`);
    } else if(counter % 5 === 0){
        console.log(`El numero ${counter} es Buzz`);
    } else{
        console.log(counter);
    }
    counter++;
} while (counter <= 100);
