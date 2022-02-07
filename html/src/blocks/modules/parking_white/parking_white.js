import $ from "jquery";
import Panzoom from '@panzoom/panzoom';
$(function() {
    $('.place1').on('click', function() {
        $(this).toggleClass('active');
        $(this).parents('.parking_white__in').find('.plc1').toggleClass('active');
        if ($(this).hasClass('komc_js')) {
            
            $.ajax({
                url: '/ajax/commercial.php',
                data: {
                    type: 'info'
                },
                method: 'POST',
                dataType: 'json',
                timeout: 30,
                async: true,
                enctype: "multipart/form-data",
                processData: true,
                scriptsRunFirst: true,
                emulateOnload: true,
                start: true,
                cache: false,
                success: function(result) {
                    callback(result);
                }
            });
        }
    })
    $('.place2').on('click', function() {
        $(this).toggleClass('active');
        $(this).parents('.parking_white__in').find('.plc2').toggleClass('active');
    })
    $('.place3').on('click', function() {
        $(this).toggleClass('active');
        $(this).parents('.parking_white__in').find('.plc3').toggleClass('active')
    })
    $('.place4').on('click', function() {
        $(this).toggleClass('active');
        $(this).parents('.parking_white__in').find('.plc4').toggleClass('active')
    })
    $('.plc2').on('click', function() {
        $('.hover_bl').addClass('active');
        console.log($(this).attr('id'));
        if ($('#parking-place') && $(this).attr('id')) {
            $('#parking-place').attr('value', $(this).attr('id'));
        }
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
        if ($('#parking-place') && $(this).attr('id')) {
            $('#parking-place').attr('value', $(this).attr('id'));
        }
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
        if( $(e.target).closest('.hover_bl').length || $(e.target).closest('.plc2.active').length || $(e.target).closest('.form-wrapper').length || $(e.target).closest('.plc4.active').length || $(e.target).closest('.plc1.active').length)
        return
        
        $('.hover_bl').removeClass('active');
        $('.plc1').removeClass('more')
        $('.plc2').removeClass('more')
        $('.plc4').removeClass('more')
    });
})
if (document.querySelector('#panzoom-element')) {
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
};
$(document).on("click", ".block_park", function(e) {
    if ($('.block_park').length) {
        e.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top; // получаем координаты блока
        $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
    }
});
// $.ajax({
// 	url: '/item.json',         /* Куда пойдет запрос */
// 	method: 'get',             /* Метод передачи (post или get) */
// 	dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
// 	success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
//         data.forEach(item => {
//             if(item.isUnavailable && $(`[data-item-id="${item.id}"]`).length) {
//                 $(`[data-item-id="${item.id}"]`).addClass('dis');
//             }
//         })
// 	}
// });
// $("#form_park").submit(function(e) {
//     console.log(1);
//     e.preventDefault(); // avoid to execute the actual submit of the form.

//     var form = $(this);
//     var actionUrl = form.attr('action');
    
//     $.ajax({
//         type: "POST",
//         url: actionUrl,
//         data: form.serialize(), // serializes the form's elements.
//         success: function(data)
//         {
//           console.log(data); // show response from the php script.
//         }
//     });
    
// });