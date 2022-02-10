

$(function () {
    //Показать еще
    $('.js-best-gift-more').on('click', function (){
        $(this).addClass('d-none');
        $('.best-gift__body').removeClass('d-none');
    })

    $('.wrp').parent('.container').css({'max-width':'100%', 'padding':'0'});

    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top-130;

        $('html, body').animate({scrollTop: dn}, 1000);
    });
})

const swiperCollection2022 = new Swiper('.swiper-collection-2022', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-collection-button-next',
        prevEl: '.swiper-collection-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        }
    }
});

const swiperAction = new Swiper('.swiper-action', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        }
    }
});

const swiperGarland = new Swiper('.swiper-garland', {
    slidesPerView: 2,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-garland-button-next',
        prevEl: '.swiper-garland-button-prev',
    },
    breakpoints: {
        320:{
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    }
});

const swiperVideo = new Swiper('.swiper-video', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    }
});


