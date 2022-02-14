import $ from 'jquery';

$(function() {
    $('.main_head__top a[href^="#"]').click(function() {
        $('.burger-wrap').removeClass('opened');
    })
})