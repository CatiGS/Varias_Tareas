// /**
//  * TIMERS
//  * ****************************************************************
//  * Permiten ejecutar acciones en el tiempo o que se repitan a lo largo de un tiempo concreto.
//  */

// // setTimeout(callback, ms), el callback se ejecuta después de x milisegundos
// setTimeout(() => {
//     document.write('5 SEGUNDOS!!!!')
// }, 1000) // 5 segundos

// // setInterval(callback, ms), el callback se ejecuta varias veces, separas entre ms
// let contador = 0
// setInterval(() => {
//     document.write(`Vamos sumando ${contador++}<br><br>`) // infinito de veces
// }, 1000) // 1 segundo, cada ejecución

// // Iniciar y Parar
// const saludaMuchasVeces = setInterval(() => {
//     contador++
//     if(contador > 1){
//         document.write(`Hola ${contador} veces<br>`)
//     } else {
//         document.write(`Hola ${contador} vez<br>`)
//     }
//     // parar
//     if(contador === 20){
//         clearInterval(saludaMuchasVeces)
//     }
// }, 1000)


// Objeto DATE
// document.write(new Date().toLocaleTimeString())
// setInterval(() => {
//     document.write(new Date().toLocaleTimeString())
// }, 1000)

// RELOJ en mi web
// ********************************
setInterval(() => {
    const reloj = document.getElementById('reloj')
    reloj.textContent = new Date().toLocaleTimeString()
}, 1000)

