
// selecting elements
const playerEl = document.querySelector(".player-0")
const playerEl1 = document.querySelector(".player-1")

const score0 = document.getElementById("score-0")
const score1 = document.getElementById("score-1")

const current0 = document.getElementById("current-0")
const current1 = document.getElementById("current-1")

const diceEl = document.querySelector(".dice")
// buttons
const buttonNew = document.querySelector(".btn-new")
const buttonHold = document.querySelector(".btn-hold")
const buttonRoll = document.querySelector(".btn-roll")
// Starting Conditions

diceEl.classList.add("hidden")
// rolling dice functionality
var scores = [0, 0]
let currentScore = 0;
let activeplayer = 0;
let player = true;

const switchPlayer = () => {
    document.getElementById(`current-${ activeplayer }`).textContent = 0
    currentScore = 0
    activeplayer = activeplayer === 0 ? 1 : 0;
    playerEl.classList.toggle("player-active")
    playerEl1.classList.toggle("player-active")
}
buttonRoll.addEventListener('click', function () {
    if (player) {
        // Genrating a Random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1
        console.log(dice)
        // display the dice 
        diceEl.classList.remove("hidden")
        diceEl.src = `dice-${ dice }.png`
        // check for rolled 1; if true
        if (dice !== 1) {
            //Swithc to next  player 
            currentScore += dice
            document.getElementById(`current-${ activeplayer }`).textContent = currentScore
        } else {
            //Add dice to current score 
            switchPlayer()
        }
    }
})
buttonHold.addEventListener("click", function () {
    if (player) {
        scores[activeplayer] += currentScore
        document.getElementById(`score-${ activeplayer }`).textContent
            = scores[activeplayer]
        if (scores[activeplayer] >= 100) {

            player = false;
            diceEl.classList.add("hidden")

            document.querySelector(`.player-${ activeplayer }`)
                .classList.add("player-Winner")

            document.querySelector(`.player-${ activeplayer }`)
                .classList.remove("player-active")

            document.querySelector(`.box-${ activeplayer }`).classList.add('box2')

            document.querySelector(`.img-${ activeplayer }`).classList.add('img')
            document.querySelector(`.WonMessage-${ activeplayer }`).textContent = "WINNER"
        } else {
            switchPlayer()
        }
    }
})
buttonNew.addEventListener("click", function () {

    player = true;
    diceEl.classList.add("hidden")

    document.querySelector(`.player-${ activeplayer }`)
        .classList.remove("player-Winner")

    document.querySelector(`.player-${ activeplayer }`)
        .classList.add("player-active")
    document.querySelector(`.WonMessage-${ activeplayer }`).textContent = " "
    document.querySelector(`.box-${ activeplayer }`).classList.remove('box2')
    document.querySelector(`.img-${ activeplayer }`).classList.remove('img')
    document.getElementById(`current-${ activeplayer }`).textContent = 0
    document.getElementById(`score-${ 1 }`).textContent = 0
    document.getElementById(`score-${ 0 }`).textContent = 0

    document.querySelector(`.player-${ 0 }`)
        .classList.add("player-active")
    document.querySelector(`.player-${ 1 }`)
        .classList.remove("player-active")
    currentScore = 0
    scores = [0, 0]
    activeplayer = 0
})
