import $ from 'jquery';

$(function() {
    $('.main_head__top a').click(function() {
        // console.log($(this).attr('href').includes('#'));
        if ($(this).attr('href').includes('#')) {
            // console.log(123123123123123);
            $('.burger-wrap').removeClass('opened');
        }
    })
})