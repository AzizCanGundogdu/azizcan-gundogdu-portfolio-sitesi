
/*Hamburger button start*/
const hamburgerButtonEl = document.querySelector('.hamburger-btn');
const navigationEl = document.querySelector('.navigation');

hamburgerButtonEl.addEventListener('click', (e)=>{
    hamburgerButtonEl.classList.toggle('active-button')
    navigationEl.classList.toggle('active')
})
/*Hamburger button finish*/
//slider text

let typed = new Typed("#slider-text", {
    strings:["HTML", "CSS", "Javascript", "React"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})


/*Hamburger menu start*/


/*Hamburger menu finish*/