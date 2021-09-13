import $ from "jquery";
import 'slick-carousel';
$(function() {
    $('.kladovie_sl-js').slick({
        dots: true,
        arrows: true,
        infinite: true,
        fade: true,
        slidesToShow: 1
    });
})