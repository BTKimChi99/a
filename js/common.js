$(document).ready(function(){
    $('.phone-show').click(function(){
        $(this).find('.bl-hide').css('display', 'block');
        $(this).find('.bl-show').hide();
    });

    $(".mn-list li a").click(function(){
		var activeTab = $(this).attr("href"); 
		$(".mn-list li a").removeClass("active"); 
		$(this).addClass("active"); 
		$(".tab-detail").hide(); 
		$(activeTab).fadeIn(); 
		return false;
	});
	$('.tm-project-ht .bxslider').bxSlider({
    	mode: 'horizontal',
    	auto: false,
    	pager: false,
    	controls: true
    });
	$('.tm-slider-nw .bxslider').bxSlider({
    	mode: 'horizontal',
    	auto: false,
    	pager: true,
    	controls: false
    });

    var length_ = $('.tm-gallery ul.row li').length;
    $('.tm-gallery .tm-count i').text(length_ - 3);

    $('.tm-gallery li').click(function(){
        $('.block-pop').slideToggle('slow');
        var lf_top = $('.lf-pop').width();
        $('.lf-pop .bx-viewport ul.vw-gallery li').width(lf_top);
    });
    
    $('ul.vw-gallery li .img-pop img').click(function(e){
        e.stopPropagation();
    });

    $('.tm-close').click(function(){
        $('.block-pop').hide();
    });

    $('.lf-pop .vw-gallery').bxSlider({
        pager: false
    });    

	$(function(){
		$( '.tab-href ul li a[href*=#]:not([href=#])' ).click( function()
		{
			if( location.pathname.replace( /^\// , '' ) == this.pathname.replace( /^\// , '' ) && location.hostname == this.hostname )
			{
				var target = $( this.hash );
				target = target.length ? target : $( '[name='+this.hash.slice( 1 )+']' );
				if( target.length )
				{
					$( 'html,body' ).stop().animate({
						scrollTop:target.offset().top - 20
					} , 1000 );
					return false;
				}
			}
		});
	});

	var fix_hg = $('#header').height() + $('.tm-breadcr').height() + $('.tm-info-project').height();
	$(window).scroll(function(){
	  	var sticky = $('.tab-href'),
	      	scroll = $(window).scrollTop();

	  	if (scroll >= fix_hg + 30) sticky.addClass('fixed');
	  	else sticky.removeClass('fixed');
	});

	$('.tab-href ul li a').click(function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');        
        return false;
    });

    $('.rg-nw-dt .lst-slick').slick({
        dots: true,
        infinite: true,
        arrows: false,
        swipe: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.tm-news-td .lst-nw-td').slick({
        dots: false,
        infinite: true,
        arrows: true,
        swipe: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 990,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

