$(function(){
	$ml = $('.menu_link');
	$ml.on('click', function(e){
		e.preventDefault();
		$ml.removeClass('menu_link_active').filter(this).addClass('menu_link_active');
		var selector = $(this).attr('href');
		var h = $(selector); 
		$('html, body').animate({
			scrollTop: h.offset().top - 100
		}, 400);
	});
	function link_active(){
		var top = $(this).scrollTop();
		if(top < 550){
			$ml.removeClass('menu_link_active');
			$ml.eq(0).addClass('menu_link_active'); // home
		}else if(top > 550 && top < 1150){
			$ml.removeClass('menu_link_active');
			$ml.eq(1).addClass('menu_link_active'); // about
		}else if(top > 1150 && top < 1885){
			$ml.removeClass('menu_link_active');
			$ml.eq(2).addClass('menu_link_active'); // team
		}else if(top > 1885 && top < 2840){
			$ml.removeClass('menu_link_active');
			$ml.eq(3).addClass('menu_link_active'); // work
		}else if(top > 2840 && top < 3770){
			$ml.removeClass('menu_link_active');
			$ml.eq(4).addClass('menu_link_active'); // services
		}else if(top > 3770 && top < 4500){
			$ml.removeClass('menu_link_active');
			$ml.eq(5).addClass('menu_link_active'); // features
		}else if(top > 4500){
			$ml.removeClass('menu_link_active');
			$ml.eq(6).addClass('menu_link_active'); // contact
		}
	}
	link_active();
	$(document).on('scroll', link_active); 
});




