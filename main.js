
// Contact Buttons

let showingButtons = false;

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

if(!window.matchMedia('(min-width:100vh)').matches) {

    setTimeout(() => {
        checkBts()
    }, 600);
    
    document.addEventListener('scroll', hideBts)
        
}











// ScrollReveal

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
    distance: window.innerWidth/2 + 'px',
    duration: 1200,
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

















// AJAX

const AboutMeBt = document.querySelector('#about_me');
const locationBt = document.querySelector('#my_location');
const aboutWindow = document.querySelector('#about_window');

let showingLocation = false;
let showingAboutMe = false;

function loadLocationWindow() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        aboutWindow.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "location.html", true);
    xhttp.send();
}

locationBt.addEventListener('click', function() {

    if(showingLocation == false) {

        locationBt.innerHTML = 'CLOSE'

        aboutWindow.style.opacity = 1;
        aboutWindow.style.visibility = 'visible';
        loadLocationWindow()

        showingLocation = true;
        showingAboutMe = false;
    } else {

        locationBt.innerHTML = 'MY LOCATION'

        aboutWindow.style.opacity = 0;
        aboutWindow.style.visibility = 'hidden';

        setTimeout(() => {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                aboutWindow.innerHTML = this.responseText;
              }
            };
            xhttp.open("GET", "dismiss.html", true);
            xhttp.send();
    
            showingLocation = false;
    
        }, 1000);
    }
})



function loadAboutMeWindow() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        aboutWindow.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "about-me.html", true);
    xhttp.send();
}

AboutMeBt.addEventListener('click', function() {

    if(showingLocation == false) {

        locationBt.innerHTML = 'CLOSE'

        aboutWindow.style.opacity = 1;
        aboutWindow.style.visibility = 'visible';
        loadAboutMeWindow()

        showingAboutMe = true;
        showingLocation = false;
    } else {

        locationBt.innerHTML = 'MY LOCATION'

        aboutWindow.style.opacity = 0;
        aboutWindow.style.visibility = 'hidden';

        setTimeout(() => {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                aboutWindow.innerHTML = this.responseText;
              }
            };
            xhttp.open("GET", "dismiss.html", true);
            xhttp.send();
    
            showingAboutMe = false;
    
        }, 1000);
    }
})