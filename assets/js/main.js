
const menuList = document.getElementsByClassName("navbar")[0];

function toggleMenu () {
  
  if(menuList.classList.contains('show'))
  {
    menuList.classList.remove('show')
  }
  else 
  {
    menuList.classList.add('show') 
  }
 
}
