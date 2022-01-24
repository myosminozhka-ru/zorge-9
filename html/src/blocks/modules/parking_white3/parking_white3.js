import $ from "jquery";
$(function() {
    $('.dlc1').on('click', function() {
        $(this).addClass('active');
        $('.park_form').addClass('active');
        if($('.dlc1').hasClass('active')){
            $('.dlc1').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld1').addClass('active')
        $(this).addClass('active');
    })
    $('.dld1').on('click', function() {
        $('.park_form').addClass('active');
    })
    $('.dlc2').on('click', function() {
        $(this).addClass('active');
        $('.park_form2').addClass('active');
        if($('.dlc2').hasClass('active')){
            $('.dlc2').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld2').addClass('active')
        $(this).addClass('active');
    })
    $('.dld2').on('click', function() {
        $('.park_form2').addClass('active');
    })
    $('.dlc3').on('click', function() {
        $(this).addClass('active');
        $('.park_form3').addClass('active');
        if($('.dlc3').hasClass('active')){
            $('.dlc3').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld3').addClass('active')
        $(this).addClass('active');
    })
    $('.dld3').on('click', function() {
        $('.park_form3').addClass('active');
    })
    $('.dlc4').on('click', function() {
        $(this).addClass('active');
        $('.park_form4').addClass('active');
        if($('.dlc4').hasClass('active')){
            $('.dlc4').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld4').addClass('active')
        $(this).addClass('active');
    })
    $('.dld4').on('click', function() {
        $('.park_form4').addClass('active');
    })
    $('.dlc5').on('click', function() {
        $(this).addClass('active');
        $('.park_form5').addClass('active');
        if($('.dlc5').hasClass('active')){
            $('.dlc5').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld5').addClass('active')
        $(this).addClass('active');
    })
    $('.dld5').on('click', function() {
        $('.park_form5').addClass('active');
    })
    $('.dlc6').on('click', function() {
        $(this).addClass('active');
        $('.park_form6').addClass('active');
        if($('.dlc6').hasClass('active')){
            $('.dlc6').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld6').addClass('active')
        $(this).addClass('active');
    })
    $('.dld6').on('click', function() {
        $('.park_form6').addClass('active');
    })
    $('.dlc7').on('click', function() {
        $(this).addClass('active');
        $('.park_form7').addClass('active');
        if($('.dlc7').hasClass('active')){
            $('.dlc7').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld7').addClass('active')
        $(this).addClass('active');
    })
    $('.dld7').on('click', function() {
        $('.park_form7').addClass('active');
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
    $('.main_head__center--backr').on('click', function() {
        $('.park_form').removeClass('active')
        $('.park_form2').removeClass('active')
        $('.park_form3').removeClass('active')
        $('.park_form4').removeClass('active')
        $('.park_form5').removeClass('active')
        $('.park_form6').removeClass('active')
        $('.park_form7').removeClass('active')
    })










})