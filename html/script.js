"use strict";

const slides = document.querySelectorAll('.slide'),
        slider = document.querySelector('.slider'),
        prev = document.querySelector('#prev'),
        next = document.querySelector('#next'),
        slidesWrapper = document.querySelector('.slider__wrapper'),
        slidesField = document.querySelector('.slider__wrapper-inner'),
        width = window.getComputedStyle(slidesWrapper).width;
        
let slideIndex = 1;
let offset = 0;

setStyle();

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function nextSlide() {
    if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
        offset = 0;
    } else { 
        offset += +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }
}

function prevSlide() {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else { 
        offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }
}

function setStyle() {
    slidesField.style.width = 100 * slides.length + '%';

    slides.forEach(slide => {
        slide.style.width = width;
    });
}




// menu 

const menuOpen = document.querySelector('.menu_mobile'),
      menu = document.querySelector('.menu_mb'),
      close = document.querySelector('.close');

menuOpen.addEventListener('click', () => {
    menuOpen.classList.toggle('menu_mobile_change');
    menu.classList.toggle('show');
});

close.addEventListener('click', () => {
    menuOpen.classList.toggle('menu_mobile_change');
    menu.classList.toggle('show');
});


// pop up

const popUp = document.querySelector('.pop_up'),   
      sections = document.querySelectorAll('section'),
      footer = document.querySelector('footer'),
      closePopUp = document.querySelector('.pop_up_close');

function openPopUp() {
    popUp.style.display = "block";

    sections.forEach(section => {
        if(!section.classList.contains('pop_up')) { 
            section.style.filter = "blur(12px)";
        } 
    });

    closePopUp.addEventListener('click', () => {
        footer.style.filter = "none";
        popUp.style.display = "none";

        sections.forEach(section => {
            section.style.filter = "none";
        });
    });
}

setTimeout(openPopUp, 5000);