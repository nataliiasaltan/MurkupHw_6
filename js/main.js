
$(document).ready(function(){
   
    $('.slick-slider').slick({
        
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        mobileFirst: true,
        rows: false,
        responsive: [{
            breakpoint: 767,
            settings: "unslick"
        }]

    });

   


});


