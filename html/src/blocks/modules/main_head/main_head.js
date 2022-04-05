import $ from "jquery";
$(function(){

  $('.main_head__center--backr').click(function(event) {
    if (history.length > 2) {
      event.preventDefault();
      $(this).closest('.parking_white').removeClass('active');
    }
  })
  function burg(){
    var burgerWr = $('.burger-wrap'),
      burgerBtn = $('.burger-btn'),
      burgerBody = $('.burger-body'),
      burgerCloseBtn = $('.burger-close-btn');
    
    burgerBtn.on('click', function(){
      $(burgerWr).addClass('opened');
      $('body').addClass('owf');
    });
    
    burgerCloseBtn.on('click', function(){
      $(burgerWr).removeClass('opened');
      $('body').removeClass('owf');
    })
  }
  
  burg();
  
  
  $(document).on('click', function(e){
    if( $(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
    return
    
    $('.burger-wrap').removeClass('opened');
    $('body').removeClass('owf');
  });
  let tfix = $('.fix_block_js'),
    tfixOffset = tfix.offset(),
    hederHeight = $('.fix_block_js').height();
  $(window).on('scroll', function() {
    if (($(window).scrollTop() > tfixOffset.top)) {
      if (($(window).scrollTop() > tfixOffset.top)) {
        $('.main_head').css({
          'paddingTop': hederHeight+'px'
       });
       $('.header').css({
         'paddingTop': hederHeight+'px'
      });
        tfix.addClass('fixed'); 
      };
    } else {
      tfix.removeClass('fixed');
      $('.main_head').css({
        'paddingTop': 0
       })
       $('.header').css({
        'paddingTop': 0
      });
    };
  }); 
});