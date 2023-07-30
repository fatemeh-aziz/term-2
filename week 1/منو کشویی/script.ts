let btn :HTMLElement= document.getElementById("btn");
let menu:HTMLElement = document.getElementById("menu");
let isMenuOpen:Boolean = false;

btn.onclick = () => {
    if (!isMenuOpen){
        console.log('ov')
        menu.classList.add('after_click');
        isMenuOpen=true;
    }
    else {
        menu.style.display = 'none';
        isMenuOpen=false;
    }
}