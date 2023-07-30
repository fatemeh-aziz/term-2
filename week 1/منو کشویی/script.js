var btn = document.getElementById("btn");
var menu = document.getElementById("menu");
var isMenuOpen = false;
btn.onclick = function () {
    if (!isMenuOpen) {
        console.log('ov');
        menu.classList.add('after_click');
        isMenuOpen = true;
    }
    else {
        menu.style.display = 'none';
        isMenuOpen = false;
    }
};
