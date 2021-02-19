// AUTONOMO
// ****************************************************
let pulsador = document.getElementById("pulsador")
let contador = 0
let centesimas = 0
let segundos = 0
let minutos = 0
let horas = 0
let Segundos = document.getElementById("Segundos")
let Minutos = document.getElementById("Minutos")
let Horas = document.getElementById("Horas")
Segundos.innerHTML = ":00"
Minutos.innerHTML = ":00"
Horas.innerHTML = "00"

function cronometro() {

    if (centesimas == 0) {
        segundos++;
        if (segundos < 10) { segundos = "0" + segundos }
        Segundos.innerHTML = ":" + segundos
    }
    if (segundos == 59) {
        segundos = -1
    }
    if ((centesimas == 0) && (segundos == 0)) {
        minutos++;
        if (minutos < 10) { minutos = "0" + minutos }
        Minutos.innerHTML = ":" + minutos
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ((centesimas == 0) && (segundos == 0) && (minutos == 0)) {
        horas++;
        if (horas < 10) { horas = "0" + horas }
        Horas.innerHTML = horas
    }
}


function parar(control) {
    clearInterval(control);

}

function reinicio(control) {
    clearInterval(control);

    segundos = 0;
    minutos = 0;
    horas = 0;

    Segundos.innerHTML = ":00";
    Minutos.innerHTML = ":00";
    Horas.innerHTML = "00";

}


pulsador.addEventListener('click', () => {
    contador++
    if (contador % 2 !== 0)
        control = setInterval(cronometro, 1000)
    else
        parar(control)

})