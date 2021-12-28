const playButton = document.getElementById("play");
const lapButton = document.getElementById("lap");
const resetButton = document.getElementById("reset");
const clearButton = document.getElementById("clear-button");
const msecond = document.getElementById("msec");
const second = document.getElementById("sec");
const minutes = document.getElementById("min");
const lapItem = document.getElementById("laps");

let mSecCounter = 0;
let secondCounter = 0;
let minCounter = 0;
let lapCounter = 0;
let min;
let sec;
let msec;

let isPlay = false;
let isReset = false;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
};

const play = () => {
    if (!isPlay && !isReset) {
        playButton.innerHTML = "Pause";
        min = setInterval(() => {
            if(minCounter === 60){
                minCounter = 0 ;
            }
            minutes.innerText = `${++minCounter} : &nbsp`;
        }, 60000);

        sec = setInterval(() => {
            if (secondCounter === 59) {
                secondCounter = 0;
            }
            second.innerText = `${++secondCounter} :`;
        }, 1000);

        msec = setInterval(() => {
            if (mSecCounter === 100) {
                mSecCounter = 0;
            }
            msecond.innerText = `${++mSecCounter}`;
        }, 10);

        isPlay = true;
        isReset = true;

    }else{
        playButton.innerHTML = "Play";
        clearInterval(min)
        clearInterval(sec);
        clearInterval(msec);
        isPlay = false;
        isReset = false;
    }
    toggleButton();
};

const reset = () => {
    isReset = true;
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    playButton.innerHTML = "play";
    minCounter = 0 ;
    secondCounter = 0;
    mSecCounter = 0;
    minutes.innerText = "0 :";
    second.innerText = "0 :";
    msecond.innerText = " 0";
    lapCounter = 0 ;
};

const lap = () => {
    const li = document.createElement('li');
    const number = document.createElement('span');
    const timeStamp = document.createElement('span');

    li.setAttribute('class', 'lap-li');
    number.setAttribute('class', 'lap-number');
    timeStamp.setAttribute('class', 'time-stamp');

    number.innerHTML = `#${++lapCounter} &nbsp`;
    timeStamp.innerHTML = `${minCounter} : ${secondCounter} : ${mSecCounter}`;
    
    li.append(number, timeStamp);
    lapItem.append(li) ;
};

const clear = () => {
    lapItem.innerHTML = '';
    lapItem.append(clearButton) ;

}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clear);
