let homeValue = 0
let homeScore = document.getElementById("home-score")
let guestValue = 0
let guestScore = document.getElementById("guest-score")

function hAdd1() {
    homeValue++
    homeScore.innerText = homeValue
}

function hAdd2() {
    homeValue += 2
    homeScore.innerText = homeValue
}

function hAdd3() {
    homeValue += 3
    homeScore.innerText = homeValue
}

function gAdd1() {
    guestValue++
    guestScore.innerText = guestValue
}

function gAdd2() {
    guestValue += 2
    guestScore.innerText = guestValue
}

function gAdd3() {
    guestValue += 3
    guestScore.innerText = guestValue
}