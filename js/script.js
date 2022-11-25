var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        680: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
        1180: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        },
        1800: {
            slidesPerView: 8,
        },

    }
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 6,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        440: {
            slidesPerView: 1,
        },
        680: {
            slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
        },
        1180: {
            slidesPerView: 5,
        },
        1400: {
            slidesPerView: 6,
        },
    }
});


