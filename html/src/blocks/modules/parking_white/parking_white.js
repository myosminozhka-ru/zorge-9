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
    $('.plc2').on('click', function() {
        $('.hover_bl').addClass('active');
        if($('.plc2').hasClass('more')){
            $('.plc2').removeClass('more')
        } else {
            $(this).addClass('more')
        }
        $(this).addClass('more')
    })
    $('.plc4').on('click', function() {
        $('.hover_bl').addClass('active');
        $('.komc_in_white .plc2').removeClass('more')
        $('.komc_in_white .plc1').removeClass('more')
        if($('.plc4').hasClass('more')){
            $('.plc4').removeClass('more')
        } else {
            $(this).addClass('more')
        }
        $(this).addClass('more')
    })
    $('.komc_in_white .plc2').on('click', function() {
        $('.hover_bl').addClass('active');
        $('.komc_in_white .plc1').removeClass('more')
        $('.komc_in_white .plc4').removeClass('more')
        if($('.komc_in_white .plc2').hasClass('more')){
            $('.komc_in_white .plc2').removeClass('more')
        } else {
            $(this).addClass('more')
        }
        $(this).addClass('more')
    })
    $('.komc_in_white .plc1').on('click', function() {
        $('.hover_bl').addClass('active');
        $('.komc_in_white .plc2').removeClass('more')
        $('.komc_in_white .plc2').removeClass('more')
        if($('.komc_in_white .plc1').hasClass('more')){
            $('.komc_in_white .plc1').removeClass('more')
        } else {
            $(this).addClass('more')
        }
        $(this).addClass('more')
    })
    $(document).on('click', function(e){
        if( $(e.target).closest('.hover_bl').length || $(e.target).closest('.plc2.active').length || $(e.target).closest('.plc4.active').length || $(e.target).closest('.plc1.active').length)
        return
        
        $('.hover_bl').removeClass('active');
        $('.plc1').removeClass('more')
        $('.plc2').removeClass('more')
        $('.plc4').removeClass('more')
    });
})
import Panzoom from '@panzoom/panzoom'

if (window.matchMedia("(max-width: 1023px)").matches) {
const elem = document.getElementById('panzoom-element')
const panzoom = Panzoom(elem, {
  maxScale: 5,
  startScale: 1
})
panzoom.pan(10, 10)
panzoom.zoom(1, { animate: true })

// Panning and pinch zooming are bound automatically (unless disablePan is true).
// There are several available methods for zooming
// that can be bound on button clicks or mousewheel.
var buttonIn = document.getElementById('zoomInButton');
var buttonOut = document.getElementById('zoomOutButton');
buttonIn.addEventListener('click', panzoom.zoomIn)
buttonOut.addEventListener('click', panzoom.zoomOut)    }