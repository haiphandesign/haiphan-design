window.onload = function () {
    // lax
    lax.setup() // init
    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }
    window.requestAnimationFrame(updateLax);
    heroHeight();
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
    console.log(windowInnerHeight);

    // iOS Safari
    $('.hero .hero-left').css('height', windowInnerHeight);
    $('.hero .hero-right').css('height', windowInnerHeight);
    $('.hero .hero-image-stacks').css('height', windowInnerHeight);
    $('.hero .hero-scroll-wrapper').css('height', windowInnerHeight);
}