function calcImp() {
    let ano = Number(document.querySelector("#ano").value);
    let val = Number(document.querySelector("#valor").value);

    let imp;

    if (ano < 1990) {
        imp = val * 0.01;
    } else {
        imp = val * 0.015;
    }

    document.querySelector("#res").innerHTML =
        "Imposto a pagar: R$ " + imp.toFixed(2);
}