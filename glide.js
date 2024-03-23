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

new Glide('.exclusive-producuts-glide', {
    type: 'carousel',
    perView: 3,
    autoplay: 9000,
    hoverpause: true,
    animationDuration: 2000,
    animationTimingFunc: 'ease-in-out',

    pagination: {
        el: '.hero-section-glide__bullets',
        clickable: true
    },
    breakpoints: {
        768: {
            perView: 2
        },
        576: {
            perView: 2
        }
    }
}).mount();
