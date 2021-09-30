const hamburgerb = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByClassName('navbar-links')[0];
const image=document.querySelector(".hamburger-img")

hamburgerb.addEventListener('click', () => {
    nav.classList.toggle('active')
    console.log(nav.classList.toggle('active'));
    if(nav.classList.toggle('active')){
    image.src="./images/icon-close.svg";
       }
    else{
    image.src="./images/icon-hamburger.svg";

    }
})