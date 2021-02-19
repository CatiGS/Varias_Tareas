// DIVISAS
// ****************************************************


let total = 0
let botonCalcular = document.getElementById("botonCalcular")
let botonConvertir = document.getElementById("botonConvertir")



botonCalcular.addEventListener('click', () => {
    let valorDe = document.getElementById("inputDe").value
    let valorA = document.getElementById("inputA").value
    let importe = document.getElementById("importeRect").value
    let resultado = document.getElementById("resultado")
    if (isNaN(importe)) {
        resultado.innerHTML = "Te has equivocado tiene que poner un valor numérico!!"
    } else {
        if (valorDe === "eur" && valorA === "usd") {
            total = importe * 1.21
            resultado.innerHTML = " El resultado en USD es: " + total
        }
        if (valorDe === "usd" && valorA === "eur") {
            total = importe * 0.82
            resultado.innerHTML = " El resultado en EUR es: " + total
        }
    }
})

botonConvertir.addEventListener('click', () => {
    document.getElementById("resultado").innerHTML = ""
    let valorDe = document.getElementById("inputDe").value
    let valorA = document.getElementById("inputA").value
    if ((valorDe === "eur" && valorA === "usd") || (valorDe === "usd" && valorA === "eur")) {

        document.getElementById("inputDe").value = valorA
        document.getElementById("inputA").value = valorDe
    }

})