const btn = document.getElementById("header__burger");
const menu = document.getElementById("header__nav");
const mein = document.getElementById("main");
const footer = document.getElementById("footer");

btn.addEventListener("click", ()=> {
    
btn.classList.toggle("burger");
menu.classList.toggle("burger");
mein.classList.toggle("active");
footer.classList.toggle("active");

})


