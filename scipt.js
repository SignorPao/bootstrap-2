"use strict";

// scrolled nav
var nav = document.querySelector('nav');
var logo = document.getElementById('logo');
var burger = document.getElementById('burger');
var cart = document.getElementById('cart');
var links = document.querySelectorAll(".nav-link");

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 0.1){
    nav.classList.add('bg-white');
    nav.classList.add('nav-shadow');
    logo.classList.add('text-black');
    burger.classList.add('text-black');
    cart.classList.add('text-black');
    for(let i = 0; i < links.length; i++) {
      links[i].classList.add('text-black');
    }
  }else{
    nav.classList.remove('bg-white');
    nav.classList.remove('nav-shadow');
    logo.classList.remove('text-black');
    burger.classList.remove('text-black');
    cart.classList.remove('text-black');
    for(let i = 0; i < links.length; i++) {
      links[i].classList.remove('text-black');
    }
  }
});

// reviews block
document.querySelector(".esquire").addEventListener("mouseenter", () => {
  document.querySelector("#review").innerHTML = '"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nisl ipsum, tristique ac accumsan et, dapibus vel nisi. Donec luctus nunc vel pretium interdum."';
});

document.querySelector(".insider").addEventListener("mouseenter", () => {
  document.querySelector("#review").innerHTML = '"Duis mattis tortor ipsum, non tincidunt sapien hendrerit sed. Nulla ut nisl eget nisl consequat laoreet vel ut nunc. Integer scelerisque sem sit amet facilisis pellentesque."';
});

document.querySelector(".bloomberg").addEventListener("mouseenter", () => {
  document.querySelector("#review").innerHTML = '"Vivamus molestie imperdiet blandit. Aliquam tempus sapien non urna vestibulum, eu gravida est sagittis."';
});

document.querySelector(".rating").addEventListener("mouseenter", () => {
  document.querySelector("#review").innerHTML = '"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce consectetur ultricies orci, porta fermentum massa laoreet nec. Nulla hendrerit rutrum lacus, in eleifend ipsum venenatis ac."';
});
