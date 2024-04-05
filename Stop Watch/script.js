let secondsEllapsed=0;
let interval=null;
const time=document.getElementById("time")

function padStart(value){
    return String(value).padStart(2,0);
}

function setTime(){
    const minutes=Math.floor(secondsEllapsed/60);
    const seconds=secondsEllapsed%60;
    time.innerHTML=`${padStart(minutes)}:${padStart(seconds)}`;
}

function timer(){
    secondsEllapsed+=1;
    setTime()

}
function StartWatch(){
    if (interval) StopWatch()
    interval=setInterval(timer,1000);
}
function StopWatch(){
    clearInterval(interval)
}
function ResetWatch(){
    StopWatch()
    secondsEllapsed=0;
    setTime()
}