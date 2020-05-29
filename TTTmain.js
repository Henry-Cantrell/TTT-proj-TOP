//To-do list:

//Code win condition

//Win conditions: 3 horizontal wins, 3 vertical wins, 2 diagonal wins
//Horizontal wins: (firstSquare THRU thirdSquare, fourthSquare THRU sixthSquare, seventhSquare THRU ninthSquare)
//Vertical wins: (1SQ & 4SQ & 7SQ, 3SQ & 6SQ & 9SQ, 2SQ, 5SQ, 8SQ)
//Diagonal wins: (1 SQ & 5SQ & 9SQ, 3 SQ & 5SQ & 7SQ)

//Clean global scope

//Personal motivation:
//I know exactly how to do rest of tasks and am done w/ thinking part of project! 
//Only hard labor left...maybe use a slave? heheh

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

    thisTurn: true
}

function firstTurn() {

    gameSpace.thisTurn = false;

    console.log('firstTurn is active!')

    let oneArray = ['oneA'];

    const squareOne = gameSpace.firstSquare
    const squareTwo = gameSpace.secondSquare
    const squareThree = gameSpace.thirdSquare
    const squareFour = gameSpace.fourthSquare
    const squareFive = gameSpace.fifthSquare
    const squareSix = gameSpace.sixthSquare
    const squareSeven = gameSpace.seventhSquare
    const squareEight = gameSpace.eigthSquare
    const squareNine = gameSpace.ninthSquare

    if (oneArray.includes(gameSpace.firstSquare)) {
        squareTwo.textContent = 'jk'
    }
    //push the string of 1SQ instead of const value?
    gameSpace.firstSquare.addEventListener('click', () => {
        if (gameSpace.squareYi == true && gameSpace.thisTurn == false) {
        oneArray.push(squareOne)
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

    gameSpace.firstSquare.addEventListener('click', () => {
        if (gameSpace.squareYi == true && gameSpace.thisTurn == true) {
        twoArray.push(squareOne)
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



