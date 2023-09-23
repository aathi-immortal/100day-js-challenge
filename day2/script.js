let date = document.getElementById("date-input");
let buttonSubmit = document.getElementById("submit");
let result = document.getElementById("result");



function validInput()
{
    if(date.value.length == 0)
    {
        return false;
    }
    return true;
}
function calculeAge(e) 
{
    
    if(!validInput())
    {   
        result.innerHTML = "enter the valid data of birth";
        result.style.color = 'red'
        return null;
    }
    let newDate = new Date(date.value)
    console.log(newDate);
    let currentDate = new Date();
    console.log(currentDate.getFullYear());
    console.log(newDate.getFullYear());
    
    let age = new Date(currentDate.getTime() - newDate.getTime());
    age= age.getUTCFullYear() - 1970;
    

    result.innerHTML = "your age is " + age + "  year old";
    result.style.color = 'green'

}
buttonSubmit.addEventListener("click",(e)=>
{   
    calculeAge(e);
}) ;