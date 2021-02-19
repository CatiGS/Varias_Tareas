// CALCULADORA
// ****************************************************

const buttons = document.querySelectorAll('button')

for (let item of buttons) {
    //Click
    item.addEventListener('click', evento => {
        /*let x = event.target.tagName;*/
        if (!document.getElementById("pantalla").innerHTML)
            document.getElementById("pantalla").innerHTML = '0'
        let valorPantalla = document.getElementById("pantalla").innerHTML
        let idboton = evento.target.id
        let final = idboton.substr(idboton.indexOf("_") + 1, idboton.length)

        switch (final) {
            case 'C':
                document.getElementById("pantalla").innerHTML = "0"
                break;
            case 'Suma':

                document.getElementById("pantalla").innerHTML = valorPantalla + "+"
                break;
            case 'Resta':

                document.getElementById("pantalla").innerHTML = valorPantalla + "-"
                break;
            case 'Mult':

                document.getElementById("pantalla").innerHTML = valorPantalla + "*"
                break;
            case 'Div':

                document.getElementById("pantalla").innerHTML = valorPantalla + "/"
                break;
            case 'Igual':
                let total = eval(valorPantalla)
                document.getElementById("pantalla").innerHTML = total
                break;
            default:
                if (valorPantalla == '0')
                    valorPantalla = ""
                document.getElementById("pantalla").innerHTML = valorPantalla + Number(final)
        }

    })

}