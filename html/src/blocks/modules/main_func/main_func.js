import $ from "jquery";
import ionRangeSlider from 'ion-rangeslider';
$(function() {
    if($('.js-range-slider').length && ionSliderOptions) {
        $('.js-range-slider').ionRangeSlider(ionSliderOptions);
    }
    if($('.js-range-slider2').length && ionSliderOptions2) {
        $('.js-range-slider2').ionRangeSlider(ionSliderOptions2);
    }
    if($('.js-range-slider3').length && ionSliderOptions3) {
        $('.js-range-slider3').ionRangeSlider(ionSliderOptions3);
    }
    if($('.js-range-slider4').length && ionSliderOptions4) {
        $('.js-range-slider4').ionRangeSlider(ionSliderOptions4);
    }
    $('#SvgjsPath1027').on('click', function() {
        $('.show2').toggleClass('active');
        $(document).on('click', function(e){
            if( $(e.target).closest('#SvgjsPath1027').length || $(e.target).closest('#SvgjsPath1027 path').length)
            return
            $('.show2').removeClass('active');
        });
    })
    $('#SvgjsPath1025').on('click', function() {
        $('.show1').toggleClass('active');
        $(document).on('click', function(e){
            if( $(e.target).closest('#SvgjsPath1025').length || $(e.target).closest('#SvgjsPath1025 path').length)
            return
            $('.show1').removeClass('active');
        });
    })
    $('#SvgjsPath1029').on('click', function() {
        $('.show3').toggleClass('active');
        $(document).on('click', function(e){
            if( $(e.target).closest('#SvgjsPath1029').length || $(e.target).closest('#SvgjsPath1029 path').length)
            return        
            $('.show3').removeClass('active');
        });
    })
})