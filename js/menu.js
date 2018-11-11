$(function(){
	var item = $('.menu_item');
	$('.menu_toggle').on('click', function(){
		if($('.menu_main').hasClass('menu_bl')){
			$('.menu_main').animate({
				'opacity' : 0
			}, 100, function(){
				$(this).removeClass('menu_bl').removeAttr('style');
			});
		}else{
			$('.menu_main').css({
				'display' : 'block'
			}).animate({
				'opacity' : 1
			}, 100, function(){
				$(this).addClass('menu_bl');
			});
		}		
	});
	for(var i = 0; i < item.length; i++){
		item.eq(i).on('click', function(){
			if($('.menu_main').hasClass('menu_bl')){
				$('.menu_main').animate({
					'opacity' : 0
				}, 100, function(){
					$(this).removeClass('menu_bl').removeAttr('style');
				});
			}	
		});
	}
});