$(document).ready(function(){

$('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    arrows: false,
    responsive: [
      {
       breakpoint: 480,
       slidesToShow: 1
    },
    {
       breakpoint: 768,
       settings: "unslick"
    }
    ]
  }); 

});