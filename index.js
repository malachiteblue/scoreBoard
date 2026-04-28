let homeScore = 0
let guestScore = 0
let homeScoreDisplay = document.getElementById("homeScore")
let guestScoreDisplay = document.getElementById("guestScore")

function homeAdd1(){
    homeScore += 1
    homeScoreDisplay.textContent = homeScore
}

function homeAdd2(){
    homeScore += 2
    homeScoreDisplay.textContent = homeScore
}

function homeAdd3(){
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
}


function guestAdd1(){
    guestScore += 1
    guestScoreDisplay.textContent = guestScore
}

function guestAdd2(){
    guestScore += 2
    guestScoreDisplay.textContent = guestScore
}

function guestAdd3(){
    guestScore += 3
    guestScoreDisplay.textContent = guestScore
}

function newGame(){
    guestScore = 0
    homeScore = 0
    guestScoreDisplay.textContent = guestScore
    homeScoreDisplay.textContent = homeScore
}