function calculateLength(){
    //Write your code here
    let inputValue = document.getElementById("myLength").value;
    
    let inputLength = inputValue.length;
    let display = document.getElementById("sid");
    display.innerHTML = inputLength;
    
    
}