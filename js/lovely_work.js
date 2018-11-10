$(function(){
	var item = $('.work_item');
	for(var i = 0; i < item.length; i++){
		item.eq(i).on('mouseenter', function(){
			$(this).find('.work_item_overlay').stop(true, true);
			$(this).find('.work_item_overlay').css({
				'display' : 'block'
			}).animate({
				'opacity' : 1
			}, 500, function(){
				$(this).addClass('work_item_overlay_active').removeAttr('style');
			});
		}).on('mouseleave', function(){
			$(this).find('.work_item_overlay').stop(true, true);
			$(this).find('.work_item_overlay').animate({
				'opacity' : 0
			}, 500, function(){
				$(this).removeClass('work_item_overlay_active').removeAttr('style');
			});
		});
	}
});