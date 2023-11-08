const menu = document.querySelector(".menu_bar");
const sideMenu = document.querySelector(".side_menu");
const backDrop = document.querySelector(".bd");
console.log(menu)
console.log(sideMenu)

let isMenuOpen = false;
menu.addEventListener('click',()=>{
    
if(isMenuOpen){

    sideMenu.classList.add("side_menu_disable");
    backDrop.classList.remove("backdropenable");
    isMenuOpen = false;
}
else{
    sideMenu.classList.remove("side_menu_disable");
    backDrop.classList.add("backdropenable");
    isMenuOpen = true;
}

})
backDrop.addEventListener('click',()=>{
    
if(isMenuOpen){

    sideMenu.classList.add("side_menu_disable");
    backDrop.classList.remove("backdropenable");
    isMenuOpen = false;
}
else{
    sideMenu.classList.remove("side_menu_disable");
    backDrop.classList.add("backdropenable");
    isMenuOpen = true;
}

})