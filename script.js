let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
menu.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
//Typing test Code
const typed = new Typed('.multiple-text', {
    strings: ['FrontEnd Develpor', 'BackEnd Develpor','BlockChain Develpor','Java Develpor','Web-Designer'],
    typeSpeed: 80,
    backspeed:80,
    backDelay:1200,
    loop:true,
  });
