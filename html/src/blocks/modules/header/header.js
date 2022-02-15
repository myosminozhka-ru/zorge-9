import $ from 'jquery';

$(function() {
    $('.main_head__top a').click(function() {
        if ($(this).attr('href').includes('#')) {
            $('.burger-wrap').removeClass('opened');
        }
    })
})