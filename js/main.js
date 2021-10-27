// const toggleButton =document.getElementsByClassName('toggle-button')[0];
// const navMenu = document.getElementsByClassName('primary-menu');
// toggleButton.addEventListener('click', function(){
//    for(var i=0; i<navMenu.length; i++)
//    navMenu[i].classList.toggle('active');
// })

const toggleButton =document.getElementsByClassName('toggle-button')[0];
const navMenu = document.getElementsByClassName('primary-menu')[0];
toggleButton.addEventListener('click', () => {
   navMenu.classList.toggle('active');
})