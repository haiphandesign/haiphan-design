function navbarToggle(e) {
    e.classList.add('is-active');
}

function navbarMenuClose(e) {
    document.getElementsByClassName('navbar-toggle')[0].classList.remove('is-active');
}