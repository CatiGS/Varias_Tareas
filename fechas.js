// DATE
// ****************************************************

// Ahora
let ahora = new Date()
document.write(`AHORA: ${ahora}<br><br>`)

// aniversario
const aniversario = new Date(1999,0,20)
document.write(`ANIVERSARIO: ${aniversario}<br><br>`)

//aniversario fecha+hora
const aniversarioFecha = new Date(1999,0,20,14,33)
document.write(`ANIVERSARIO_FECHA: ${aniversarioFecha}<br><br>`)

// aniversario como un String
const aniversarioString = new Date('Jan 23 2000 18:12:01')
document.write(`ANIVERSARIO_STRING: ${aniversarioString}<br><br>`)

// Métodos con Date
document.write(`AÑO: ${ahora.getFullYear()}<br><br>`)
document.write(`Mes(0/11): ${ahora.getMonth()}<br><br>`)
document.write(`DIAS(0/6): ${ahora.getDay()}<br><br>`)
document.write(`MINUTOS: ${ahora.getMinutes()}<br><br>`)
document.write(`SEGUNDOS: ${ahora.getSeconds()}<br><br>`)
document.write(`MILISEGUNDOS desde el 1 de enero de 1970: ${ahora.getTime()}<br><br>`)

// getTimezoneOffset(), función
const getTimezoneOffset = new Date().getTimezoneOffset()
document.write(getTimezoneOffset)
// diferencia horaria entre tu pais


// CALCULO de fechas
// cumpleaños de una persona
const fechaNacimiento = new Date(2001, 0, 1)
const ahoraActual = new Date()

document.write(`<br><br>Diferencia en milisegundos del cumpleaños: ${ahoraActual - fechaNacimiento}<br><br>`)

// ***********************************
// EJEMPLO de un contador de un evento
// ***********************************
// Elemento Imagen del Evento

// función calcular la diferencia
const tiempoFalta = limite => {
    let ahora = new Date(),
        // pasar de milisegundos a segundos
        tiempoQFalta = (new Date(limite) - ahora) / 1000,
        segundos = ('0' + Math.floor(tiempoQFalta % 60)).slice(-2),
        minutos = ('0' + Math.floor(tiempoQFalta / 60 % 60)).slice(-2),
        horas = ('0' + Math.floor(tiempoQFalta / 3600 % 60)).slice(-2),
        dias = Math.floor(tiempoQFalta / (3600 * 24))

        return {
            tiempoQFalta,
            segundos,
            minutos,
            horas,
            dias
        }
}

// console.log(tiempoFalta('Feb 18 2021 18:36:25 GMT+0100'))

// función refrescar digitos
const contador = (limitar, elemento, mensaje) => {
    const elem = document.getElementById(elemento)

    const actualizar = setInterval(() => {
        let tiempo = tiempoFalta(limitar)
        elem.innerHTML = `${tiempo.dias}d:${tiempo.horas}h:${tiempo.minutos}m:${tiempo.segundos}s`

        if(tiempo.tiempoQFalta <= 1){
            clearInterval(actualizar)
            elem.innerHTML = mensaje
        }
    }, 1000) // 1 segundo
}

contador('Feb 17 2021 18:51:00 GMT+0100', 'reloj_evento', 'EVENTO OK')