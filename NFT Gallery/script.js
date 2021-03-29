const hambBt = document.querySelector('#hamb_bt');
const hambBtArrow = document.querySelector('#hamb_bt div')
const hambTab = document.querySelector('#hamb_tab')
let showingHamburguer = false;

function checkHamburguer() {
    if(showingHamburguer == false) {
        showingHamburguer = true;
        hambTab.style.transform = 'translateX(0)';
        hambBtArrow.style.transform = 'rotate(45deg) scale(-1)';
    } else {
        showingHamburguer = false;
        hambTab.style.transform = 'translateX(100%)';
        hambBtArrow.style.transform = 'rotate(45deg) scale(1)';
    }
}


hambBt.addEventListener('click', checkHamburguer);


document.body.onscroll = function() {
    if(showingHamburguer = true) {
        checkHamburguer()
    }
};