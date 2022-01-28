import $ from 'jquery';

$(function() {
    window.form_submit = function() {
        var fields = $('#form_park form').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        var data = {...fields, web_form_submit: 'Отправить'};
        var actionUrl = $('#form_park form').attr('action');
        
        $.ajax({
           url: actionUrl,
           data: data,
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
           success: function (result) {
               if (result)
               {
                $('#form_park form').find('label').fadeOut();
                $('#form_park form').find('.form-wrapper__btns').fadeOut();
                $('#form_park form').find('.form-wrapper__subtitle').text(result.SUCCESS);
               }
           }
       });
    }
    $('#form_park form').submit(function(event) {
        event.preventDefault();
        form_submit();
    });
})