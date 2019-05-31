var openMenu =  document.querySelector('.content');
var menuOp =  document.querySelector('.menu');
var closeMenu =  document.querySelector('.close');
var oneLi  =  document.querySelector('.one');
var twoLi  =  document.querySelector('.two');
var threLi  =  document.querySelector('.thre');

var showAnim = document.querySelector('.menu');


openMenu.addEventListener('click', function(evt){
   evt.preventDefault();
   menuOp.classList.add('showAnim');
   showAnim.style.cssText = 'animation: showAnim forwards 1s;';
   closeMenu.classList.add('showAnimClose');
  
  oneLi.classList.add('animShowLi1');
  twoLi.classList.add('animShowLi2');
  threLi.classList.add('animShowLi3');
 });


closeMenu.addEventListener('click', function(evt){
   evt.preventDefault();
  closeMenu.classList.remove('showAnimClose');
  showAnim.style.cssText = 'animation: menuCloseAnim forwards 1s;';
  
  oneLi.classList.remove('animShowLi1');
  twoLi.classList.remove('animShowLi2');
  threLi.classList.remove('animShowLi3');
 });

