let buttonArray = document.querySelectorAll("button");
addEventListenerToButton();
function addEventListenerToButton()
{
    
    buttonArray.forEach((value,key)=>
    {
        value.addEventListener("click",function buttonPressed()
        {
            document.body.style.fontSize = this.innerHTML;
        });
    })
}

