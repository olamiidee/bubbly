const navSlide = () => {
    const burger = document.querySelector('.burger');
    const  nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');


        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger Animation
        burger.classList.toggle('toggle');

    });

}

navSlide();


var myIndex = 0;
carousel();
var slides, dots;

function carousel() {
  var i;
   slides = document.getElementsByClassName("mySlides");
   dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none"; 
    }
    myIndex++;
    if (myIndex > slides.length) {myIndex = 1}   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    } 
    slides[myIndex-1].style.display = "block"; 
    dots[myIndex-1].className += " active"; 
    setTimeout(carousel, 4000); // Change image every 5 seconds
}

function plusSlides(position) {
    myIndex +=position;
    if (myIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}