import $ from "jquery";
import 'slick-carousel';
$(function() {
    $('.variable_width').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
    });
})