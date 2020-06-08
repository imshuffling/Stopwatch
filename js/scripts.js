let time = 0;
let running = 0;

function start() {
    if (running == 0){
        running = 1;
        increment();
    }
}

function pause() {
    running = 0;
}

function reset() {
    running = 0;
    time = 0;
    document.getElementById('stopwatch').innerText = "00:00:00:00"
}

function lap() {
    let currentValue = document.getElementById('stopwatch').innerHTML;
    currentValue = '<li>' + currentValue + '</li>'
    let lapsContainer = document.getElementById("laps");
    lapsContainer.insertAdjacentHTML('afterbegin', currentValue);
}

function increment() {
    if (running == 1) {
        setTimeout(function(){
            time++;

            let hours = Math.floor(time/10/60/60);
            let mins = Math.floor(time/10/60);
            let secs = Math.floor(time/10 % 60);
            let millisecs = time % 10;

            if (hours < 10) {
                hours = "0" + hours;
            }

            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10){
                secs = "0" + secs;
            }
            document.getElementById("stopwatch").innerHTML = hours + ":" + mins + ":" + secs +  ":" + millisecs + "0";
            increment();

        },100)
    }
}