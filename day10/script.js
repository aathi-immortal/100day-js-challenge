let nav = document.getElementById("nav-bar");
// let nav_items =  document.getElementById("navbarSupportedContent");

function scrolled()
{
    let yaxis= window.scrollY;
    console.log(yaxis);
    if(yaxis > 10)
    {
        nav.classList.remove("navbar-light");
        nav.classList.remove("bg-light");
        nav.classList.add("scroll-active");
        nav.classList.add("navbar-dark");
        
    }
    else
    {
        nav.classList.remove("scroll-active");
        nav.classList.remove("navbar-dark");
        nav.classList.add("bg-light");
        nav.classList.add("navbar-light");
    }
}
document.addEventListener("scroll",()=>
{   
    scrolled();
})  