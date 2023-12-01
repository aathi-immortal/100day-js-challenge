const me = 
{
    value:this,
    talk:function()
    {
        console.log(this);
    },
    arrowTalk: () =>
    {
        console.log(this);
    }
}
console.log(me.value);
me.talk();
me.arrowTalk();