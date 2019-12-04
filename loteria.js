function loteria() {
    var num1 = document.getElementById("jugada1").value;
    var num2 = document.getElementById("jugada2").value;
    var num3 = document.getElementById("jugada3").value;
    var pri = document.getElementById("primer").innerHTML = Math.floor(Math.random() * 100);
    var seg = document.getElementById("segundo").innerHTML = Math.floor(Math.random() * 100);
    var ter = document.getElementById("tercero").innerHTML = Math.floor(Math.random() * 100);


    if (num1 == pri) {
        document.getElementById("mensaje").innerHTML = "Felicidades Acertó el premio mayor con su primera jugada";
    }
    if (num1 == seg || num1 == ter) {
        document.getElementById("mensaje").innerHTML = "Felicidades Acertó el segundo premio con su primera jugada";
    }
    if (num1 == ter) {
        document.getElementById("mensaje").innerHTML = "Felicidades Acertó el tercer premio con su primera jugada";
    }

    if (num2 == pri) {
        document.getElementById("mensaje").innerHTML = "Felicidades Acertó el premio mayor con su segunda jugada";
    }
    if (num2 == seg || num1 == ter) {
        document.getElementById("mensaje").innerHTML = "Felicidades Acertó el segundo premio con su segunda jugada";
    }
    if (num2 == ter) {
        document.getElementById("mensaje").innerHTML = "Felicidades Acertó el tercer premio con su segunda jugada";
    }
    if (num2 == pri) {
        document.getElementById("mensaje").innerHTML = "Felicidades Acertó el premio mayor con su tercera jugada";
    }
    if (num2 == seg || num1 == ter) {
        document.getElementById("mensaje").innerHTML = "Felicidades Acertó el segundo premio con su tercera jugada";
    }
    if (num3 == ter) {
        document.getElementById("mensaje").innerHTML = "Felicidades Acertó el tercer premio con su tercera jugada";
    } else {
        document.getElementById("mensaje").innerHTML = "Lo sentimos usted se gualló, intente de nuevo....";
    }


}