const navMenu = document.getElementById('nav-menu');
const headerPic = document.getElementById('header-pic');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});