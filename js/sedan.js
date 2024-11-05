
      
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 25,
  
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  clickable: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 2,
          spaceBetween: 20,
          slides: 2,
      },
      520: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      920: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
  },
});

