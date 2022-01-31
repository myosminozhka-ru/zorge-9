import "./import/modules";



window.form_submit = function(selector, callback) {
    var fields = $(selector).serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
    }, {});
    var data = {...fields, web_form_submit: 'Отправить'};
    var actionUrl = $(selector).attr('action');
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
       onsuccess: function(result) {
           callback(result);
       }
   });
}