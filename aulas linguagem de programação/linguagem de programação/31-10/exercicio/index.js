/*function soma (a, b){
    const resultado = a + b;
    return resultado;
}
console.log(soma(10,2));

function subtracao (a,b){
    const resultado = a - b;
    return resultado;
}
console.log(subtracao(10,2));

function multiplicacao (a,b){
    const resultado = a * b;
    return resultado;
}
console.log(multiplicacao(10,2));

function divisao (a,b){
    const resultado = a / b;
    return resultado;
}
console.log(divisao(10,2));
*/

function soma(a, b){
    return a + b;
}
function subtracao(a, b){
    return a - b
}
function multiplicacao(a, b){
    return a * b;
}
function divisao(a, b){
    return a / b;
}

let num1 = 10
let num2 = 2
console.log(`${num1} + ${num2} = ${soma(num1, num2)}`);
console.log(`${num1} - ${num2} = ${subtracao(num1, num2)}`);
console.log(`${num1} * ${num2} = ${multiplicacao(num1, num2)}`);
console.log(`${num1} / ${num2} = ${divisao(num1, num2)}`);