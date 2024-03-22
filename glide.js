new Glide('.hero-section-glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 2000,
    hoverpause: true,
    animationDuration: 2000,
    animationTimingFunc: 'ease-in-out',

    pagination: {
        el: '.hero-section-glide__bullets',
        clickable: true
    }
}).mount();