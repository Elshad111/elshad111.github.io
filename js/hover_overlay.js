$(function(){
	var item = $('.team_item');
	for(var i = 0; i < item.length; i++){
		item.eq(i).on('mouseenter', function(event){
			$(this).find('.team_item_overlay').stop(true,true);
			$(this).find('.team_item_overlay').css({
				'display' : 'block'
			}).animate({
				'opacity' : 1
			}, 300, function(){
				$(this).addClass('item_overlay_active').removeAttr('style');
			}); 
		}).on('mouseleave', function(event){
			$(this).find('.team_item_overlay').stop(true,true);
			$(this).find('.team_item_overlay').animate({
				'opacity' : 0
			}, 300, function(){
				$(this).removeClass('item_overlay_active').removeAttr('style');
			})
		});
	}
});