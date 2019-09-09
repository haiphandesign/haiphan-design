window.onload = function () {
    // lax
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

    heroHeight();

    mainMinheight();
}

window.onresize = function () {
    //lax
    lax.updateElements();

    mainMinheight();
}

window.onscroll = function () {
    navbarScroll()
}

function navbarScroll() {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById("navbar").classList.add('is-scroll');
    } else {
        document.getElementById("navbar").classList.remove('is-scroll');
    }
}


function heroHeight() {
    var windowInnerHeight = window.innerHeight + "px";

    // iOS Safari
    $('.hero .hero-left').css('height', windowInnerHeight);
    $('.hero .hero-right').css('height', windowInnerHeight);
    $('.hero .hero-image-stacks').css('height', windowInnerHeight);
    $('.hero .hero-scroll-wrapper').css('height', windowInnerHeight);
}


function mainMinheight() {
    var footerHeight = $('section.footer').outerHeight();

    $('#main').css('min-height', `calc(100vh - ${footerHeight}px)`)
}