document.addEventListener('DOMContentLoaded', () => {


    let nav = document.getElementById("nav-menu");
    let body = document.querySelector("body");
    let sticky = nav.offsetTop;

    window.onscroll = () => {
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky-nav");
            body.style.paddingTop = nav.clientHeight + 'px';
        } else {
            nav.classList.remove("sticky-nav");
            body.style.paddingTop = '0';
        }
    }
});