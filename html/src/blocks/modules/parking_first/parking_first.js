import $ from 'jquery';

$(function() {
    $('#form_park').on('submit', function(event) {
        console.log('form submitted')
        event.preventDefault(); // avoid to execute the actual submit of the form.

        var data = $(this).serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        var actionUrl = $(this).attr('action');
        
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
               if(result)
               {
                $('#form_park').find('label').fadeOut();
                $('#form_park').find('.form-wrapper__btns').fadeOut();
                $('#form_park').find('.form-wrapper__subtitle').text(result.SUCCESS);
               }
           }
       });
    });
})