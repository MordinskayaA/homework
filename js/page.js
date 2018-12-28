
function createSlick(){  

	$(".portfolio__slider").not('.slick-initialized').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
    responsive: [{ 
        breakpoint: 1270,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            dotsClass: "slick__dots"
        	} 
    	},
    	{
    		breakpoint:800,
    		settings:{
    			slidesToShow:1,
                slidesToScroll: 1,
    			arrows: false,
            	dots:true,
            	dotsClass: "slick__dots"
    		}
    	}]
	});	

}

createSlick();

$(document).ready(createSlick);
$(window).on( 'resize', createSlick );


$(window).on('resize', function(event) {
    
        if($(window).width() > 1026) {
            $('.toggle-menu').css('display', 'none');
            $('.nav__menu-button').removeClass('active');   
    }

});



$(document).on('click','.nav__menu-button', function(){

   $('.nav__menu-button').toggleClass('active');
   $('.toggle-menu').toggle();

});

$(document).ready(function () {
    $('.phone').usPhoneFormat({
        format: '(xxx) xxx-xxxx',
    });   
});