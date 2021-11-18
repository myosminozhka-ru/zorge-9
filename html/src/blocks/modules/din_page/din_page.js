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
})