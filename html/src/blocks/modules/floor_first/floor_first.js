import $ from "jquery";
$(function() {
    $('path.active').on('mouseenter', function() {
        $('.hover_bl').addClass('active')
    })
    $('path.active').on('mouseleave', function() {
        $('.hover_bl').removeClass('active')
    })
});
$(function() {
  
    $('.main_head__center--sort').on('click', '.sort-js', function() {
      $(this).addClass('active').siblings().removeClass('active');
      $(this).closest('.main_head__center').find('.floor_center').removeClass('active').eq($(this).index()).addClass('active');
    });
    
});