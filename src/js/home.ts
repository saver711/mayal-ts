import { sharedSwiperOptions } from './helpers';
import Swiper from 'swiper';
import { Navigation, Parallax, Autoplay, EffectFade } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  // >>> header Swiper init
  Swiper.use([Navigation, Parallax, Autoplay, EffectFade]);
  new Swiper('#headerSwiper', {
    ...sharedSwiperOptions,
    effect: 'fade',
  });

  new Swiper('#servicesSwiper', {
    ...sharedSwiperOptions,
    observer: true,
    observeParents: true,
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
