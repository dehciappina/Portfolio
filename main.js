const hamburguer = document.querySelector('#hamburguer');
const hamburguerDiv1 = document.querySelector('#hamburguer div:first-child');
const hamburguerDiv3 = document.querySelector('#hamburguer div:last-child');
const nav = document.querySelector('nav');
const navBts = document.querySelectorAll('.contact_bt');
const navBtsSVG = document.querySelectorAll('.contact_bt svg');

let showingContacts = false;

hamburguer.addEventListener('click', function() {
    toggleContacts()
})

function toggleContacts() {
    if(showingContacts == false) {
        showingContacts = true;
        nav.classList.toggle('pressed_nav')
        hamburguerDiv1.classList.toggle('hamburguer_top_arrow')
        hamburguerDiv3.classList.toggle('hamburguer_bottom_arrow')

        for(i=0; i<navBts.length; i++ ) {
                    navBts[i].style.opacity = 1;
                    navBts[i].style.transform = 'scale(1)';
        }

    } else {
        showingContacts = false;
        nav.classList.toggle('pressed_nav')
        hamburguerDiv1.classList.toggle('hamburguer_top_arrow')
        hamburguerDiv3.classList.toggle('hamburguer_bottom_arrow')

        for(i=0; i<navBts.length; i++ ) {
                    navBts[i].style.opacity = 0;
                    navBts[i].style.transform = 'scale(0.9)';
        }
    }
}