// String são indexadas, ou seja, cada caractere possui um índice
//           01234567
let umaString = "Um texto";
console.log(umaString);
//console.clear();
//console.log(umaString[4]); mostra a possição da letra
console.log(umaString.concat(` em um lindo dia.`)); //forma de concatenar
console.log(umaString + " em um lindo dia."); // outra forma de concatenar
console.log(`${umaString} em um lindo dia.`); // outra forma de concatenar
console.log(umaString.indexOf(`texto`)); // pega a primeira posiçao da palavra
console.log(umaString.indexOf(`t`, 4)); // busca a primeira letra a partir da posição indicada, nesse caso a 4.
console.log(umaString.lastIndexOf(`t`, 3)); 
console.log(umaString.match(/[a-z]/g)); // para mostrar todos os caracter minusculos
console.log(umaString.search(/x/)); // vai procurar a posição da letra no texto
console.log(umaString.replace('Um', 'Outro')); // Substitui todas as palavra 'Um' por 'Outro'



