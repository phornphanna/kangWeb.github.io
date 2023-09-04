let menuIcon =document.querySelector('#menu-icon');
let navber =document.querySelector('.navber');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bxs-x-circle');
    navber.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    

    menuIcon.classList.remove('bxs-x-circle');
    navber.classList.remove('active');
};


/*Scroll reveal */

ScrollReveal({ 
     reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
 });

 ScrollReveal().reveal('.home-comtent, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box , .contact form', { origin: 'bottom' });
 ScrollReveal().reveal(' .home-comten h1, .about-img', { origin: 'left' });

 ScrollReveal().reveal(' .home-comten p, .about-content', { origin: 'right' });
/* typed js */
const typed =new Typed('.multilpe-text',{
    strings: ['Frontend Developer','Programming','Software Development' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
