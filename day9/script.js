let temperature = document.getElementById("temperature");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
function celsiusToAll()
{
    let temperatureValue = Number(temperature.value);
    // °F = °C×(9/5)+32   
    fahrenheit.value = (temperatureValue * (9/5) + 32).toFixed(2);
    // Kelvin = Celsius + 273.15. 
    kelvin.value = (temperatureValue  + 273.15).toFixed(2);
}
function farenheitToAll()
{
    let fahrenheitValue = Number(fahrenheit.value);
    // K = (F − 32) × 5 ⁄ 9 + 273.15
    kelvin.value = ((fahrenheitValue - 32) * 5/9 + 273.15).toFixed(2);
    // °C = (°F - 32) × 5/9
    temperature.value = ((fahrenheitValue - 32) * 5/9).toFixed(2);
}
function kelvinToAll()
{
    let kelvinValue = Number(kelvin.value);
    // C = K - 273.15
    temperature.value = (kelvinValue - 273.15).toFixed(2);
    // °F = (K − 273.15) × 9/5 + 32
    fahrenheit.value = ((kelvinValue - 273.15) * 9/5+ 32).toFixed(2);
}
temperature.addEventListener("input",()=>
{

    celsiusToAll();
});
fahrenheit.addEventListener("input",()=>
{   
    farenheitToAll();
});
kelvin.addEventListener("input",()=>
{
    kelvinToAll();
});