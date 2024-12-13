
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    grid: {     
    rows: 2,
    },
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView: 3,
        },
        520:{
            slidesPerView: 4,
        },
        950:{
            slidesPerView: 5,
        },
    },
});

//Extra
var swiper = new Swiper(".extraSwipper", {
    slidesPerView: 5,
    
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView: 2,
        },
        520:{
            slidesPerView: 3,
        },
        950:{
            slidesPerView: 5,
        },
    },
});
