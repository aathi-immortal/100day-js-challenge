// let will not in the global scope
let x = 1;
// var variable in the global scope
var y = 31;
a();
b();
console.log(x);
function a()
{
    let x = 21;
     y = 34;
    console.log(x);
}
console.log(y);
function b()
{
    let x = 31;
    console.log(x);
}
