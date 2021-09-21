$(document).ready(function(){
// $('.screenshots-carousel').owlCarousel({
//     loop:true,
//     margin:0,
//     nav:true,
//     responsive:{
//         0:{
//             item:0
//         },
//         600:{
//             item:2
//         },
//         1000:{
//             item:3
//         }
//     }
// });

$(window).on("scroll",function(){
if ($(this).scrollTop() > 90) {
$(".navbar").AddClass("navbar-shrink");

}
else{
    $(".navbar").removeClass("navbar-shrink");
}

});



$('.features-carousel').owlCarousel({
    loop:true,
    margin:4,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
            
        }
    }
});


$('.screenshots-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            item:1,
            
        },
        600:{
            item:2,
            
        },
        1000:{
            item:4,
            
            
        }
    }
});

$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            item:1,
            
        },
        600:{
            item:2,
            
        },
        1000:{
            item:3,
            
            
        }
    }
});

$('.team-carousel').owlCarousel({
    loop:true,
    margin:0,
   // autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            item:1,
            
        },
        600:{
            item:2,
            
        },
        1000:{
            item:3,
            
            
        }
    }
});

$.scrollIt({
    topOffset: -50   
});

$(".nav-link").on("click",function(){
    $(".nav-collapse").collapse("hide");

});


});
