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

    thisTurn: true,

    whileLooper: true,

}

let horizontalTopWin = 0;
let horizontalMiddleWin = 0;
let horizontalBottomWin = 0;

let verticalLeftWin = 0;
let verticalMiddleWin = 0;
let verticalRightWin = 0;

let diagonalLeftWin = 0;
let diagonalRightWin = 0;

//Beepity boopity bop!

let horizontalTopWinTwo = 0;
let horizontalMiddleWinTwo = 0;
let horizontalBottomWinTwo = 0;

let verticalLeftWinTwo = 0;
let verticalMiddleWinTwo = 0;
let verticalRightWinTwo = 0;

let diagonalLeftWinTwo = 0;
let diagonalRightWinTwo = 0;

function firstTurn() {

    const squareOne = gameSpace.firstSquare
    const squareTwo = gameSpace.secondSquare
    const squareThree = gameSpace.thirdSquare
    const squareFour = gameSpace.fourthSquare
    const squareFive = gameSpace.fifthSquare
    const squareSix = gameSpace.sixthSquare
    const squareSeven = gameSpace.seventhSquare
    const squareEight = gameSpace.eigthSquare
    const squareNine = gameSpace.ninthSquare

    gameSpace.thisTurn = false;

    console.log('firstTurn is active!')

    let oneArray = []

    let winCheck = () => {
        if (diagonalLeftWin == 3 || diagonalRightWin == 3 || horizontalTopWin == 3 || horizontalMiddleWin == 3 || horizontalBottomWin == 3 || verticalLeftWin == 3 || verticalMiddleWin == 3 || verticalRightWin == 3) {
        const winnerVar = document.createElement('p')
        winnerVar.textContent = 'Player X has won!'
        const bodyVar = document.getElementById('body')
        bodyVar.appendChild(winnerVar)
        console.log(oneArray)
    }else {console.log('winCheck returned false!')}}

    gameSpace.firstSquare.addEventListener('click', () => {
        if (gameSpace.squareYi == true && gameSpace.thisTurn == false) {
        oneArray.push(squareOne)
        horizontalTopWin += 1
        verticalLeftWin += 1
        diagonalLeftWin += 1
        winCheck()
        console.log(horizontalTopWin)
        gameSpace.squareYi = false,
        console.log(oneArray)
        gameFlow()
        squareOne.textContent = 'X'
    } else if (!gameSpace.squareYi && gameSpace.thisTurn == false) {
        gameFlow()
    }}, {once: true})

    gameSpace.secondSquare.addEventListener('click', () => {
        if (gameSpace.squareEr == true && gameSpace.thisTurn == false) {
        oneArray.push(squareTwo)
        horizontalTopWin += 1
        verticalMiddleWin += 1
        winCheck()
        gameSpace.squareEr = false;
        console.log(oneArray)
        gameFlow();
        squareTwo.textContent = 'X'
    } else if (!gameSpace.squareEr && gameSpace.thisTurn == false) {
        gameFlow()
    }},{once: true})

    gameSpace.thirdSquare.addEventListener('click', () => {
        if (gameSpace.squareSan == true && gameSpace.thisTurn == false) {
        oneArray.push(squareThree)
        horizontalTopWin += 1
        verticalRightWin += 1
        diagonalRightWin += 1
        winCheck()
        gameSpace.squareSan = false,
        console.log(oneArray)
        gameFlow()
        squareThree.textContent = 'X'
    } else if (!gameSpace.squareSan && gameSpace.thisTurn == false) {

        gameFlow()
    }}, {once: true})

    gameSpace.fourthSquare.addEventListener('click', () => {
        if (gameSpace.squareSi == true && gameSpace.thisTurn == false) {
        oneArray.push(squareFour)
        horizontalMiddleWin += 1
        verticalLeftWin += 1
        winCheck()
        gameSpace.squareSi = false;
        console.log(oneArray)
        gameFlow();
        squareFour.textContent = 'X'
    } else if (!gameSpace.squareFour && gameSpace.thisTurn == false) {
        gameFlow()
    }},{once: true})

    gameSpace.fifthSquare.addEventListener('click', () => {
        if (gameSpace.squareWu == true && gameSpace.thisTurn == false) {
        oneArray.push(squareFive)
        horizontalMiddleWin += 1
        verticalMiddleWin += 1
        diagonalLeftWin += 1
        diagonalRightWin += 1
        winCheck()
        gameSpace.squareWu = false,
        console.log(oneArray)
        gameFlow()
        squareFive.textContent = 'X'
    } else if (!gameSpace.squareWu && gameSpace.thisTurn == false) {
        gameFlow()
    }}, {once: true})

    gameSpace.sixthSquare.addEventListener('click', () => {
        if (gameSpace.squareLiu == true && gameSpace.thisTurn == false) {
        oneArray.push(squareSix)
        horizontalMiddleWin += 1
        verticalRightWin += 1
        winCheck()
        gameSpace.squareLiu = false;
        console.log(oneArray)
        gameFlow();
        squareSix.textContent = 'X'
    } else if (!gameSpace.squareLiu && gameSpace.thisTurn == false) {
        gameFlow()
    }},{once: true})

    gameSpace.seventhSquare.addEventListener('click', () => {
        if (gameSpace.squareQi == true && gameSpace.thisTurn == false) {
        oneArray.push(squareSeven)
        horizontalBottomWin += 1;
        verticalLeftWin += 1
        diagonalRightWin += 1
        winCheck()
        gameSpace.squareQi = false,
        console.log(oneArray)
        gameFlow()
        squareSeven.textContent = 'X'
    } else if (!gameSpace.squareQi && gameSpace.thisTurn == false) {

        gameFlow()
    }}, {once: true})

    gameSpace.eigthSquare.addEventListener('click', () => {
        if (gameSpace.squareBa == true && gameSpace.thisTurn == false) {
        oneArray.push(squareEight)
        horizontalBottomWin += 1
        verticalMiddleWin += 1
        winCheck()
        gameSpace.squareBa = false;
        console.log(oneArray)
        gameFlow();
        squareEight.textContent = 'X'
    } else if (!gameSpace.squareBa && gameSpace.thisTurn == false) {
        gameFlow()
    }},{once: true})

    gameSpace.ninthSquare.addEventListener('click', () => {
        if (gameSpace.squareNiu == true && gameSpace.thisTurn == false) {
        oneArray.push(squareNine)
        horizontalBottomWin += 1
        verticalRightWin += 1
        diagonalLeftWin += 1
        winCheck()
        gameSpace.squareNiu = false;
        console.log(oneArray)
        gameFlow();
        squareNine.textContent = 'X'
    } else if (!gameSpace.squareNiu && gameSpace.thisTurn == false) {
        gameFlow()
    }},{once: true})
}

function secondTurn() {

    gameSpace.thisTurn = true;

    console.log("secondTurn is active!")

    let twoArray = ['twoA'];

    const squareOne = gameSpace.firstSquare
    const squareTwo = gameSpace.secondSquare
    const squareThree = gameSpace.thirdSquare
    const squareFour = gameSpace.fourthSquare
    const squareFive = gameSpace.fifthSquare
    const squareSix = gameSpace.sixthSquare
    const squareSeven = gameSpace.seventhSquare
    const squareEight = gameSpace.eigthSquare
    const squareNine = gameSpace.ninthSquare

    let winCheckTwo = () => {
        if (diagonalLeftWinTwo == 3 || diagonalRightWinTwo == 3 || horizontalTopWinTwo == 3 || horizontalMiddleWinTwo == 3 || horizontalBottomWinTwo == 3 || verticalLeftWinTwo == 3 || verticalMiddleWinTwo == 3 || verticalRightWinTwo == 3) {
        const winnerVar = document.createElement('p')
        winnerVar.textContent = 'Player O has won!'
        const bodyVar = document.getElementById('body')
        bodyVar.appendChild(winnerVar)
        console.log(oneArray)
    }else {console.log('winCheck returned false!')}}

    gameSpace.firstSquare.addEventListener('click', () => {
        if (gameSpace.squareYi == true && gameSpace.thisTurn == true) {
        twoArray.push(squareOne)
        verticalLeftWinTwo += 1
        horizontalTopWinTwo +=
        diagonalLeftWinTwo +=
        winCheckTwo()
        console.log(twoArray)
        gameSpace.squareYi = false;
        gameFlow();
        squareOne.textContent = 'O'
    } else if (!gameSpace.squareYi && gameSpace.thisTurn == true) {
        gameFlow();
    }},{once: true})

    gameSpace.secondSquare.addEventListener('click', () => {
        if (gameSpace.squareEr == true && gameSpace.thisTurn == true) {
        twoArray.push(squareTwo)
        verticalMiddleWinTwo += 1
        horizontalTopWinTwo += 1
        winCheckTwo()
        console.log(twoArray)
        gameSpace.squareEr = false;
        gameFlow();
        squareTwo.textContent = 'O'
    } else if (!gameSpace.squareEr && gameSpace.thisTurn == true) {
        gameFlow()
    }},{once: true})

    gameSpace.thirdSquare.addEventListener('click', () => {
        if (gameSpace.squareSan == true && gameSpace.thisTurn == true) {
        twoArray.push(squareThree)
        horizontalTopWinTwo += 1
        verticalRightWinTwo += 1
        diagonalRightWinTwo += 1
        winCheckTwo()
        gameSpace.squareSan = false,
        console.log(twoArray)
        gameFlow()
        squareThree.textContent = 'O'
    } else if (!gameSpace.squareSan && gameSpace.thisTurn == true) {
        gameFlow()
    }}, {once: true})

    gameSpace.fourthSquare.addEventListener('click', () => {
        if (gameSpace.squareSi == true && gameSpace.thisTurn == true) {
        twoArray.push(squareFour)
        verticalLeftWinTwo += 1
        horizontalMiddleWinTwo +=1 
        winCheckTwo()
        gameSpace.squareSi = false;
        console.log(twoArray)
        gameFlow();
        squareFour.textContent = 'O'
    } else if (!gameSpace.squareFour && gameSpace.thisTurn == true) {
        gameFlow()
    }},{once: true})

    gameSpace.fifthSquare.addEventListener('click', () => {
        if (gameSpace.squareWu == true && gameSpace.thisTurn == true) {
        twoArray.push(squareFive)
        diagonalLeftWinTwo += 1
        diagonalRightWinTwo +=1
        horizontalMiddleWinTwo += 1
        verticalMiddleWinTwo += 1
        winCheckTwo()
        gameSpace.squareWu = false,
        console.log(twoArray)
        gameFlow()
        squareFive.textContent = 'O'
    } else if (!gameSpace.squareWu && gameSpace.thisTurn == true) {
        gameFlow()
    }}, {once: true})

    gameSpace.sixthSquare.addEventListener('click', () => {
        if (gameSpace.squareLiu == true && gameSpace.thisTurn == true) {
        twoArray.push(squareSix)
        verticalRightWinTwo += 1
        horizontalMiddleWinTwo +=1
        winCheckTwo()
        gameSpace.squareLiu = false;
        console.log(twoArray)
        gameFlow();
        squareSix.textContent = 'O'
    } else if (!gameSpace.squareLiu && gameSpace.thisTurn == true) {
        gameFlow()
    }},{once: true})

    gameSpace.seventhSquare.addEventListener('click', () => {
        if (gameSpace.squareQi == true && gameSpace.thisTurn == true) {
        twoArray.push(squareSeven)
        verticalLeftWinTwo +=1 
        horizontalBottomWinTwo +=1
        winCheckTwo()
        gameSpace.squareQi = false,
        console.log(twoArray)
        gameFlow()
        squareSeven.textContent = 'O'
    } else if (!gameSpace.squareQi && gameSpace.thisTurn == true) {
        gameFlow()
    }}, {once: true})

    gameSpace.eigthSquare.addEventListener('click', () => {
        if (gameSpace.squareBa == true && gameSpace.thisTurn ==true) {
        twoArray.push(squareEight)
        verticalMiddleWinTwo += 1
        horizontalBottomWinTwo += 1
        winCheckTwo()
        gameSpace.squareBa = false;
        console.log(twoArray)
        gameFlow();
        squareEight.textContent = 'O'
    } else if (!gameSpace.squareBa && gameSpace.thisTurn == true) {
        gameFlow()
    }},{once: true})

    gameSpace.ninthSquare.addEventListener('click', () => {
        if (gameSpace.squareNiu == true && gameSpace.thisTurn == true) {
        twoArray.push(squareNine)
        verticalRightWinTwo += 1
        diagonalLeftWinTwo += 1
        horizontalBottomWinTwo += 1
        winCheckTwo()
        gameSpace.squareNiu = false;
        console.log(twoArray)
        gameFlow();
        squareNine.textContent = 'O'
    } else if (!gameSpace.squareNiu && gameSpace.thisTurn == true) {
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



