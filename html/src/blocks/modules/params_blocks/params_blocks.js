import $ from "jquery";
$(function() {
    $('.main_func__l--actions .switch').change(function() {
        $(this).toggleClass('active');
    })
    $('.table__title--block').on('click', function() {
        $(this).toggleClass('active')
    })
    $('.table__info--item').on('mouseenter', function() {
        var tops2 = $(this).position().top;
        $('.table__info--img').addClass('active').css('top', tops2);
    })
    $('.table__info--item').on('mouseleave', function() {
        $('.table__info--img').removeClass('active');
    })
    $('.table__info--more div').on('click', function() {
        $('.table__info--item').addClass('active');
        $(this).css('display', 'none')
    })
})