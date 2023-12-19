
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}


const btn = document.querySelector(".agradecimientos .btn")
const text = document.querySelector(".agradecimientos .hide")
const wrapped = document.querySelector(".agradecimientos .content")

btn.addEventListener("click", e=> {
    text.classList.toggle("hide_open")
    text.classList.contains("hide_open") ?
    btn.innerHTML = "Leer menos" : btn.innerHTML = "Leer mas";
})


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}