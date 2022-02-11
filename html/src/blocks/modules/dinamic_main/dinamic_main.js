import $ from "jquery";
$(function() {
    $('.switch').change(function() {
        $('.dinamic_main__bottom').toggleClass('active');
    });
})