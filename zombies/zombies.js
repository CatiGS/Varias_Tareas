// ZOMBIES
// ****************************************************
// control de cursores

let x = 0,
    y = 0
const Item = document.getElementById('zombie'),
    up = () => Item.style.transform = `translate(${x}%, ${y -= 10}%)`
down = () => Item.style.transform = `translate(${x}%, ${y += 10}%)`
right = () => Item.style.transform = `translate(${x += 10}%, ${y}%)`
left = () => Item.style.transform = `translate(${x -= 10}%, ${y}%)`


// mover zombie
// innerWidth y innerHeight, zona navegable
document.addEventListener('keyup', evento => {
    //console.log(`POSICION: ${x} - ${y}  NAVEGABLE: ${innerWidth} - ${innerHeight}`)
    if (((x >= 0) && (x <= innerWidth)) && ((x >= 0) && (y <= innerHeight))) {
        switch (evento.key) {
            case 'ArrowUp':
                up()
                break
            case 'ArrowDown':
                down()
                break
            case 'ArrowRight':
                right()
                break
            case 'ArrowLeft':
                left()
                break
        }
    } else {
        alert("Te sales de la pantalla!! posicion: " + x + "," + y)
        x = 0
        y = 0
    }
})