import $ from "jquery";
$(function() {
    $('.place1').on('click', function() {
        $(this).toggleClass('active');
        $('.plc1').toggleClass('active')
    })
    $('.place2').on('click', function() {
        $(this).toggleClass('active');
        $('.plc2').toggleClass('active')
    })
    $('.place3').on('click', function() {
        $(this).toggleClass('active');
        $('.plc3').toggleClass('active')
    })
    $('.place4').on('click', function() {
        $(this).toggleClass('active');
        $('.plc4').toggleClass('active')
    })
})