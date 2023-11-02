
//responsive menu
$(document).ready(function () {
    $(".humburger i").click(function () {
      $(this).toggleClass("fa-times");
      $(".menu").toggleClass("active");
    });
  });
  
  


//counter js

$(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
})


// review

$('.review_slider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:false,
    autoplay:true,
    autoplaySpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

