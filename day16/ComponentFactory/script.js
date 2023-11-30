// factory functoin that will create a Requested Components
function CreateCompoents(type,text,color)
{
    let tag = document.createElement(type);
    tag.innerHTML = text;
    tag.style.color = color;
    document.body.appendChild(tag);
    return {
        tag,
        setText(text)
        {
            tag.innerHTML = text;
        },
        setColor(color)
        {
            tag.style.color = color
        }
    }
}
let h1 = CreateCompoents("h1","heloo frds how are you ","red");
console.log(h1);
h1.setColor("yellow");
h1.setText("bye frds")

