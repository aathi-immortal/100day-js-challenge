let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");
let minitueDom = document.getElementById("minitue");
let secondDom = document.getElementById("second");
let colon = document.getElementById("colon-timmer")
let interval = null;
let nearThelimitOn = false;
function onNearLimit()
{
    
    nearThelimitOn = true;
    minitueDom.classList.add("fa-beat","red--text-blink");
    secondDom.classList.add("fa-beat","red--text-blink");
    colon.classList.add("fa-beat","red--text-blink");
    
}
function clearNearLimit()
{
    if(minitueDom.classList.contains("red--text-blink"))
    {
        
        minitueDom.classList.remove("red--text-blink","fa-beat");
        secondDom.classList.remove("red--text-blink","fa-beat");
        colon.classList.remove("fa-beat","red--text-blink");
        nearThelimitOn = false;
        trailZero = "";
    }
    
    
}
function startTheTimer()
{
    let trailZero = "";
        let minitue = Number(minitueDom.innerHTML);
        let second = Number(secondDom.innerHTML);
        console.log(minitue);
        console.log(second);
        
            interval = setInterval(()=>
            {
                if(minitue == 0 && second == 59 && !nearThelimitOn)
                {
                        trailZero = "0";
                        minitueDom.innerHTML += trailZero;
                         onNearLimit();
                }
                if(minitue == 0 && second == 0)
                {
                    console.log("clear");
                    clearInterval(interval);
                }
                else if(second == 0)
                {
                second = 59;

                secondDom.innerHTML = second;
                console.log("trail" + trailZero);
                minitueDom.innerHTML = --minitue
            }
            else
            {
                secondDom.innerHTML = --second;
            }

        },1000);
        
        

}
startButton.addEventListener("click",(e)=>
{
    
//  start the interval
if(interval == null)
    startTheTimer();
});
stopButton.addEventListener("click",()=>{
    // stop the interval
    clearInterval(interval);
    interval = null;
    
})

resetButton.addEventListener("click",()=>
{
    clearInterval(interval);
    interval = null
    minitueDom.innerHTML = 25;
    secondDom.innerHTML = "00";  
    clearNearLimit();
})