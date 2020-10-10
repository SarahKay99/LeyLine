$(document).ready(function() {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    var dropdownHidden = true;

    $("#dropdown-btn").click(function() {
        if (dropdownHidden) {
            $("#dropdown-btn-label").html("<span><i class=\"fas fa-chevron-up\"></i></span>");
            dropdownHidden = false;
        }
        else {
            $("#dropdown-btn-label").html("<span><i class=\"fas fa-chevron-down\"></i></span>");
            dropdownHidden = true;
        }
    });

    $("#dropdown-container").focusout(function() {
        $("#dropdown-btn-label").html("<span><i class=\"fas fa-chevron-down\"></i></span>");
        dropdownHidden = true;
    });
});