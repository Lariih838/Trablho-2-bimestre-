let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let resultado = document.querySelector("#resultado");
let btcalcular = document.querySelector("#bt")

function calcularIMC() {
    peso = Number(peso.value);
    altura = Number(altura.value);
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    }
    else if (imc < 25) {
        classificacao = "Peso normal";
    }
    else if (imc < 30) {
        classificacao = "Sobrepeso";
    }
    else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    }
    else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    }
    else {
        classificacao = "Obesidade grau 3";
    }

    resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br>Classificação: " + classificacao;
}
btcalcular.onclick = function(){
    calcularIMC();
}

