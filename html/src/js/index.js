import "./import/modules";



$('form').find('input').attr('required', true);
window.form_submit = function(selector, callback) {
    console.log($(selector).find('input'));
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


// appartment.changeForm = function (data)
// {
//     let dataToSend = $(data).serializeArray();
//     BX.ajax({
//         url: '/local/templates/.default/components/bitrix/news.list/apartment/ajax.php',
//         data: dataToSend,
//         method: 'POST',
//         dataType: 'json',
//         timeout: 30,
//         async: true,
//         processData: true,
//         scriptsRunFirst: true,
//         emulateOnload: true,
//         start: true,
//         cache: false,
//         onsuccess: function (data) {
//             if(data.num > 0)
//             {
//                 $('.table__info').html(data.data);
//                 $('#num').html(data.num);
//                 console.log('hasdata')
//             } else {
//                 console.log('nodata')
//                 $('.table__info').html('<div class="table__info--no_result">Нет результатов</div>');
//             }
//         },
//         onfailure: function () {

//         }
//     });
// }