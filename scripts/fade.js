document.documentElement.className = "js";
$(function(){

		$('.jq-heading').hover(
			function(){$(this).find('div.jq:hidden').fadeIn(500);},
			function(){$(this).find('div.jq:visible').fadeOut(500);}
		);
});

