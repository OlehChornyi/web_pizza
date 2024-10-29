let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart').onclick = () => {
    cart.classList.toggle('active');
    login.classList.remove('active');
};

let login = document.querySelector('.login-form');

document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');
    cart.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});