$(document).ready(function() {
    var toggled = false;

    $("#sidebar-toggle").click(function() {
        if (!toggled) {
            $("#menu-items").css("width", "85%");
            toggled = true;
        }
        else {
            $("#menu-items").css("width", "100%");
            toggled = false;
        }
    });
});