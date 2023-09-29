let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timmer = document.getElementById("timmer");
let timmerOn = false
let second =0;
let minitue = 0;
let hour = 0;
let millisecond = 0;
let stopWatch = null;
function watchStart()
{
    if(millisecond == 100)
    {
        millisecond = 0;
        second++;
        if(second == 60)
        {
            second = 0;
            minitue++;
            if(minitue == 60)
            {
                minitue = 0
                hour++;
            }
        }
    }
    millisecond++;
    updateTime();
    
}
function updateTime()
{
    let h = (hour < 10)?"0" + hour:hour;
    let m = (minitue < 10)?"0" + minitue:minitue;
    let s = (second < 10)? "0" + second:second;
    let mili = (millisecond < 10) ? "0" + millisecond:millisecond;
    timmer.innerHTML = h + ":" + m + ":" + s + ":" + mili;
}
function watchStop()
{
    if(stopWatch != null)
    {
        clearInterval(stopWatch);
    }
}

function resetOption()
{
    watchStop();
    hour = minitue = second = millisecond = 0;
    updateTime(); 
}
start.addEventListener("click",()=>
{
   if(!timmerOn) 
   {
        stopWatch = setInterval(watchStart,10);
        timmerOn = true;
   }
});

stop.addEventListener("click",()=>
{
    if(timmerOn)
    {
        watchStop();
        timmerOn = false;
    }   
        
});

reset.addEventListener("click",()=>
{
    resetOption();
});