$(document).ready(function(){
    var carousel = $('#carouselExampleIndicators');
    $('#one').click(function(e) {
        $('#upload-wrapper').show();
        $('#labelling-wrapper').hide();
        $('#sort-wrapper').hide();
        carousel.carousel(0);
    });
    $('#two').click(function(e) {
        $('#upload-wrapper').hide();
        $('#labelling-wrapper').show();
        $('#sort-wrapper').hide();
        carousel.carousel(1);
    });
    $('#three').click(function(e) {
        $('#upload-wrapper').hide();
        $('#labelling-wrapper').hide();
        $('#sort-wrapper').show();
        carousel.carousel(2);
    });
});