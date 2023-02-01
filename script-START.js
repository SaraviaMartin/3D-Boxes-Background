/*Primero tenemos que llamar los elementos que vamos a manipular*/
const boxesContainer = document.getElementById('boxes')
const button = document.getElementById('button')

/*Alternamos la clase del boxesContainer con classlist.toggle */
button.addEventListener('click', () => boxesContainer.classList.toggle('big'))
/*Creamos la logica de las cajas */
function createBoxes() {
    for(let i = 0; i < 4 ; i++){
        for(let j = 0; j < 4; j++){
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()