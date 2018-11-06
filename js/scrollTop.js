$(function(){
	var $btn = $('.scroll_to_top');
	var move = false;
	function scollBtn(){
		var top = $(this).scrollTop();
		if(top > 150){
			$btn.addClass('vis');
		}else{
			$btn.removeClass('vis');
		}
	}
	scollBtn();
	$(document).on('scroll', scollBtn);
	$btn.on('click', function(){
		if(move){
			return;
		}
		move = true;
		$('body, html').animate({
			scrollTop : 0
		}, 700, function(){
			move = false;
		});
	});
});