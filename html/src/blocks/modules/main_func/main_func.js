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
    // $(document).on('click', function(e){
    //     $('#SvgjsPath1025, #SvgjsPath1027, #SvgjsPath1029').removeClass('active');
    //     $('.show1, .show2, .show3').removeClass('active');
    //     $('.main_func__l--block[data-id]').removeClass('active');
    // });
    $('#SvgjsPath1027').on('click', function() {
        // $('.show2').addClass('active');
        $('.main_func__l--block[data-id="7"]').trigger('click');
        // console.log('#SvgjsPath1027');
        // if (!$(this).hasClass('active')) {
        //     $(this).addClass('active');
        // }
    })
    $('#SvgjsPath1025').on('click', function() {
        // $('.show1').addClass('active');
        $('.main_func__l--block[data-id="5"]').trigger('click');
        // console.log('#SvgjsPath1025');
        // if (!$(this).hasClass('active')) {
        //     $(this).addClass('active');
        // }
    })
    // $(document).on('click', function(e){
    //     if( $(e.target).closest('#SvgjsPath1025').length)
    //     return
    //     // $('.show1').removeClass('active');
    //     $('#SvgjsPath1025').removeClass('active');
    // });
    $('#SvgjsPath1029').on('click', function() {
        $('.main_func__l--block[data-id="6"]').trigger('click');
        // console.log('#SvgjsPath1029');
        // // $('.show3').addClass('active');
        // if (!$(this).hasClass('active')) {
        //     $(this).addClass('active');
        // }
    })
    // $(document).on('click', function(e){
    //     if( $(e.target).closest('#SvgjsPath1029').length)
    //     return        
    //     // $('.show3').removeClass('active');
    //     $('#SvgjsPath1029').removeClass('active');
    // });
})
