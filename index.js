
// burger 
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger__icon');
    const burgerMenu = document.querySelector('.burger__menu');

    if (burgerIcon && burgerMenu) {
        burgerIcon.addEventListener('click', () => {
            burgerIcon.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            document.body.style.overflow = burgerMenu.classList.contains('active') ? 'hidden' : '';
        });

        document.addEventListener('click', (event) => {
            if (!burgerMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
                burgerIcon.classList.remove('active');
                burgerMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});

// swiper_gal
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 4,
        autoScroll: {
            speed: 1,
        },
        pagination: false,
        arrows: false,
        breakpoints: {
            1450: {
                perPage: 3,
                autoScroll: {
                    speed: 1,
                },
            },
            950: {
                perPage: 2,
                autoScroll: {
                    speed: 1,
                },
            },
            600: {
                perPage: 1.5,
                autoScroll: {
                    speed: 1,
                },
            },

        },
    }).mount(window.splide.Extensions);
});

// swiper rev 
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide1', {
        type: 'fade',
        rewind: true,
        arrows: false,
        perPage: 1,
        autoScroll: {
            speed: 1,
        },
        breakpoints: {




        },
    }).mount(window.splide.Extensions);
});