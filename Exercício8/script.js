function calcSal() {

    let nivel = document.querySelector("#nivel").value;
    let aulas = document.querySelector("#aulas").value;

    let valorHora = 0;
    let sal = 0;


    if (aulas === "") {
        document.querySelector("#res").innerHTML =
            " Digite a quantidade de aulas.";
        return;
    }

    aulas = Number(aulas);

    if (nivel === "1") {
        valorHora = 12;
    }
    else if (nivel === "2") {
        valorHora = 17;
    }
    else if (nivel === "3") {
        valorHora = 25;
    }

    sal = valorHora * aulas * 4.5;

    document.querySelector("#res").innerHTML =
        " Salário: R$ " + sal.toFixed(2);
}