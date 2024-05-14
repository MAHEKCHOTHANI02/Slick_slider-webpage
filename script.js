$(document).ready(function(){
    $('.slider').slick({
        autoplay: false,
        slidesToShow: 4,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        dots: true, 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 2 
                }
            }
        ]
    });
});
