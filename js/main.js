const toggleButton =document.getElementsByClassName('mobile-menu')[0];
const navMenu = document.getElementsByClassName('primary-nav');
toggleButton.addEventListener('click', function(){
   for(var i=0; i<navMenu.length; i++)
   navMenu[i].classList.toggle('active');
})

