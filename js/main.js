// Menu bar show/hide logic
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Logic to show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
// Logic to hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// logic to remove menubar when any link is clicked in mobile devices
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // Whenever navLink button is clicked it will remove show-menu class
    // to give more space to other section while using mobile devices
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Logic to handle open or close skills
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');
console.log(skillsContent);
console.log(skillsHeader);
function toggleSkills() {
    let itemClass = this.parentNode.className;
    // close all the skills section first
    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close';
        console.log(skillsContent[i]);
    }
    // Open the one which triggered this function, would
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}
skillsHeader.forEach(el => {
    el.addEventListener('click', toggleSkills);
});
