const navMenu = document.getElementById('nav-menu');
const headerPic = document.getElementById('header-pic');
const menuHeight = document.getElementById('menu-height');

hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
/*const headerHeight = (headerPic.clientHeight - 120);
console.log(headerHeight);

menuHeight.style.paddingTop = headerHeight+'px';*/
