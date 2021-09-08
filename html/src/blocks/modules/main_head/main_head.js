import $ from "jquery";
$(function(){
  function burg(){
    var burgerWr = $('.burger-wrap'),
      burgerBtn = $('.burger-btn'),
      burgerBody = $('.burger-body'),
      burgerCloseBtn = $('.burger-close-btn');
    
    burgerBtn.on('click', function(){
      $(burgerWr).addClass('opened');
    });
    
    burgerCloseBtn.on('click', function(){
      $(burgerWr).removeClass('opened');
    })
  }
  
  burg();
  
  
  $(document).on('click', function(e){
    if( $(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
    return
    
    $('.burger-wrap').removeClass('opened');
  });
});