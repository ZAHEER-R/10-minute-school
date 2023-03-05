$('.hero-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: true,
    autoplay: false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
})
$('.development-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: true,
    autoplay: false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        992:{
            items:5
        }
    }
})
$('.courses-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: true,
    autoplay: true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        992:{
            items:5
        }
    }
})

// counter js
// jQuery(document).ready(function($) {
//     $('.counter').counterUp({
//         delay: 10,
//         time: 1000
//     });
// });
