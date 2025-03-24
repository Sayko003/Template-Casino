import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
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
}

export default swiperMain;

