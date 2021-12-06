import $ from "jquery";
import 'slick-carousel';
$(function() {
    let $status = $('.pagingInfo');
    let $slickElement = $('.slk1');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = '0' + ((currentSlide ? currentSlide : 0) + 1);
        $status.html(i + '<span>' + '0' + (slick.slideCount) + '</span>');
    });

    $slickElement.slick({
        // slide: '.room_blocks__block',
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        centerMode: false,
        responsive: [
          {
            breakpoint: 1241,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1061,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 801,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });
    $('.rooms_tbs__block--title').on('click', function() {
        $(this).parent().toggleClass('active');
    })
})