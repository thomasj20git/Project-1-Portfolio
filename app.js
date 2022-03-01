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