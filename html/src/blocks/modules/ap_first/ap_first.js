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
    var $range = $(".rg1");
    var $input = $(".nb1");
    var min = 1;
    var max = 20000000;
    $range.ionRangeSlider({
        type: "single",
        min: min,
        max: max,
        from: 8639435,
        onStart: function(data) {
            $input.html(data.from.toLocaleString());
        },
        onChange: function(data) {
            $input.html(data.from.toLocaleString());
        }
    });
    var $range2 = $(".rg2");
    var $input2 = $(".nb2");
    var min2 = 1;
    var max2 = 32;
    $range2.ionRangeSlider({
        type: "single",
        min: min2,
        max: max2,
        from: 15,
        onStart: function(data) {
            $input2.html(data.from);
        },
        onChange: function(data) {
            $input2.html(data.from);
        }
    });
    var $range3 = $(".rg3");
    var $input3 = $(".nb3");
    var min3 = 1;
    var max3 = 10;
    $range3.ionRangeSlider({
        type: "single",
        min: min3,
        max: max3,
        from: 8,
        onStart: function(data) {
            $input3.html(data.from);
        },
        onChange: function(data) {
            $input3.html(data.from);
        }
    });
})