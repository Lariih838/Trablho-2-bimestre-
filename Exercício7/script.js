function calcVenda() {

    let preco = Number(document.querySelector("#preco").value);
    let pag = document.querySelector("#pag").value;

    let total;

    if (pag == "a") {
        total = preco - (preco * 0.10);
    }
    else if (pag == "b") {
        total = preco - (preco * 0.15);
    }
    else if (pag == "c") {
        total = preco;
    }
    else {
        total = preco + (preco * 0.10);
    }

    document.querySelector("#res").innerHTML =
        " Valor a pagar: R$ " + total.toFixed(2);
}