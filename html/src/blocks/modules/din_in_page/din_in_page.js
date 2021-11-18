import $ from "jquery";
import lightGallery from 'lightgallery';
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    selector: 'a'
});
$(function() {
    if($(window).width() < 1040) {

    } else {
        $('#lg-close-1').appendTo('#lg-content-1')
    }
})