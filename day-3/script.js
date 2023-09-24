let image = document.getElementById("dice-img");
let roll = document.getElementById("roll");


function rollTheDice()
{
    let randomNumber = (Math.ceil((Math.random() * 10    ) % 6));
    image.src = `img/dice-img/dice-${randomNumber}.png`
}

roll.addEventListener("click",(e)=>{
    rollTheDice();
}
    
    )