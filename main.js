

ScrollReveal().reveal('.post', {
    distance: '30px',
    duration: 1400,
    reset: true,
    easing: 'ease',
    elements: {},
    viewOffset: {
        bottom: window.innerHeight/1.8,
    },
})


ScrollReveal().reveal('.post_line', {
    distance: window.innerWidth * 0.1 + 'px',
    duration: 1000,
    reset: true,
    easing: 'ease',
    elements: {},
    origin: 'left',
    viewOffset: {
        bottom: window.innerHeight/4,
    },
})