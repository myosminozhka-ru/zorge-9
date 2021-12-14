import $ from "jquery";
import 'slick-carousel';
import ionRangeSlider from 'ion-rangeslider';
$(function() {
    $('.slrs25').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 2500,
        fade: true
    });
    if($('.rg1').length && ionopt) {
        $('.rg1').ionRangeSlider({
            ...ionopt,
            onStart: function(data) {
                $(".nb1").html(data.from.toLocaleString());
            },
            onChange: function(data) {
                $(".nb1").html(data.from.toLocaleString());
            }
        });
    }
    if($('.rg2').length && ionopt2) {
        $('.rg2').ionRangeSlider({
            ...ionopt2,
            onStart: function(data) {
                $(".nb2").html(data.from);
            },
            onChange: function(data) {
                $(".nb2").html(data.from);
            }
        });
    }
    if($('.rg3').length && ionopt3) {
        $('.rg3').ionRangeSlider({
            ...ionopt3,
            onStart: function(data) {
                $(".nb3").html(data.from);
            },
            onChange: function(data) {
                $(".nb3").html(data.from);
            }
        });
    }
})