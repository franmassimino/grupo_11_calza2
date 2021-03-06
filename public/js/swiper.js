const swiper = new Swiper('.swiper', {
    loop: true,
    autoPlay: true,
    pagination: {
        el: '.swiper-pagination',
    },
    spaceBetween: 10,
    autoplay: {
        delay: 6000,
      },  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    })
