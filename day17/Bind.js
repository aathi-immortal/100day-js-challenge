function talk()
{
    if(this.lanuage == "tamil")
        return "vanakkam " + this.name;
    else if(this.lanuage == "english")
        return "goodMorning friends" + this.name;
    else
        return "sorry not found";

}
person1 = {
    name:"aathi",
    lanuage:"tamil"

}
person2 = {
    name:"siva",
    lanuage:"english"
}
console.log(talk.bind(person1)());
console.log(talk.call(person2));
console.log(talk.apply(person2));
