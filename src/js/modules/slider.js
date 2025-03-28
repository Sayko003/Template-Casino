import Swiper from 'swiper/bundle';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
// import 'swiper/css/effect-fade'
import 'swiper/css/pagination';

function swiperMain(){
    const swiperMain = new Swiper('.swiper', {
        modules: [Pagination],

        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        allowTouchMove: false,
        autoplay: {
            delay: 7000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    const swiperBest = new Swiper('.best-games--swiper', {
        modules: [Navigation],
        direction: 'horizontal',
        allowTouchMove: true,
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            nextEl: '.best-games--next',
            prevEl: '.best-games--prev',
        },
        breakpoints: {
            320: {
                slidesPerView: `auto`,
                centeredSlides: true,
                spaceBetween: 50,
            },
            600: {
                slidesPerView: `auto`,
                spaceBetween: 25,
            },
            960: {
                slidesPerView: `auto`,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: `auto`,
                spaceBetween: 10,
            },
            1450: {
                slidesPerView: 'auto',
                spaceBetween: 15,
            }
        },


    });
}

export default swiperMain;

