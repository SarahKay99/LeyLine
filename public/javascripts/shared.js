$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    var dropdownHidden = true;

    $("#dropdown-btn").click(function() {
        if (dropdownHidden) {
            $("#dropdown-btn-label").html("<span><i class=\"fas fa-chevron-up\"></i></span>");
            $("#main-dropdown").removeClass("slideout");
            $("#main-dropdown").addClass("slidein");
            dropdownHidden = false;
        }
        else {
            $("#dropdown-btn-label").html("<span><i class=\"fas fa-chevron-down\"></i></span>");
            $("#main-dropdown").removeClass("slidein");
            $("#main-dropdown").addClass("show");
            $("#main-dropdown").addClass("slideout");
            dropdownHidden = true;
        }
    });

    $("#dropdown-container").focusout(function() {
        $("#dropdown-btn-label").html("<span><i class=\"fas fa-chevron-down\"></i></span>");
        $("#main-dropdown").removeClass("slidein");
        $("#main-dropdown").addClass("show");
        $("#main-dropdown").addClass("slideout");
        dropdownHidden = true;
    });
});