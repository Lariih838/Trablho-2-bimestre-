let inputx = document.querySelector("#x");
let inputy = document.querySelector("#y");
let inputz = document.querySelector("#z");
let resultado = document.querySelector("#resultado");

function verificarTriangulo() {    
    let x = Number(inputx.value);  
    let y = Number(inputy.value);  
    let z = Number(inputz.value);

   
    if ((x < y + z) && (y < x + z) && (z < x + y)) {

        let tipo;

        if (x === y && y === z) {
            tipo = "Equilátero";
        }
        else if (x === y || x === z || y === z) {
            tipo = "Isósceles";
        }
        else {
            tipo = "Escaleno";
        }

        resultado.innerHTML = " Forma um triângulo " + tipo;
    }
    else {
        resultado.innerHTML = " Os valores não formam um triângulo.";
    }
}