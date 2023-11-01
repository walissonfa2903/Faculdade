let nome = prompt("Digite seu nome");
    let sobrenome = prompt("Digite seu sobrenome");
    let idade = prompt("Digite sua idade");
    let peso = Number(prompt("Digite seu peso"));
    let altura = Number(prompt("Digite sua altura"));

    let imc = peso / (altura * altura);

    document.write(
        `Nome: ${nome} ${sobrenome} <br>
        Idade: ${idade} <br> 
        Peso: ${peso} <br>
        Altura: ${altura} <br>
        IMC: ${imc.toFixed(2)}`
    );
