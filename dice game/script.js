const totalOne = document.querySelector("#total-0")
const totalTwo = document.querySelector("#total-1")
const currentOne = document.querySelector("#current-0")
const currentTwo = document.querySelector("#current-1")

let currentScore = 0
let activePlayer = 0


// it was step 1!!

let mainElement = document.getElementsByClassName("dice")[0]
document.querySelector(".rolling").addEventListener("click",()=>{

let dice = Math.trunc(Math.random()*6)+1
mainElement.classList.remove("hidden")
mainElement.src = `images/dice-${dice}.png`

//step 2!!!!

if(dice!==1){
    currentScore += dice
    document.querySelector(`#current-${activePlayer}`).textContent = currentScore

}else{
    playerSwitch()

}

})


//step 3

function playerSwitch (){
    currentScore=0
    document.querySelector(`#current-${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0?1 : 0
    document.getElementsByClassName('side-1')[0].classList.toggle("player--active")
    document.getElementsByClassName('side-2')[0].classList.toggle("player--active")


}

//step 4


let score= [0,0]
document.querySelector('.holding').addEventListener("click",()=>{
    score[activePlayer]+=currentScore
    document.getElementById(`total-${activePlayer}`).innerHTML = score[activePlayer]
    playerSwitch()
})

//step 5