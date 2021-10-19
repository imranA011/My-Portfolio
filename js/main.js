const toggleButton =document.getElementsByClassName('toggle-icon')[0];
const navMenu = document.getElementsByClassName('primary-menu');
toggleButton.addEventListener('click', function(){
   for(var i=0; i<navMenu.length; i++)
   navMenu[i].classList.toggle('active');
})

