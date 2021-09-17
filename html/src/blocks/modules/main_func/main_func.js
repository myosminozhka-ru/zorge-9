import $ from "jquery";
import ionRangeSlider from 'ion-rangeslider';
$(function() {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 3,
        max: 19
    });
    $(".js-range-slider2").ionRangeSlider({
        type: "double",
        min: 1,
        max: 3
    });
    $(".js-range-slider3").ionRangeSlider({
        type: "double",
        min: 26,
        max: 78
    });
    $(".js-range-slider4").ionRangeSlider({
        type: "double",
        min: 9.0,
        step: 0.1,
        max: 25.4
    });
    $('#SvgjsPath1027').on('click', function() {
        $('.show3').toggleClass('active');
        $(document).on('click', function(e){
            if( $(e.target).closest('#SvgjsPath1027').length || $(e.target).closest('#SvgjsPath1027 path').length)
            return
            $('.show3').removeClass('active');
        });
    })
    $('#SvgjsPath1025').on('click', function() {
        $('.show2').toggleClass('active');
        $(document).on('click', function(e){
            if( $(e.target).closest('#SvgjsPath1025').length || $(e.target).closest('#SvgjsPath1025 path').length)
            return
            $('.show2').removeClass('active');
        });
    })
    $('#SvgjsPath1029').on('click', function() {
        $('.show1').toggleClass('active');
        $(document).on('click', function(e){
            if( $(e.target).closest('#SvgjsPath1029').length || $(e.target).closest('#SvgjsPath1029 path').length)
            return        
            $('.show1').removeClass('active');
        });
    })
})