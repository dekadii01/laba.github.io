const toggle = document.getElementById('toggle-nav');
const navItems = document.getElementById('nav-content');
const body = document.getElementById('bekgron');

toggle.addEventListener('click', function() {
    navItems.classList.toggle('toggle-on');
    navItems.classList.toggle('fade-in');
    body.classList.toggle('background-image');
})