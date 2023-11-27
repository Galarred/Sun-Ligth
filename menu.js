window.addEventListener("scroll", function () {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 150)
})

let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', () => {
    boxBuscar.classList.add('ativar');
});

btnFechar.addEventListener('click', (e) => {
    e.preventDefault();
    boxBuscar.classList.remove('ativar');
});

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, 
    slidesPerGroup: 2, 
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next-external',
        prevEl: '.swiper-button-prev-external',
    },
    speed: 2500,
    autoplay: {
        delay: 2500, 
        disableOnInteraction: false, 
    },
});

