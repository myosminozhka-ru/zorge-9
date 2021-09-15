import $ from "jquery";
$(function() {
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
		.parents('div.section').find('div.box').hide().eq($(this).index()).animate({height: 'auto', width: 'auto', opacity: 'show'}, 'slow');
	})
	Array.max = function(array) {
        return Math.max.apply(Math,array);
    };
	var heights = $('.box-wrap div.box').map(function() {
        return $(this).innerHeight();
    }).get();
	$(".box-wrap").height(Array.max(heights));

})