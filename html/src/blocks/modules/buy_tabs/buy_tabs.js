import $ from "jquery";
$(function() {
	$('ul.tabs').delegate('li:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
		.parents('div.section').find('div.box').hide().eq($(this).index()).animate({height: 'auto', width: 'auto', opacity: 'show'}, 'slow');

        function setEqualHeight(columns) {
            var tallestcolumn = 0;
            columns.each(
            function() {
                let currentHeight = $(this).height();
                if(currentHeight > tallestcolumn) {
                    tallestcolumn = currentHeight;
                }
            }
        );
            columns.height(tallestcolumn);
        }
        $(document).ready(function() {
            setEqualHeight($(".box__block--title"));
        });
	})
	Array.max = function(array) {
        return Math.max.apply(Math,array);
    };
	var heights = $('.box-wrap div.box').map(function() {
        return $(this).innerHeight();
    }).get();
	$(".box-wrap").height(Array.max(heights));
})