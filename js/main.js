// SHOW/HIDE NAVBAR
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// HIDE NAVBAR WHEN ANY LINK IS CLICKED IN MOBILE DEVICES
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // Whenever navLink button is clicked it will remove show-menu class
    // to give more space to other section while using mobile devices
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// SHOW/HIDE SKILLS
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');
function toggleSkills() {
    let itemClass = this.parentNode.className;
    // close all the skills section first
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
    }
    // Open the one which triggered this function, would
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}
skillsHeader.forEach(el => {
    el.addEventListener('click', toggleSkills);
});

// TOGGLE EDUCATION AND WORK
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
        // add class to the target our tab is pointing to
        target.classList.add('qualification__active');
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});

// show/hide service modal
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClickIndex) {
    modalViews[modalClickIndex].classList.add('active-modal');
};
modalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener('click', () => {
        modal(index);
    });
});
modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach(modalview => {
            modalview.classList.remove('active-modal');
        });
    });
});

// portfolio swiper
let portfolio_swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// testimonial swiper
let testimonialSwiper = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },
});

// scroll sections active links
// This line selects all the section elements on the page that have an id attribute, and stores them in a variable called sections.
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    // vertical scroll position
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        // offsetHeight height given to the current section
        const sectionHeight = current.offsetHeight;
        // offsetTop means sum of height of the sections above this current section
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');
        // These lines check whether the current section is visible on the screen (i.e., whether the user has scrolled past it). If it is visible, it adds the active-link class to the corresponding navigation menu item. If it is not visible, it removes the active-link class.
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.add('active-link');
        } else {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// change background header
function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// show scroll up
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// Dark light theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';
// previously selected topic
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// we obtain the current theme that interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// If dark theme is selected and refreshed still it will show dark theme.
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
    );
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
        iconTheme
    );
}
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
