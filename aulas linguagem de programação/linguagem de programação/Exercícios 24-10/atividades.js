function atividade1 () {
    /*Faça um programa que receba o salário de um funcionário, 
    calcule e mostre o salário anterior, o novo salário, 
    e mostre o valor do aumento, sabendo-se que este sofreu um aumento de 25%.*/
    
    let salario = Number(prompt("Digite o seu salário: "));

    let aumento = (salario * 0.25);
    let novoSalario = (salario + aumento); 


        alert(
        `
         Salário Antigo: ${salario} 
         Aumento: ${aumento} 
         Novo Salário: ${novoSalario}
        `
        )
}
function atividade2 (){
    /*Faça um programa que receba o salário base de um funcionário, 
    calcule e mostre o salário a receber, 
    sabendo-se que o funcionário tem gratificação de 5% sobre o salário base 
    e paga imposto de 7% também sobre o salário base.*/ 
    
    let salario = Number(prompt("Digite o salário: "));

    let gratificação = (salario * 0.05);
    let imposto = (salario * 0.07);

    let novoSalario = ((salario + gratificação) - imposto);

        alert(
        `
         Salário Base: ${salario}
         Gratificação: ${gratificação}
         Imposto: ${imposto}
         Salário a Receber: ${novoSalario}
        `   
        )
}
function atividade3 (){
    /*Faça um programa que calcule e mostre a área de um triângulo. 
    Sabe-se que: Área = (base * altura)/2.*/ 
    
    let base = Number(prompt("Digite o valor da base do triângulo: "));
    let altura = Number(prompt("Digite o valor da altura do triângulo: "));

    let area = (base * altura) / 2;

        alert(
        `
         Base do triângulo: ${base}
         Altura do trângulo: ${altura}
         Área do triangulo: ${area}
        `
        )
}
function atividade4(){
    /*Faça um programa que calcule e mostre a área de um círculo. Sabe-se que: Área = pi * R2.*/

    let raio = Number(prompt("Digite o valor do raio do círculo:  "));

    let area = Math.PI * (raio**2);

        alert(
        `
         A área do circulo com raio ${raio} é de ${area}
        `    
        )
}
function atividade5(){
    /*Faça um programa que receba um número positivo e maior que zero, calcule e mostre: 
    o número digitado ao quadrado; 
    o número digitado ao cubo; 
    a raiz quadrada do número digitado; 
    a raiz cúbica do número digitado*/

    let numero = Number(prompt("Digite um número positivo e maior que zero: "));
    if (numero > 0){
    
        let quadrado = (numero**2);
        let cubo = (numero**3);
        let raiz_quadrada = Math.sqrt(numero);
        let raiz_cubica = Math.cbrt(numero);

            alert(
            `
            O número ao quadrado é: ${quadrado}
            O número ao cubo é: ${cubo}
            A raiz quadrada desse número é: ${raiz_quadrada}
            A raiz cúbica desse número é: ${raiz_cubica}
            `
            );
    }    
    else
    {
            alert(`O número digitado não é valido, digite um número positivo e maior que zero!`);
    }

}
function atividade6(){
    /*Sabe-se que: 
    pé = 12 polegadas 
    1 jarda = 3 pés 
    1 milha = 1,760 jarda 

    Faça um programa que receba uma medida em pés, faça as conversões a seguir e mostre os resultados. 
    polegadas; 
    jardas; 
    milhas. */

    let medidaPes = Number(prompt("Entre com a medida em pés: "));

    // Verifica se a medida é um número válido
    if (!isNaN(medidaPes)) {
        
        let polegadas = medidaPes * 12; // 1 pé = 12 polegadas
        let jardas = medidaPes / 3; // 1 jarda = 3 pés
        let milhas = medidaPes / 1760; // 1 milha = 1760 jardas

        
        alert(
        `
            Medida em polegadas: ${polegadas}
            Medida em jardas: ${jardas}
            Medida em milhas: ${milhas}
        `
        );
    } 
    else 
    {
        alert("Por favor, digite uma medida válida em pés.");
    }

}
function atividade7(){
    /*Faça um programa que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre: 
     1. a idade dessa pessoa; 
     2. quantos anos ela terá em 2050. */

    let anoNascimento = Number(prompt("Digite o ano do seu nascimento: "));
    
    //let anoAtual = Number(prompt("Digite o ano Atual: "));
    let anoAtual = new Date().getFullYear(); // Obtém o ano atual

    let idade = (anoAtual - anoNascimento);
    let idade_2050 = (2050 - anoNascimento);

    alert(
    `
     Sua idade é de ${idade} anos.
     Em 2050 você terá ${idade_2050} anos de idade.
    `
    )

}
function atividade8(){
    /*Faça um programa que calcule e mostre a tabuada de um número digitado pelo usuário. */

    let numero = parseInt(prompt("Digite um numero para mostrar a tabuada."));/* Nesse caso o number não 
    funciona, pois com ele se apertar a tecla enter sem digitar qualquer numero,
     aparece a tabuada do zero.*/

        // Verifica se o número é válido
    if (!isNaN(numero)) {
        // Calcula e exibe a tabuada
        document.write(`<h2>Tabuada do ${numero}:</h2>`);
        for (let i = 1; i <= 10; i++) {
            let resultado = numero * i;
            document.write(`${numero} x ${i} = ${resultado}<br>`);
        }
    }
    else
    {
        alert("Por favor, digite um número válido.");
    }
}