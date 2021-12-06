import $ from "jquery";
$(function() {
    $('.dlc1').on('click', function() {
        $(this).addClass('active');
        if($('.dlc1').hasClass('active')){
            $('.dlc1').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld1').addClass('active')
        $(this).addClass('active');
    })
    $('.dlc2').on('click', function() {
        $(this).addClass('active');
        if($('.dlc2').hasClass('active')){
            $('.dlc2').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld2').addClass('active')
        $(this).addClass('active');
    })
    $('.dlc3').on('click', function() {
        $(this).addClass('active');
        if($('.dlc3').hasClass('active')){
            $('.dlc3').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld3').addClass('active')
        $(this).addClass('active');
    })
    $('.dlc4').on('click', function() {
        $(this).addClass('active');
        if($('.dlc4').hasClass('active')){
            $('.dlc4').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld4').addClass('active')
        $(this).addClass('active');
    })
    $('.dlc5').on('click', function() {
        $(this).addClass('active');
        if($('.dlc5').hasClass('active')){
            $('.dlc5').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld5').addClass('active')
        $(this).addClass('active');
    })
    $('.dlc6').on('click', function() {
        $(this).addClass('active');
        if($('.dlc6').hasClass('active')){
            $('.dlc6').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld6').addClass('active')
        $(this).addClass('active');
    })
    $('.dlc7').on('click', function() {
        $(this).addClass('active');
        if($('.dlc7').hasClass('active')){
            $('.dlc7').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld7').addClass('active')
        $(this).addClass('active');
    })
    $(document).on('click', function(e){
        if( $(e.target).closest('.bbc').length)
        return
        
        $('.dld1').removeClass('active')
        $('.dlc1').removeClass('active')
        $('.dld2').removeClass('active')
        $('.dlc2').removeClass('active')
        $('.dld3').removeClass('active')
        $('.dlc3').removeClass('active')
        $('.dld4').removeClass('active')
        $('.dlc4').removeClass('active')
        $('.dld5').removeClass('active')
        $('.dlc5').removeClass('active')
        $('.dld6').removeClass('active')
        $('.dlc6').removeClass('active')
        $('.dld7').removeClass('active')
        $('.dlc7').removeClass('active')
    });
})