let menu = document.querySelector ('#burguer');
let navbar = document.querySelector ('.header .flex .navbar');

menu.onclick = () => {
    menu.classList.toggle ('fa-times');
    navbar.classList.toggle ('active');
}

window.onscroll = () => {
    menu.classList.remove ('fa-times');
    navbar.classList.remove ('active');
}