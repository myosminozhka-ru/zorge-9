import $ from "jquery";
$(function() {
    $('.switch').change(function() {
        $('.dinamic_main__bottom').toggleClass('active');
    });
    $('.block_photo').on('click', function() {
        $('.dinamic_main__bottom').removeClass('active');
    })
    $('.block_video').on('click', function() {
        $('.dinamic_main__bottom').addClass('active');
    })
})