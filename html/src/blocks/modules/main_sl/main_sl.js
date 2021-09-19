import $ from "jquery";
import 'slick-carousel';
$(function() {
    $('.variable_width').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
    });
})