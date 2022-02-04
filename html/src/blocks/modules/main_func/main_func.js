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
        $(this).toggleClass('active');
        $(document).on('click', function(e){
            if( $(e.target).closest('#SvgjsPath1027').length || $(e.target).closest('#SvgjsPath1027 path').length)
            return
            $('.show2').removeClass('active');
            $('#SvgjsPath1027').removeClass('active');
        });
    })
    $('#SvgjsPath1025').on('click', function() {
        $('.show1').toggleClass('active');
        $(this).toggleClass('active');
        $(document).on('click', function(e){
            if( $(e.target).closest('#SvgjsPath1025').length || $(e.target).closest('#SvgjsPath1025 path').length)
            return
            $('.show1').removeClass('active');
            $('#SvgjsPath1025').removeClass('active');
        });
    })
    $('#SvgjsPath1029').on('click', function() {
        $('.show3').toggleClass('active');
        $(this).toggleClass('active');
        $(document).on('click', function(e){
            if( $(e.target).closest('#SvgjsPath1029').length || $(e.target).closest('#SvgjsPath1029 path').length)
            return        
            $('.show3').removeClass('active');
            $('#SvgjsPath1029').removeClass('active');
        });
    })
})



indexTowers.redirect = function () {
    $('path').off('click')
    $('path').on('click', function (){
        let el = this;
        let corpse = 0;
        if(el.classList.contains('active'))
        {
            corpse = el.classList[0].match(/(\d+)/)[0];
            if (corpse == 1) {
                corpse=`/floors/madison/${el.classList[1].match(/(\d+)/)[0]}`;
            } else if (corpse == 2) {
                corpse=`/floors/manhatten/${el.classList[1].match(/(\d+)/)[0]}`;
            } else {
                corpse=`/floors/soho/${el.classList[1].match(/(\d+)/)[0]}`;
            }
            console.log(corpse);
        }
    })
}