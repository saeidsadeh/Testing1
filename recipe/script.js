$(document).ready(function() {
	$('div ul li').click(function(){
		$(this).append(" ***");

	});
	$('img').click(function(){
		$('img').fadeOut();

	});
	$('div ol li').click(function(){
		$(this).css("background-color","#6699ff");

	});



});

