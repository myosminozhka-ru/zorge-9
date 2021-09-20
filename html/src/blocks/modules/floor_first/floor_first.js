import $ from "jquery";
$(function() {
    $('path.active').on('mouseenter', function() {
        $('.hover_bl').addClass('active')
    })
    $('path.active').on('mouseleave', function() {
        $('.hover_bl').removeClass('active')
    })
})