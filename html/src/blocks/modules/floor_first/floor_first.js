import $ from "jquery";
$(function() {
    $('.main_dop path.active').on('mouseenter', function() {
        $('.hover_bl').addClass('active')
    })
    $('.main_dop path.active').on('mouseleave', function() {
        $('.hover_bl').removeClass('active')
    })
});
$(function() {
  
    $('.main_head__center--sort').on('click', '.sort-js', function() {
      $(this).addClass('active').siblings().removeClass('active');
      apartments.setCorpse($(this).data('corpse'));
    //   $(this).closest('.main_head__center').find('.floor_center').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('.main_head__center--sort').on('click', '.sort-js:nth-child(1)', function() {
        $(this).parents().find('.block_kompas').html('<img src="/local/templates/main/assets/html/dist/img/soho_compass.png" alt="">'); // soho
    });
    $('.main_head__center--sort').on('click', '.sort-js:nth-child(2)', function() {
        $(this).parents().find('.block_kompas').html('<img src="/local/templates/main/assets/html/dist/img/manhattan_compass.png" alt="">'); // manhattan
    });
    $('.main_head__center--sort').on('click', '.sort-js:nth-child(3)', function() {
        $(this).parents().find('.block_kompas').html('<img src="/local/templates/main/assets/html/dist/img/madison_compass.png" alt="">'); // madison
    });
});