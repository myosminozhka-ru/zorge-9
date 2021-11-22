import $ from "jquery";
$(function() {
    $('.main_func__l--actions .switch').change(function() {
        $(this).toggleClass('active');
    })
    $('.table__title--block').on('click', function() {
        $(this).toggleClass('active')
    })
})