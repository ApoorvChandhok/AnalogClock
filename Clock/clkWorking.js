setInterval(setClock,1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock() {
    const currentDate = new Date() /*Const variable can neither be re updated nor be re declared*/
    const secondsRatio = currentDate.getSeconds() / 60 /*divide by 60 coz total 60 seconds */
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 /*divide by 60 coz total 60 minutes */
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 /*divide by 12 coz total 12 hours */
/*IF WE WON'T ADD MINUTES_RATIO TO HOURS_RATIO THEN THE HOUR HAND WILL JUMP STRAIGHT FROM 1' O CLOCK TO 2' O CLOCK */
    /*NOW TO SET VALUES FOR THE ROATATION WE WILL ADD DATA VALUES TO DIVS OF HR HAND MIN HAND AND SEC HAND IN THE HTML*/
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
} 

setClock()