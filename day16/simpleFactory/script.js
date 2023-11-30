// creating factory method
function createPerson(name)
{
    return {
        talk()
        {
            return `hello frd how are you ${name}`;
        }
    }
}
let man1 = createPerson("aathi");

console.log(man1.talk());