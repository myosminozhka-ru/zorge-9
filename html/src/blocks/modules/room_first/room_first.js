import $ from "jquery";
$(function() {
    $('.sort-js').on('click', function() {
        $('.sort-js.active').not(this).removeClass('active');
        $(this).toggleClass('active');
    })
})