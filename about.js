// Scroll Effect

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.about-pic', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.about-head', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.about-p', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.contact-section', { delay: 300, origin: 'bottom' });


 //SideBAr
hamburger = document.querySelector('.hamburger');
mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
})