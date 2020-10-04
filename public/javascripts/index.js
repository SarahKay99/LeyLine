$(document).ready(function(){
    var carousel = $('#carouselExampleIndicators');
    $('#one').click(function() {
        $('#upload-wrapper').show();
        $('#labelling-wrapper').hide();
        $('#sort-wrapper').hide();
        carousel.carousel(0);
    });
    $('#two').click(function() {
        $('#upload-wrapper').hide();
        $('#labelling-wrapper').show();
        $('#sort-wrapper').hide();
        carousel.carousel(1);
    });
    $('#three').click(function() {
        $('#upload-wrapper').hide();
        $('#labelling-wrapper').hide();
        $('#sort-wrapper').show();
        carousel.carousel(2);
    });

    $("#img-upload").change(function() {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $("#img-preview")       
                    .attr('src', e.target.result)
                    .width(370)
                    .height(200);
            };
            reader.readAsDataURL(this.files[0]);
            $("#img-preview").show()
        }
    });
});