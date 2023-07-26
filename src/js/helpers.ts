export const fadeOutAnimationKeyframes = [{ opacity: 1 }, { opacity: 0 }];
export const fadeOutAnimationOptions: number | KeyframeAnimationOptions | undefined = {
  duration: 700,
  fill: 'both',
  easing: 'ease-out',
};
export const windowHeight = window.innerHeight;

export const initialScrollInPx = window.scrollY;

export const sharedSwiperOptions = {
  parallax: true,
  loop: true,
  autoplay: { disableOnInteraction: false },
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
