    let goTopBtn = document.querySelector('.back-top__button');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back-top__button-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back-top__button-show');
        }
    }

    function backToTop() {
        $('html').animate({scrollTop: 0}, 500, 'swing')
    }
