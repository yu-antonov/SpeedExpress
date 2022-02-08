document.addEventListener('DOMContentLoaded', function() {
    //Slider for Reviews section
    const swiper = new Swiper('.swiper', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true'
        },
        autoplay: {
            delay: 7000
        }
    });
    // Preloader
    window.onload = function() {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function() {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 2000);
    };
    //Scroll
    document.querySelectorAll('a[href^="#"').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = 0;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({ top: offsetPosition, behavior: 'smooth' })
        })
    });

    //Burger
    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.header__menu').classList.toggle('is-active');
        this.classList.toggle('active');

    });
    //mobile.slider
    const mobileSlider = new Swiper('.mobile-slider', {
        direction: 'horizontal',
        autoplay: {
            delay: 4000
        },
        effect: 'fade',
        loop: true,
        speed: 1000
    });
    //services mobile-slider
    const mediaQuery767 = window.matchMedia('(max-width: 767px)');

    function handleTabletChange767(e) {
        if (e.matches) {
            document.querySelector('.services__list').classList.add('swiper-wrapper');
            document.querySelectorAll('.services__item').forEach(function(allCard) {
                allCard.classList.add('swiper-slide')
            })
        } else {
            document.querySelector('.services__list').classList.remove('swiper-wrapper');
            document.querySelectorAll('.services__item').forEach(function(k) {
                k.classList.remove('swiper-slide')
            })
        }
        const swiperServices = new Swiper('.services__wrapper', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.services__pagination',
                type: 'fraction'
            },
            slidesPerView: 1,
            spaceBetween: 30,


        });
    }
    mediaQuery767.addListener(handleTabletChange767);
    handleTabletChange767(mediaQuery767);
})
