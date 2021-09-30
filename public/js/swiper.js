const swiper = new Swiper('.swiper', {
    loop: true,
    autoPlay: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 4000,
      },  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    })