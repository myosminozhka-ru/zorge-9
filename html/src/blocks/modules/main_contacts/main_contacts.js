import $ from "jquery";

$(function () {
    if ($('[name="SIMPLE_FORM_3"]').length) {
        $('[name="SIMPLE_FORM_3"]').submit(function (event) {
            event.preventDefault();
            form_submit('[name="SIMPLE_FORM_3"]', function (result) {
                console.log(result);
                if (result.SUCCESS) {
                    $('[name="SIMPLE_FORM_3"]').find('label').fadeOut();
                    $('[name="SIMPLE_FORM_3"]').find('.form-wrapper__btns').fadeOut();
                    $('[name="SIMPLE_FORM_3"]').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
                    $('[name="SIMPLE_FORM_3"]').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
                }
            });
        });
    }
    if ($('[name="SIMPLE_FORM_4"]').length) {
        $('[name="SIMPLE_FORM_4"]').submit(function (event) {
            event.preventDefault();
            form_submit('[name="SIMPLE_FORM_4"]', function (result) {
                console.log(result);
                if (result.SUCCESS) {
                    $('[name="SIMPLE_FORM_4"]').find('label').fadeOut();
                    $('[name="SIMPLE_FORM_4"]').find('.form-wrapper__btns').fadeOut();
                    $('[name="SIMPLE_FORM_4"]').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
                    $('[name="SIMPLE_FORM_4"]').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
                }
            });
        });
    }
})