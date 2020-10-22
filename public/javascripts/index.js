$(document).ready(function() {
    // ../index.ejs
    var carousel = $('#carouselExampleIndicators');
    $('#one').click(function() {
        $('#photo-wrapper').show();
        $('#labelling-wrapper').hide();
        $('#sort-wrapper').hide();
        carousel.carousel(0);
    });
    $('#two').click(function() {
        $('#photo-wrapper').hide();
        $('#labelling-wrapper').show();
        $('#sort-wrapper').hide();
        carousel.carousel(1);
    });
    $('#three').click(function() {
        $('#photo-wrapper').hide();
        $('#labelling-wrapper').hide();
        $('#sort-wrapper').show();
        carousel.carousel(2);
    });

    // ../templates/carousel/supply.ejs
    $("#img-upload").change(function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $("#img-preview")       
                    .attr('src', e.target.result)
            };
            reader.readAsDataURL(this.files[0]);
            $("#img-preview").css("display", "block");
        }
    });
});