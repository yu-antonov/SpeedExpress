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
            delay: 7000
        },
        effect: 'fade',
        loop: true,
        speed: 1000
    })
})
