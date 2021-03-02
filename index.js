
const squares = Array.from(document.querySelectorAll('.grid div'))
const button = document.querySelector('h2')


function colorSquares() {
    let initColor = Math.floor(Math.random() * 999)
    let squareColor = initColor

    for (i = 0; i < squares.length; i++) {
        squares[i].style.background = '#' + squareColor
        squares[i].innerHTML = "#" + squareColor
        squareColor -= 50
        if (squareColor < 100) {
            // this attempts to 'wrap around' the colors to keep them
            // in the same area
            squareColor = initColor + (50 * (squares.length - i - 1))
        }
    }
}

button.addEventListener('click', colorSquares)
