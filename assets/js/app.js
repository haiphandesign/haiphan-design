// ONLOAD
window.onload = function () {
    // LAX.JS
    lax.setup({
        breakpoints: {
            xs: 0,
            s: 769,
            md: 1024,
            lg: 1216,
            xl: 1408
        }
    }) // init
    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }
    window.requestAnimationFrame(updateLax);

    // ONLOAD
    heroHeight();
    mainMinheight();

    setTimeout(function () {
        $('body').css('opacity', '1');
    }, 250)
}

// ONRESIZE
window.onresize = function () {
    // LAX.JS
    lax.updateElements();

    // ONRESIZE
    mainMinheight();
}

// ONSCROLL
window.onscroll = function () {
    // ONSCROLL
    navbarScroll()
}

// NAVBAR SCROLL
function navbarScroll() {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").classList.add('is-scroll');
    } else {
        document.getElementById("navbar").classList.remove('is-scroll');
    }
}

// HOMEPAGE: HERO HEIGHT
function heroHeight() {
    var windowInnerHeight = window.innerHeight + "px";

    // iOS Safari
    $('.hero .hero-left').css('height', windowInnerHeight);
    $('.hero .hero-right').css('height', windowInnerHeight);
    $('.hero .hero-image-stacks').css('height', windowInnerHeight);
    $('.hero .hero-scroll-wrapper').css('height', windowInnerHeight);
}

// #MAIN HEIGHT
function mainMinheight() {
    var footerHeight = $('section.footer').outerHeight();

    $('#main').css('min-height', `calc(100vh - ${footerHeight}px)`)
}

// NAVBAR
function navbarToggle(e) {
    e.classList.add('is-active');
}

function navbarMenuClose(e) {
    document.getElementsByClassName('navbar-toggle')[0].classList.remove('is-active');
}