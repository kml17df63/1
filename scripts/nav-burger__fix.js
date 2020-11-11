document.addEventListener('DOMContentLoaded', () => {

    let nav = document.getElementById("nav-burger");
    let body = document.querySelector("body");

    let sticky = nav.offsetTop;

    window.onscroll = () => {
        if (window.pageYOffset >= sticky) {
            nav.classList.add("sticky-burger");
            // body.style.paddingTop = nav.clientHeight + 'px';
        } else {
            nav.classList.remove("sticky-burger");
            body.style.paddingTop = '0';
        }
    }

});