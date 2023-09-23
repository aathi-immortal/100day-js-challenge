    let price = document.getElementById("price");
    let tip  = document.getElementById("tip-percentage");
    let total = document.getElementById("total");
    let submitButton = document.getElementById("submit-button");


    submitButton.addEventListener("click",(e)=>
    {
            calculateTotal(e)
    })
    function calculateTotal(e)
    {
        
        total.innerHTML  = Number(price.value) + ((Number(tip.value)/100  )* Number(price.value))
        
        
    }