$(function () {
    $('.wrp').parent('.container').css({'max-width':'100%', 'padding':'0'});

    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top-130;

        $('html, body').animate({scrollTop: dn}, 1000);
    });
})

const swiperMenu = new Swiper('.swiper-container-menu', {
    slidesPerView: 'auto',
    spaceBetween:0,
    loop:false,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    freeMode: true,
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2,
        }
    }


});

const swiperPopulary = new Swiper('.swiper-populary', {
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 5,
        }
    }
});


