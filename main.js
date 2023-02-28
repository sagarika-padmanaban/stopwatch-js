let timer = document.getElementById("timer");
let time = "";
let start = document.getElementById("start-btn");
let pause = document.getElementById("pause-btn");
let reset = document.getElementById("reset-btn");
let casting = document.getElementById("casting");
let milliseconds = 0;
let seconds = 0;
let hour = 0;
let min = 0;

let cast = document.getElementById("cast-btn");
const setTimer = () => {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            min++;
            if (min == 60) {
                min = 0;
                hour++;
            }
        }
    }
     let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds
    let h = hour < 10 ? "0" + hour : hour;
    let sec = seconds < 10 ? "0" + seconds : seconds;
    let minu = min < 10 ? "0" + min : min;
    timer.innerHTML = `${h} : ${minu} :${sec} :${ms}`;
}

cast.addEventListener("click", () => {
    clearInterval(time);
    let content = timer.innerText;
    casting.innerText = `Cast : ${content}`
})


start.addEventListener("click",()=> {
    if (time !== null) {
        clearInterval(time);

    }
    time = setInterval(setTimer, 10);
})
pause.addEventListener("click", () => {
    clearInterval(time);
})

reset.addEventListener("click", () => {
    clearInterval(time);
    milliseconds = 0;
    seconds = 0;
    hour = 0;
    min = 0;
    timer.innerHTML = "00 : 00 : 00 : 000"
})




