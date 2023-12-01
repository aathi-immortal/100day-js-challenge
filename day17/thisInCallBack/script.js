function Person(name)
{
        this.name = name;
        this.talk = ()=>
        {
            console.log(this);
            return "heloo frd" + this.name;
        }
        setInterval(function ()
            {
                // console.log(this);
            }.bind(this),1000)

}
function callMe()
{
    console.log(this);
}
// let me = new Person("aathi");
// me.talk();
// callMe.bind(me)();
// with arrow function
function PersonNew(name)
{
        this.name = name;
        this.talk = ()=>
        {
            console.log(this);
            return "heloo frd" + this.name;
        }
        setInterval(() =>
            {
                // console.log(this);
            },1000)

}

// let me2 = new PersonNew("aathi");
// me2.talk();
ob = {
    talk:()=>
    {
        return "helo";
    }
}
obNew = Object.create(ob);
console.log(obNew);
let hi = () =>
{
    console.log("ki");
}
hi();












