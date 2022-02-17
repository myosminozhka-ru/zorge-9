import $ from "jquery";
import 'slick-carousel';
$(function() {
    $('.slider_for').slick({
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4500,
        fade: true,
        asNavFor: '.slider_nav'
    });
    $('.slider_nav').slick({
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4500,
        asNavFor: '.slider_for',
        dots: false
    });
})