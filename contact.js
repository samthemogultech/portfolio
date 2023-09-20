// Scroll Effect

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});


ScrollReveal().reveal('.contact-head', { delay: 300, origin: 'left' });
ScrollReveal().reveal('.contact-p', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.contact-section', { delay: 300, origin: 'bottom' });


 //SideBAr
hamburger = document.querySelector('.hamburger');
mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
})

//Contact Form

window.alert = (message, timeout=null) => {
    const alert = document.createElement('div');
    alert.classList.add('message-sent');
    const button = document.createElement('button');
    button.classList.add('close-msg-status');
    button.innerText = "Close"
    alert.innerHTML = `<i class="fa-regular fa-circle-check"></i>
    <p>${message}</p>`;
    alert.appendChild(button)
    button.addEventListener('click', () => {
        alert.remove();
    })
    document.body.appendChild(alert)
}

function sendEmail(){
    senderName = document.getElementById('name').value;
    senderEmail = document.getElementById('email_id').value;
    messageBody = document.getElementById('message').value;

    var params = {
        from_name : senderName,
        email_id : senderEmail,
        message : messageBody
    }

    emailjs.send("service_h1h73za", "template_bbiiz6p", params).then((res) => {
            alert(`Thanks ${senderName} for reaching out. I'll get back to you.`);
    })
}
