let salario = document.querySelector("#salario");
let cargo = document.querySelector("#cargo");
let resultado = document.querySelector("#resultado");

function calcular() {

    let salarioAtual = Number(salario.value);
    let codigo = Number(cargo.value);

    let percentual;

    if (codigo == 101) {
        percentual = 10;
    }
    else if (codigo == 102) {
        percentual = 20;
    }
    else if (codigo == 103) {
        percentual = 30;
    }
    else {
        percentual = 40;
    }

    let aumento = salarioAtual * percentual / 100;
    let novoSalario = salarioAtual + aumento;

    resultado.innerHTML =
        "Salário Antigo: R$ " + salarioAtual.toFixed(2) + "<br>" +
        "Novo Salário: R$ " + novoSalario.toFixed(2) + "<br>" +
        "Diferença: R$ " + aumento.toFixed(2);
}