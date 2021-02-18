
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
    }, 300);
    
    document.addEventListener('scroll', hideBts)
        
}

let emailShown = false;
const emailBt = document.querySelector('.email_bt');
const emailWindow = document.querySelector('#e-mail_window');
const closeForm = document.querySelector('#close_form');

function toggleEmail() {
    if(emailShown == false) {
        emailShown = true;
        emailWindow.style.transform = "translateY(0)";
    } else {
        emailShown = false;
        emailWindow.style.transform = "translateY(100%)";
    }
}

emailBt.addEventListener('click', toggleEmail);
closeForm.addEventListener('click', toggleEmail);

document.body.addEventListener('keyup', function(e) {
    if(e.key === "Escape") {
        emailShown = true;
        toggleEmail()
    }
});

const eyes = document.querySelector('#eyes')


setInterval(() => {
    eyes.innerHTML = ';'
    setTimeout(() => {
        eyes.innerHTML = ':'
    }, Math.random() * 5000);
}, Math.random() * 5000);



const mouth = document.querySelector('#mouth')


setInterval(() => {
    mouth.innerHTML = ')'
    setTimeout(() => {
        mouth.innerHTML = 'P'
        setTimeout(() => {
            mouth.innerHTML = 'D'
        }, Math.random() * 5000);
    }, Math.random() * 5000);
}, Math.random() * 5000);



















// ScrollReveal

ScrollReveal().reveal('.post_content', {
    distance: '30px',
    duration: 1400,
    reset: true,
    easing: 'ease',
    viewOffset: {
        bottom: window.innerHeight/3,
        top: window.innerHeight/6,
    },
})

ScrollReveal().reveal('.post_line', {
    distance: window.innerWidth/2 + 'px',
    duration: 1200,
    reset: true,
    easing: 'ease',
    origin: 'left',
    viewOffset: {
        bottom: 0,
    },
})

ScrollReveal().reveal('.post a', {
    distance: window.innerWidth * 0.03 + 'px',
    duration: 2000,
    reset: true,
    easing: 'ease',
    origin: 'bottom',
    viewOffset: {
        bottom: window.innerHeight/15,
        top: window.innerHeight/3,
    },
})

ScrollReveal().reveal('.left_img', {
    duration: 2000,
    reset: true,
    easing: 'ease',
    origin: 'top',
    viewOffset: {
        top: window.innerHeight/2,
        bottom: window.innerHeight/1.8,
    },
})

























// E-MAIL FORM AJAX

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
        form.reset();
        button.style = "display: none ";
        if(document.documentElement.lang == "en") {
            status.innerHTML = "E-mail sent. Thanks!";
        } else {
            status.innerHTML = "E-mail enviado. Obrigado!";
        }
        closeForm.style.animation = 'email_sent 0.8s ease 3';
    }

    function error() {
        
        if(document.documentElement.lang == "en") {
            status.innerHTML = "Oops! There was a problem.";
        } else {
            status.innerHTML = "Opa! Houve um problema.";
        }
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
    } else {
        error(xhr.status, xhr.response, xhr.responseType);
    }
    };
    xhr.send(data);
}