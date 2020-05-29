//To-do list:

(function gameBoardCreator() {
for (let i=0; i<9; i++) {

    let gameSquare = document.createElement('div')
    gameSquare.id = "gameSquare" + i;
    gameSquare.className = "gameSquares"

    const gameBoard = document.getElementById('gameBoard')

    gameBoard.appendChild(gameSquare)
}
})();

let gameSpace = {

    firstSquare: document.getElementById('gameSquare0'),
    secondSquare: document.getElementById('gameSquare1'),
    thirdSquare: document.getElementById('gameSquare2'),
    fourthSquare: document.getElementById('gameSquare3'),
    fifthSquare: document.getElementById('gameSquare4'),
    sixthSquare: document.getElementById('gameSquare5'),
    seventhSquare: document.getElementById('gameSquare6'),
    eigthSquare: document.getElementById('gameSquare7'),
    ninthSquare: document.getElementById('gameSquare8'),

    squareYi: true,
    squareEr: true,
    squareSan: true,
    squareSi: true,
    squareWu: true,
    squareLiu: true,
    squareQi: true,
    squareBa: true,
    squareNiu: true,
    squareShi: true,

    thisTurn: true
}

function firstTurn() {

    gameSpace.thisTurn = false;

    console.log('firstTurn is active!')

    let oneArray = ['oneA'];

    const squareOne = gameSpace.firstSquare
    const squareTwo = gameSpace.secondSquare

    gameSpace.firstSquare.addEventListener('click', () => {
        if (gameSpace.squareYi == true && gameSpace.thisTurn == false) {
        oneArray.push(squareOne)
        gameSpace.squareYi = false,
        console.log(oneArray)
        gameFlow()
    } else if (!gameSpace.squareYi && gameSpace.thisTurn == false) {
        console.log('Value 1 false for firstTurn')
        gameFlow()
    }}, {once: true})

    gameSpace.secondSquare.addEventListener('click', () => {
        if (gameSpace.squareEr == true && gameSpace.thisTurn == false) {
        oneArray.push(squareTwo)
        gameSpace.squareEr = false;
        console.log(oneArray)
        gameFlow();
    } else if (!gameSpace.squareEr && gameSpace.thisTurn == false) {
        console.log('Value 2 false for firstTurn')
        gameFlow()
    }},{once: true})

}

function secondTurn() {

    gameSpace.thisTurn = true;

    console.log(gameSpace.thisTurn)

    console.log("secondTurn is active!")

    let twoArray = ['twoA'];

    const squareOne = gameSpace.firstSquare
    const squareTwo = gameSpace.secondSquare

    gameSpace.firstSquare.addEventListener('click', () => {
        if (gameSpace.squareYi == true && gameSpace.thisTurn == true) {
        twoArray.push(squareOne)
        console.log(twoArray)
        gameSpace.squareYi = false;
        gameFlow();
    } else if (!gameSpace.squareYi && gameSpace.thisTurn == true) {
        console.log('Value 1 false for secondTurn')
        gameFlow();
    }},{once: true})

    gameSpace.secondSquare.addEventListener('click', () => {
        if (gameSpace.squareEr == true && gameSpace.thisTurn == true) {
        twoArray.push(squareTwo)
        console.log(twoArray)
        gameSpace.squareEr = false;
        gameFlow();
    } else if (!gameSpace.squareEr && gameSpace.thisTurn == true) {
        console.log('Value 2 false for secondTurn')
        gameFlow()
    }},{once: true})

}

function gameFlow() {
    gameSpace.thisTurn ? firstTurn() : secondTurn();
}  

document.addEventListener('DOMContentLoaded', function gameStart() {
    
console.log('Load complete!')

firstTurn()

}, {once:true})



