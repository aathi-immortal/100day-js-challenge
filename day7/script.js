let pounds = document.getElementById("pounds");
let result = document.getElementById("result-value");
let warning = document.getElementById("warning");
let poundValue;
function convertToKg()
{
    if(isNumber())
    {
        // console.log(pounds);
        // console.log(poundValue);
        var kilograms = poundValue / 2.20462;
        
        result.innerHTML = ` ${kilograms}`
        
    }
    

    
}
pounds.addEventListener("input",()=>
{
    poundValue = pounds.value;
    convertToKg();
})
function isNumber()
{
    // console.log(poundValue);
    // console.log(isNaN(poundValue));
    // if(typeof poundValue == 'number' )
    // {
    //     warning.innerHTML ="";    
    //     return true;
    // }
    
    // return false;
    var numericRegex = /^[0-9]+(\.[0-9]+)?$/;

  
  if (numericRegex.test(poundValue) || poundValue=="") {
    warning.innerHTML ="";
    return true;
  } else {
    showWarning();
    return false;
  }
}
function showWarning()
{
    
    warning.innerHTML ="please enter the valid number!";
    
}