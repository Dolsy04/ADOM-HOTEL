//-------Code for toggle menu open and close
function toggleMenuBar(){
    const barsBtns = document.querySelectorAll('.bars')
    barsBtns.forEach(bars =>{
        bars.classList.toggle('active');
        if(bars.classList.contains('active')){
            toggleResponsiveNavbar();
        }else{
            removeToggleResponsiveNavbar();
        }
    });
}
function toggleResponsiveNavbar(){
    const resposiveNav = document.querySelector('nav')
    resposiveNav.classList.add('active');
}
function removeToggleResponsiveNavbar(){
    const resposiveNav = document.querySelector('nav')
    resposiveNav.classList.remove('active');
}
const barBtn = document.querySelector('.bar');
barBtn.addEventListener('click', ()=>{toggleMenuBar()});
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(navLinks => {
    navLinks.addEventListener('click',()=>{
        const barsBtns = document.querySelectorAll('.bars')
        barsBtns.forEach(bars =>{
        bars.classList.toggle('active');
    });
        removeToggleResponsiveNavbar();
    });
});



//----------------------testimonial swiper
const swiper = new Swiper('.testimonial-container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        0:{
            slidesPerview: 1
        },
        620: {
            slidesPerview: 2
        },
        1024: {
            slidesPerview: 3
        },
    }
  });


//-------Code for copyright year
const callDateAPI = new Date();
const getYear = callDateAPI.getFullYear();
document.querySelector('.copyright-year').textContent = getYear;