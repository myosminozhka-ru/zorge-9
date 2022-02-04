import $ from "jquery";
import 'slick-carousel';
import ionRangeSlider from 'ion-rangeslider';
$(function() {
    let params = {
        contribution: 0,
        sum: 0,
        years: 0,
        percent: 0,
    }
    let bankFormatted;
    function recalculateBanks (result) {
        $('.ap_tabs').html('').prepend(`
            <div class="ap_tabs__titles">
                <div class="ap_tabs__titles--block">Банк</div>
                <div class="ap_tabs__titles--block">Ставка</div>
                <div class="ap_tabs__titles--block">Срок</div>
                <div class="ap_tabs__titles--block">Ежемесячный платеж</div>
                <div class="ap_tabs__titles--block">Минимальный взнос, %</div>
            </div>
        `);

        result.banks.map(item => {
            $('.ap_tabs').append(`
                <div class="ap_tabs__blocks">
                    <div class="ap_tabs__blocks--block">
                        <div class="ap_tabs__blocks--img"><img src="./img/i5.png" alt=""></div>
                        <div class="ap_tabs__blocks--title">ВТБ</div>
                    </div>
                    <div class="ap_tabs__blocks--block"><span class="ap_tabs__blocks--span">Ставка</span>от 8.1</div>
                    <div class="ap_tabs__blocks--block"><span class="ap_tabs__blocks--span">Срок</span>до 30 лет</div>
                    <div class="ap_tabs__blocks--block"><span class="ap_tabs__blocks--span">Ежемесячный платеж</span>102 216 р.</div>
                    <div class="ap_tabs__blocks--block"><span class="ap_tabs__blocks--span">Минимальный взнос, %</span>10%</div>
                </div>
            `);
        });
        bankFormatted = result.banksFormatted;
        $('#bank_formatted').attr('value', bankFormatted);
        console.log(bankFormatted);
    }
    if ($('.request_form form').length) {
        $('.request_form form').submit(function(event) {
            event.preventDefault();
            form_submit('.request_form form', function (result) {
                console.log(result);
                if (result.SUCCESS)
                {
                $('.request_form form').find('label').fadeOut();
                $('.request_form form').find('.form-wrapper__btns').fadeOut();
                $('.request_form form').closest('.form-wrapper-inner').find('.form-wrapper__subtitle').fadeOut();
                $('.request_form form').closest('.form-wrapper-inner').find('.form-wrapper__title').html(result.SUCCESS);
                }
            });
        });
    }
    $('.ap_tabs__button').click(function(event) {
        event.preventDefault();
        $('.request_form').addClass('opened');
    })
    $('.slrs25').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplaySpeed: 2500,
        fade: true
    });
    if($('.rg1').length && ionopt) {
        $('.rg1').ionRangeSlider({
            ...ionopt,
            onStart: function(data) {
                $(".nb1").html(data.from.toLocaleString());
                params.contribution = data.from.toLocaleString();
                $.ajax({
                    data: params,
                    url: "/static/banks.json",
                    // method: "POST",
                    success: function(result) {
                        recalculateBanks(result)
                    }
                })
            },
            onChange: function(data) {
                $(".nb1").html(data.from.toLocaleString());
                params.contribution = data.from.toLocaleString();
                $.ajax({
                    data: params,
                    url: "/static/banks.json",
                    // method: "POST",
                    success: function(result) {
                        recalculateBanks(result)
                    }
                })
            }
        });
    }
    if($('.rg2').length && ionopt2) {
        $('.rg2').ionRangeSlider({
            ...ionopt2,
            onStart: function(data) {
                $(".nb2").html(data.from);
            },
            onChange: function(data) {
                $(".nb2").html(data.from);
            }
        });
    }
    if($('.rg3').length && ionopt3) {
        $('.rg3').ionRangeSlider({
            ...ionopt3,
            onStart: function(data) {
                $(".nb3").html(data.from);
            },
            onChange: function(data) {
                $(".nb3").html(data.from);
            }
        });
    }
})