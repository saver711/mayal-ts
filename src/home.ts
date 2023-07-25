import { sharedSwiperOptions } from './helpers';
import Swiper from 'swiper';
import {Navigation, Parallax} from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  // >>> header Swiper init
  new Swiper('#headerSwiper', {
    ...sharedSwiperOptions,
    effect: 'fade',
  });

  Swiper.use([Navigation, Parallax]);
  const servicesSwiper =  new Swiper('#servicesSwiper', {
    ...sharedSwiperOptions,
    observer: true,
    observeParents: true,
    autoplay: false,
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      499: {
        slidesPerView: 2,
      },
      999: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  
});
