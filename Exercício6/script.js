let codigo = document.querySelector("#codigo");
let quantidade = document.querySelector("#quantidade");
let resultado = document.querySelector("#resultado");

function calcular() {

    let cod = Number(codigo.value);
    let qtd = Number(quantidade.value);

    let produto = "";
    let preco = 0;

    if (cod == 1) {
        produto = "Cachorro Quente";
        preco = 11;
    }
    else if (cod == 2) {
        produto = "Bauru";
        preco = 8.50;
    }
    else if (cod == 3) {
        produto = "Misto Quente";
        preco = 9;
    }
    else if (cod == 4) {
        produto = "Cheeseburger";
        preco = 10;
    }
    else if (cod == 5) {
        produto = "Refrigerante";
        preco = 4.50;
    }

    let total = preco * qtd;

    resultado.innerHTML =
        "Produto: " + produto + "<br>" +
        "Quantidade: " + qtd + "<br>" +
        "Valor a pagar: R$ " + total.toFixed(2);
}