window.onload = function () {
    // lax
    lax.setup() // init
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