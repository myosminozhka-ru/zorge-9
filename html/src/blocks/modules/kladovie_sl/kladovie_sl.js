import $ from "jquery";
import 'slick-carousel';
$(function() {
    $('.kladovie_sl-js').slick({
        dots: true,
        arrows: true,
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1
    });
})