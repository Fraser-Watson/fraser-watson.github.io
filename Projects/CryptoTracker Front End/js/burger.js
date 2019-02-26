function openBurgerMenu(){
    document.getElementById('burger-menu').style.width="250px";
    document.getElementsByClassName("container-body").style.marginRight = "250px";
}

function closeBurgerMenu(){
    document.getElementById('burger-menu').style.width="0px";
    document.getElementsByClassName("container-body").style.marginRight = "0px";
}