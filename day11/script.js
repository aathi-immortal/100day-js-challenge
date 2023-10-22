
let state = 0;
let previous = document.getElementById("prev-button");
let next = document.getElementById("next-button");



function previousTriggered()
{
    
    if(state != 0)
    {
        let currentState = document.getElementById("circle-" + state);
        currentState.classList.remove("active");
        state--;
        
        if(state == 1)
        {
            previous.classList.add("disabled");
            
        }
        next.classList.remove("disabled");
        previous.classList.remove("active");
        

    }    // nothing
}
function nextTriggered()
{
    
    if(state < 5)
    {
        state++
        
        if(state == 4)
        {
            next.classList.add("disabled");
            
        }
        previous.classList.remove("disabled");
        let currentState = document.getElementById("circle-" + state);
        currentState.classList.add("active");

    }
    // nothing
}

previous.addEventListener("click",()=>{previousTriggered()});
next.addEventListener("click",()=>{nextTriggered()});