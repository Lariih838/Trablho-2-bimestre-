let saldo = document.querySelector("#saldo");
let resultado = document.querySelector("#resultado");

function calcular() {

    let saldoMedio = Number(saldo.value);
    let percentual = 0;

    if (saldoMedio <= 200) {
        percentual = 0;
    }
    else if (saldoMedio <= 400) {
        percentual = 20;
    }
    else if (saldoMedio <= 600) {
        percentual = 30;
    }
    else {
        percentual = 40;
    }

    let credito = saldoMedio * percentual / 100;

    resultado.innerHTML =
        "Saldo Médio: R$ " + saldoMedio.toFixed(2) + "<br>" +
        "Crédito: R$ " + credito.toFixed(2);
}