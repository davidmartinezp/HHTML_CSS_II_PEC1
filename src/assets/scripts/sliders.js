
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 1,
    watchSlidesProgress: true,
      grabCursor: true,
      observer: true,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
  

    // navigation: {
    //     nextEl: true,
    //     prevEl: true,
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

    });