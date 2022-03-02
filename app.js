console.log("js is working")
// this is my sticky nav bar js
const nav = document.querySelector('#nav-bar');
let navTop = nav.offsetTop;
function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');  
  
  }
}
window.addEventListener('scroll', fixedNav);

////////////////////////////////////////////



$("#about-link").click(function() {
     $([document.documentElement, document.body]).animate({
     scrollTop: $("#about-me-bio-div").offset().top
     }, 2000);
});
$("#project-link").click(function() {
    $([document.documentElement, document.body]).animate({
    scrollTop: $("#projects").offset().top
    }, 2000);
});
$("#skills-link").click(function() {
    $([document.documentElement, document.body]).animate({
    scrollTop: $("#skills").offset().top
    }, 2000);
});
$("#resume-link").click(function() {
    $([document.documentElement, document.body]).animate({
    scrollTop: $("#resume").offset().top
    }, 2000);
});

/////////////////////////////////////////

const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');
const openModal = () => {
    $modal.css('display', 'block');
}
const closeModal = () => {
    $modal.css('display', 'none');
    
        $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
        }, 2000);
    
}
$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);


const $openBtn2 = $('#openModal2');
const $modal2 = $('#modal2');
const $closeBtn2 = $('#close2');
const openModal2 = () => {
    $modal2.css('display', 'block');
}
const closeModal2 = () => {
    $modal2.css('display', 'none');
    
        $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
        }, 2000);
    
}
$openBtn2.on('click', openModal2);
$closeBtn2.on('click', closeModal2);


const $openBtn3 = $('#openModal3');
const $modal3 = $('#modal3');
const $closeBtn3 = $('#close3');
const openModal3 = () => {
    $modal3.css('display', 'block');
}
const closeModal3 = () => {
    $modal3.css('display', 'none');
    
        $([document.documentElement, document.body]).animate({
        scrollTop: $("#projects").offset().top
        }, 2000);
    
}
$openBtn3.on('click', openModal3);
$closeBtn3.on('click', closeModal3);







