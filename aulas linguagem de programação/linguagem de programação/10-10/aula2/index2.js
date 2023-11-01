//           0123456789
let umaString = `O rato roeu a roupa do rei de roma.`;
console.log(umaString.replace(/r/g, '#')); // troca todas as letras r por #
console.log(umaString.length); //conta todas as posições da frase "o tamanho da frase"
console.log(umaString.length - 1);
console.log(umaString.slice(2, 5)); // inclui a primeira letra e exclui a ultima no caso a posição 5
console.log(umaString.slice(-5, -1)); // faz do final para o inicio
console.log(umaString.split(' ',)); // separa os valores
console.log(umaString.split(' ', 3)); // separa os 3 primeiros espaços
console.log(umaString.toLocaleUpperCase()); //transforma a frase em letras maiusculas
console.log(umaString.toLowerCase()); //transforma letras mmaiusculas em minusculas 