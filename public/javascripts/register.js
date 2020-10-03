$(document).ready(function(){
    var checkBox = $("#data-provide");
    var checked = false;
    checkBox.click(function() {
        if (checked == false) {
            checked = true;
            $("#registerFirstName").prop('disabled', true);
            $("#registerLastName").prop('disabled', true);
        }
        else {
            checked = false;
            $("#registerFirstName").prop('disabled', false);
            $("#registerLastName").prop('disabled', false);
        }
    });
});