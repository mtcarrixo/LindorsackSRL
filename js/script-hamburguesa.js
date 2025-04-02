document.getElementById('menu-toggle').addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector("#back-to-top");

    backToTopButton.addEventListener("click", function (event) {
        event.preventDefault();
        document.documentElement.scrollTop = 0; // Para navegadores modernos
        document.body.scrollTop = 0; // Para navegadores antiguos
    });
});

// Cierra el menú de hamburguesa cuando se hace clic fuera de él
document.addEventListener('click', function(event) {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggle = document.getElementById('menu-toggle');
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Cierra el menú de hamburguesa cuando se arrastra la página
window.addEventListener('scroll', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Cierra el menú de hamburguesa cuando se hace un desplazamiento táctil hacia abajo
window.addEventListener('touchmove', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});