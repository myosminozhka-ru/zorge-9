import $ from 'jquery';

$(function() {
    window.form_submit = function() {
        var fields = $('[name="SIMPLE_FORM_1"]').serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        var data = {...fields, web_form_submit: 'Отправить'};
        var actionUrl = $('[name="SIMPLE_FORM_1"]').attr('action');
        console.log('requested');
        BX.ajax({
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
           onsuccess: function (result) {
               if (result.SUCCESS)
               {
                $('[name="SIMPLE_FORM_1"]').find('label').fadeOut();
                $('[name="SIMPLE_FORM_1"]').find('.form-wrapper__btns').fadeOut();
                $('[name="SIMPLE_FORM_1"]').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
                $('[name="SIMPLE_FORM_1"]').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
               }
           }
       });
    }
    $('[name="SIMPLE_FORM_1"]').submit(function(event) {
        event.preventDefault();
        form_submit();
    });
})