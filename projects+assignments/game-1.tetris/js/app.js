document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");

    let squares = Array.from(document.querySelectorAll(".grid div")); // array from a html collection

    const scoreDisplay = document.querySelector("#score");
    const startBtn = document.querySelector("#start-button");

    const width = 10;

    let nextRandom = 0;
    let timerId;
    let score = 0;
    const colors = ["orange", "red", "purple", "green", "blue"];

    //The Tetrominoes
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2],
    ];

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
    ];

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1],
    ];

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
    ];

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
    ];

    const theTetrominoes = [
        lTetromino,
        zTetromino,
        tTetromino,
        oTetromino,
        iTetromino,
    ];

    let currentRotation = 0;
    let currentPosition = 4;
    // randomly selecting one tetromino and its first rotation
    let random = Math.floor(Math.random() * theTetrominoes.length);

    let current = theTetrominoes[random][currentRotation];

    //draw the current tetromino
    function draw() {
        current.forEach((index) => {
            squares[currentPosition + index].classList.add("tetromino");
            squares[currentPosition + index].style.backgroundColor =
                colors[random];
        });
    }
    // remove the tetromino
    function undraw() {
        current.forEach((index) => {
            squares[currentPosition + index].classList.remove("tetromino");
            squares[currentPosition + index].style.backgroundColor = "";
        });
    }

    //    moving the tetrominos around the grid

    timerId = setInterval(moveDown, 1000);

    // move down function
    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    //freeze function  - with an if - else  condition==> to make them stop

    function freeze() {
        if (
            current.some((index) =>
                squares[currentPosition + index + width].classList.contains(
                    "taken"
                )
            )
        ) {
            //  means that one or some of the squares of the tetromino has + width means th next line is class taken
            // then we make the whole tetromino taken  and re call the another tetromino to fall from the sky
            current.forEach((index) =>
                squares[currentPosition + index].classList.add("taken")
            );

            //starting a new tetromino falling
            random = nextRandom;
            nextRandom = Math.floor(Math.random() * theTetrominoes.length);
            current = theTetrominoes[random][currentRotation];
            currentPosition = 4;
            draw();
            displayShape();
        }
    }
// move the tetromino  















const displaySquares = document.querySelectorAll('.mini-grid div');
const displaywidth =4
const displayIndex = 0


//the Tetrominos without rotations
const upNextTetrominoes = [
  [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
  [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
  [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
  [0, 1, displayWidth, displayWidth+1], //oTetromino
  [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
]
//display the shape in the minni grid 

function displayShape()
{

    //remove any trace of the tetromino form the entire grid
    displaySquares.forEach(square => {square.classList.remove('tetromino')} )
    
upNextTetrominoes[nextRandom].forEach(index=> 
    displaySquares[displayIndex+ index].classList.add ('tetromino'))


}
















});
