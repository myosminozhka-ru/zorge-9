import $ from "jquery";
$(function() {
    $('.switch').change(function() {
        $('.dinamic_main__bottom').toggleClass('active');
    });
    $('.block_photo').on('click', function() {
        $('.dinamic_main__bottom').removeClass('active');
        $('.switch input').prop('checked', false);
    })
    $('.block_video').on('click', function() {
        $('.dinamic_main__bottom').addClass('active');
        $('.switch input').prop('checked', true);
    })
})