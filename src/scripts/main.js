// if menu button pressed, show right-nav 
const menuButton = document.querySelector('.menu-button');

// const isActive = document.querySelector('.isActive');

const rightNav = document.querySelector('.right-nav');
// const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', () => {
    rightNav.classList.toggle('active');
    menuButton.classList.toggle('isActive');
    // menuButton.style.display = 'none';
    // closeButton.style.display = 'flex';
});


