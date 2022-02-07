import $ from "jquery";
$(function() {
    let corpse = 'madison';
    let flat = 0;
    console.log(corpse);
    $('#block_park').on('click', '.feedback', function() {
        console.log('tyartatat');
        $('.form-wrapper.fd1').addClass('opened');
    })
    $('.dlc1').on('click', function() {
        $(this).addClass('active');
        $('.park_form').addClass('active');
        if($('.dlc1').hasClass('active')){
            $('.dlc1').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld1').addClass('active')
        $(this).addClass('active');
    })
    $('.building_id').click(function() {
        corpse = $(this).data('corpse-id');
    })
    $('.plc1[data-flat-id], .plc2[data-flat-id]').click(function() {
        flat = $(this).data('flat-id');
        $.ajax({
            url: 'http://zorge-9.01sh.ru/ajax/commercial.php',
            method: "POST",
            data: {
                type: 'detail',
                corpus: corpse,
                name: $(this).data('flat-id')
            },
            success: (result) => {
                let data = JSON.parse(result);
                console.log(data);


                $(this).closest('.parking_white__in').find('.hover_bl').replaceWith(`
                    <div class="hover_bl active">
                        <div class="hover_bl__block">
                            <div class="hover_bl__block--title">Номер <br> помещения и корпус</div>
                            <div class="hover_bl__block--text">${data.name}</div>
                        </div>
                        <div class="hover_bl__block">
                            <div class="hover_bl__block--title">Площадь <br> помещения</div>
                            <div class="hover_bl__block--text">${data.area}</div>
                        </div>
                        <div class="hover_bl__block">
                            <div class="hover_bl__block--title">Цена</div>
                            <div class="hover_bl__block--text">${data.price}</div>
                        </div>
                        <div class="hover_bl__block">
                            <div class="hover_bl__block--link feedback">Оставить заявку</div>
                            <a href="#" class="room_center__rl--li">
                                <div class="room_center__rl--img"><img src="./img/sc4.png" alt=""></div>
                                <div class="room_center__rl--title">Скачать pdf</div>
                            </a>
                        </div>
                    </div>
                `)
                // result.forEach(item => {
                //     console.log(item);
                // })
            }
        });
    })
    $('.load_data').click(() => {
        $.ajax({
            url: 'http://zorge-9.01sh.ru/ajax/commercial.php',
            method: "POST",
            data: {
                type: 'info',
                corpus: corpse
            },
            success: (result) => {
                let data = JSON.parse(result);
                $('.plc1, .plc2').removeClass('active');
                for (let i = 0; i < data.length; i++) {
                    if ($(`[data-flat-id="${data[i]}"]`).length) {
                        $(`[data-flat-id="${data[i]}"]`).addClass('active');
                    }
                }
                // result.forEach(item => {
                //     console.log(item);
                // })
            }
        });
    })
    if ($('[name="SIMPLE_FORM_5"]').length) {
        $('[name="SIMPLE_FORM_5"]').submit(function(event) {
            event.preventDefault();
            form_submit('[name="SIMPLE_FORM_5"]', function (result) {
                if (result.SUCCESS)
                {
                $('[name="SIMPLE_FORM_5"]').find('label').fadeOut();
                $('[name="SIMPLE_FORM_5"]').find('.form-wrapper__btns').fadeOut();
                $('[name="SIMPLE_FORM_5"]').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
                $('[name="SIMPLE_FORM_5"]').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
                }
            });
        });
    }
    $('.dld1').on('click', function() {
        $('.park_form').addClass('active');
    })
    $('.dlc2').on('click', function() {
        $(this).addClass('active');
        $('.park_form2').addClass('active');
        if($('.dlc2').hasClass('active')){
            $('.dlc2').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld2').addClass('active')
        $(this).addClass('active');
    })
    $('.dld2').on('click', function() {
        $('.park_form2').addClass('active');
    })
    $('.dlc3').on('click', function() {
        $(this).addClass('active');
        $('.park_form3').addClass('active');
        if($('.dlc3').hasClass('active')){
            $('.dlc3').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld3').addClass('active')
        $(this).addClass('active');
    })
    $('.dld3').on('click', function() {
        $('.park_form3').addClass('active');
    })
    $('.dlc4').on('click', function() {
        $(this).addClass('active');
        $('.park_form4').addClass('active');
        if($('.dlc4').hasClass('active')){
            $('.dlc4').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld4').addClass('active')
        $(this).addClass('active');
    })
    $('.dld4').on('click', function() {
        $('.park_form4').addClass('active');
    })
    $('.dlc5').on('click', function() {
        $(this).addClass('active');
        $('.park_form5').addClass('active');
        if($('.dlc5').hasClass('active')){
            $('.dlc5').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld5').addClass('active')
        $(this).addClass('active');
    })
    $('.dld5').on('click', function() {
        $('.park_form5').addClass('active');
    })
    $('.dlc6').on('click', function() {
        $(this).addClass('active');
        $('.park_form6').addClass('active');
        if($('.dlc6').hasClass('active')){
            $('.dlc6').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld6').addClass('active')
        $(this).addClass('active');
    })
    $('.dld6').on('click', function() {
        $('.park_form6').addClass('active');
    })
    $('.dlc7').on('click', function() {
        $(this).addClass('active');
        $('.park_form7').addClass('active');
        if($('.dlc7').hasClass('active')){
            $('.dlc7').removeClass('active')
        } else {
            $(this).addClass('active')
        }
        $('.dld7').addClass('active')
        $(this).addClass('active');
    })
    $('.dld7').on('click', function() {
        $('.park_form7').addClass('active');
    })
    $(document).on('click', function(e){
        if( $(e.target).closest('.bbc').length)
        return
        
        $('.dld1').removeClass('active')
        $('.dlc1').removeClass('active')
        $('.dld2').removeClass('active')
        $('.dlc2').removeClass('active')
        $('.dld3').removeClass('active')
        $('.dlc3').removeClass('active')
        $('.dld4').removeClass('active')
        $('.dlc4').removeClass('active')
        $('.dld5').removeClass('active')
        $('.dlc5').removeClass('active')
        $('.dld6').removeClass('active')
        $('.dlc6').removeClass('active')
        $('.dld7').removeClass('active')
        $('.dlc7').removeClass('active')
    });
    $('.main_head__center--backr').on('click', function() {
        $('.park_form').removeClass('active')
        $('.park_form2').removeClass('active')
        $('.park_form3').removeClass('active')
        $('.park_form4').removeClass('active')
        $('.park_form5').removeClass('active')
        $('.park_form6').removeClass('active')
        $('.park_form7').removeClass('active')
    })



})