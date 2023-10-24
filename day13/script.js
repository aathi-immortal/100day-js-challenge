let nextButton = document.getElementById("next");
addEventListnerOption();
let isSelected = false;
function optionChoosed(option)
{
    // when the option is choosed we need to display the next button 
    nextButton.style.display = "block";
    // removing already choosen one
    removeChoosenOption();
    // making the current choosen option black
    option.classList.add("active");
    
    
        
    // and the option is actived

}

// adding eventListner for all options
function addEventListnerOption()
{
    for(let i = 1;i<=4;i++)
    {
        let option = document.getElementById("op-" + i);
        option.addEventListener("click",()=>
        {
            
            optionChoosed(option);
        })
    }
}

function removeChoosenOption()
{
    for(let i = 1;i<=4;i++)
    {
        let option = document.getElementById("op-" + i);
        option.classList.remove("active");
    }
}