const hamburguer = document.querySelector('#hamburguer');
const hamburguerDivs = document.querySelectorAll('#hamburguer div div:not(#fixed_dot)');
const nav = document.querySelector('nav');
const navBts = document.querySelectorAll('.contact_bt');
const fixedDot = document.querySelector('#fixed_dot')
const navBtsSVG = document.querySelectorAll('.contact_bt svg');

let showingContacts = false;

hamburguer.addEventListener('click', function() {
    toggleContacts()
})

function toggleContacts() {
    if(showingContacts == false) {
        showingContacts = true;
        nav.classList.toggle('pressed_nav')

        for(i=0; i<navBts.length; i++ ) {
            navBts[i].style.opacity = 1;
            navBts[i].style.transform = 'scale(1)';
        }

        for(i=0; i<hamburguerDivs.length; i++ ) {
            hamburguerDivs[i].style.transform = 'translateX(-4rem) scale(0)';
        }
        setTimeout(() => {
            fixedDot.style.transform = 'scale(2)'
        }, 400);

    } else {
        showingContacts = false;
        nav.classList.toggle('pressed_nav')

        for(i=0; i<navBts.length; i++ ) {
            navBts[i].style.opacity = 0;
            navBts[i].style.transform = 'scale(0.9)';
        }

        fixedDot.style.transform = 'scale(1)'

        for(i=0; i<hamburguerDivs.length; i++ ) {
            hamburguerDivs[i].style.transform = 'translateX(0rem) scale(1)';
        }

    }
}