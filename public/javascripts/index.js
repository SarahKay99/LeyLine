$(document).ready(function(){
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

    var dropdownHidden = true;

    $("#dropdown-btn").click(function() {
        if (dropdownHidden) {
            $("#dropdown-btn-label").html("<span><i class=\"fas fa-caret-up\"></i></span>");
            dropdownHidden = false;
        }
        else {
            $("#dropdown-btn-label").html("<span><i class=\"fas fa-caret-down\"></i></span>");
            dropdownHidden = true;
        }
    });
});