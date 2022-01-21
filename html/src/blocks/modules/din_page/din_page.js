import $ from "jquery";
import 'slick-carousel';
$(function() {
    $('.sls23').slick({
        dots: false,
        arrows: true,
        infinite: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 640,
            settings: {
                variableWidth: false,
                arrows: false,
                dots: true
            }
          }
        ]
    });
    if(document.querySelector('.din_page')) {
        $('.din_tabs ul.tabs').delegate('li:not(.current)', 'click', function() {
            $(this).addClass('current').siblings().removeClass('current')
            .parents('div.din_tabs').find('div.box').hide().eq($(this).index()).animate({height: 'auto', width: 'auto', opacity: 'show'}, 'slow');
        })
    }
})