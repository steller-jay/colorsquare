
const squares = Array.from(document.querySelectorAll('.grid div'))
const button = document.querySelector('h2')

function getColor() {
    // get a number from 0 to 255 
    let number = Math.floor(Math.random() * 255)
    // round the number to a websafe color number
    safeColor = number - (number % 51)
    //  console.log("number=" + number + " safeColor=" + safeColor)
    return safeColor
}

function colorSquares() {
    let initRed = getColor()
    let initGreen = getColor()
    let initBlue = getColor()
    //console.log(initRed + ' ' + initGreen + ' ' + initBlue)
    // pick a random color to work with, red, green or blue
    let colorPath = Math.floor(Math.random() * 2)

    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'rgb(' + initRed + ',' + initGreen + ',' + initBlue + ')'
        squares[i].innerHTML = initRed + ', ' + initGreen + ', ' + initBlue

        if (initBlue > 51) {
            // this attempts to 'wrap around' the colors to keep them
            // in the same area
            initBlue = 0
        } else {
            initBlue += 51
        }

        if (initGreen < 51) {
            // this attempts to 'wrap around' the colors to keep them
            // in the same area
            initGreen = 255
        } else {
            initGreen -= 51
        }

        if (initRed < 15) {
            // this attempts to 'wrap around' the colors to keep them
            // in the same area
            initRed = 255
        } else {
            initRed -= 15
        }
    }
}

function randomSquares() {

    for (i = 0; i < squares.length; i++) {
        let initRed = getColor()
        let initGreen = getColor()
        let initBlue = getColor()
        squares[i].style.backgroundColor = 'rgb(' + initRed + ',' + initGreen + ',' + initBlue + ')'
        squares[i].innerHTML = initRed + ', ' + initGreen + ', ' + initBlue
    }
}

button.addEventListener('click', colorSquares)
