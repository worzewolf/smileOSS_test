define([
    'jquery',
    'owlCarousel'
], function($) {
    'use strict';
    return function(config, element) {
        $('.module-smile-slider').owlCarousel({
            loop: true,
            margin: 17,
            nav: true,
            dots: false,
            items: 5,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1280: {
                    items: 5
                }
            }
        });
    }
});
