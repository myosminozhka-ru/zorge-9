import $ from "jquery";
$(function() {
    $('.switch').change(function() {
        $('.dinamic_main__bottom').toggleClass('active');
    });
<<<<<<< HEAD
    $('.block_photo').on('click', function() {
        $('.dinamic_main__bottom').removeClass('active');
    })
    $('.block_video').on('click', function() {
        $('.dinamic_main__bottom').addClass('active');
    })
=======
>>>>>>> dc63f5c128d0dd1edc20543668a5852efb14a5cc
})