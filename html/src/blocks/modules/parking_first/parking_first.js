import $ from 'jquery';

$(function() {
    if ($('[name="SIMPLE_FORM_1"]').length) {
        $('[name="SIMPLE_FORM_1"]').submit(function(event) {
            event.preventDefault();
            form_submit('[name="SIMPLE_FORM_1"]', function (result) {
                console.log(result);
                if (result.SUCCESS)
                {
                $('[name="SIMPLE_FORM_1"]').find('label').fadeOut();
                $('[name="SIMPLE_FORM_1"]').find('.form-wrapper__btns').fadeOut();
                $('[name="SIMPLE_FORM_1"]').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
                $('[name="SIMPLE_FORM_1"]').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
                }
            });
        });
    }
})


