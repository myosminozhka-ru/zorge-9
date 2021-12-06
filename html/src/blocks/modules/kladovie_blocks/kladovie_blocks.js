import $ from "jquery";
import 'slick-carousel';
$(function() {
    let $status = $('.pagingInfo');
    let $slickElement = $('.kladovie_blocks-js');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = '0' + ((currentSlide ? currentSlide : 0) + 1);
        $status.html(i + '<span>' + '0' + (slick.slideCount) + '</span>');
    });

    $slickElement.slick({
        // slide: '.kladovie_blocks__block',
        autoplay: true,
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1231,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 921,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });
})