const openBtnEl = document.getElementById('open-btn');
const closeBtnEl = document.getElementById('close-btn')
const navLinkEl = document.querySelector(".nav-links")



openBtnEl.addEventListener("click", showMenu);

function showMenu(){
    navLinkEl.style.right = "0";
}

closeBtnEl.addEventListener("click", hideMenu);

function hideMenu(){
    navLinkEl.style.right = "-220px";
}


hideMenu()