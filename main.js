
let showingButtons = true;

const hamburguer = document.querySelector('#hamburger');
const hamburguerDots = document.querySelectorAll('#hamburger > div > div > div');
const bts = document.querySelectorAll('.menu_bts')

function hideBts() {

    for(i=0;i<hamburguerDots.length;i++) {
        hamburguerDots[i].style.backgroundColor = '#f8f8ff';
    }
    
    for(i=0;i<bts.length;i++) {
        bts[i].classList.add('showing_bts')
    }

    showingButtons = false;
}

function checkBts() {
    if(showingButtons == true) {

        hideBts()
        
    } else {

        for(i=0;i<hamburguerDots.length;i++) {
            hamburguerDots[i].style.backgroundColor = 'var(--color-5)';
        }
        
        for(i=0;i<bts.length;i++) {
            bts[i].classList.remove('showing_bts')
        }

        showingButtons = true;
    }
}

hamburguer.addEventListener('click', checkBts)


setTimeout(() => {
    hideBts()
}, 400);


document.addEventListener('scroll', hideBts)









ScrollReveal().reveal('.post', {
    distance: '30px',
    duration: 1400,
    // reset: true,
    easing: 'ease',
    viewOffset: {
        bottom: window.innerHeight/1.8,
        top: window.innerHeight/4,
    },
})

ScrollReveal().reveal('.post_line', {
    distance: window.innerWidth/5 + 'px',
    duration: 1000,
    reset: true,
    easing: 'ease',
    origin: 'left',
    viewOffset: {
        bottom: window.innerHeight/7,
    },
})

ScrollReveal().reveal('.post a', {
    distance: window.innerWidth * 0.05 + 'px',
    duration: 1000,
    // reset: true,
    easing: 'ease',
    origin: 'bottom',
    viewOffset: {
        bottom: window.innerHeight/8,
    },
})