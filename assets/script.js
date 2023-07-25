const body = document.querySelector("body");
const ul = document.querySelector("header ul");
const menuClose = document.getElementsByClassName("menuClose")[0];
const menuHamburguer = document.getElementsByClassName("menuHamburguer")[0];
const divLayerBlackHeader = document.getElementsByClassName("divLayerBlackHeader")[0];
let OC = false;

let Display = (val1, val2) => val1.style.display = val2;

menuHamburguer.addEventListener("click", () => {
    Display(menuClose, "block");
    Display(menuHamburguer, "none");
    Display(divLayerBlackHeader, "block");
    Display(ul, "block");
    body.style.overflowY = "hidden";
    OC = true;
});
menuClose.addEventListener("click", () => {
    Display(menuHamburguer, "block");
    Display(menuClose, "none");
    Display(divLayerBlackHeader, "none");
    Display(ul, "none");
    body.style.overflowY = "visible";
    OC = false;
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 850) {
        Display(menuHamburguer, "none");
        Display(ul, "flex");
        Display(menuClose, "none");
    }else{
        if (OC) {
            Display(menuClose, "block");
            Display(menuHamburguer, "none");
            Display(ul, "flex");
        }else{
            Display(menuHamburguer, "block");
            Display(menuClose, "none");
            Display(ul, "none");
        }
    }
})