/*Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`. */

const positiveDom = function(arrayNum){
    let cantNegativos = 0;
    let cantPositivos = 0;
    let resultado = true;
    arrayNum.forEach(element => {
        if (element > 0) {
            cantPositivos++;
        } else {
            cantNegativos++;
        }
    });

    if (cantPositivos>cantNegativos) {
        return resultado;
    } else {
        resultado = false;
        return resultado;
    }
}

console.log(positiveDom([-1, -3, -5, 4, 6767]));