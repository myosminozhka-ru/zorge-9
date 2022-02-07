import $ from "jquery";
$(function(){
    $('.feedback').click(function() {
        $('.fd1').addClass('opened');
        $('body').addClass('owf');
        return false;
    });
    $('.fd1 .icon-close').click(function() {
        $('.fd1').removeClass('opened');
        $('body').removeClass('owf');
        return false;
    });
    $(document).click( function(event){
        if($(event.target).closest('.hover_bl').length || $(event.target).closest('.fd1 .form-wrapper-inner').length ) 
          return;
        $('.fd1').removeClass('opened');
        $('body').removeClass('owf');
        event.stopPropagation();
    })
    $(document).keydown(function(event){
        if (event.which == 27) {
            $('.fd1').removeClass('opened');
            $('body').removeClass('owf');
        }
    });
    $('.feedback2').click(function() {
        $('.fd2').addClass('opened');
        $('body').addClass('owf');
        return false;
    });
    $('.fd2 .icon-close').click(function() {
        $('.fd2').removeClass('opened');
        $('body').removeClass('owf');
        return false;
    });
    $(document).click( function(event){
        if( $(event.target).closest('.fd2 .form-wrapper-inner').length ) 
          return;
        $('.fd2').removeClass('opened');
        $('body').removeClass('owf');
        event.stopPropagation();
    })
    $(document).keydown(function(event){
        if (event.which == 27) {
            $('.fd2').removeClass('opened');
            $('body').removeClass('owf');
        }
    });
    if ($('[name="SIMPLE_FORM_2"]').length) {
        $('[name="SIMPLE_FORM_2"]').submit(function(event) {
            event.preventDefault();
            form_submit('[name="SIMPLE_FORM_2"]', function (result) {
                console.log(result);
                if (result.SUCCESS)
                {
                $('[name="SIMPLE_FORM_2"]').find('label').fadeOut();
                $('[name="SIMPLE_FORM_2"]').find('.form-wrapper__btns').fadeOut();
                $('[name="SIMPLE_FORM_2"]').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
                $('[name="SIMPLE_FORM_2"]').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
                }
            });
        });
    }
});