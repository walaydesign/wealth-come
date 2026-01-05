AOS.init();

var swiperBannerPic = new Swiper(".banner_pic", {
  slidesPerView: 1,
  allowTouchMove: false,
  effect: "fade",
  speed: 1000,
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
