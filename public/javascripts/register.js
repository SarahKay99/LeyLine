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

    var usernameRegister = $("#registerUsername");
    var emailRegister = $("#registerEmail");
    var passwordRegister = $("#registerPassword");
    var passwordVerify = $("#verifyPassword");
    var usernameMsg = $("#validate-username");
    var emailMsg = $("#validate-email");
    var passwordMsg = $("#validate-password");
    var verifyPasswordMsg = $("#validate-verify-password");

    usernameRegister.focus( function() {
        $(this).css("border-color", "#ced4da");
    });

    usernameRegister.focusout(function() {
        if ($(this).val().match("^.{1,64}$") == null) {
            $(this).css("border-color", "#dc3545");
            usernameMsg.css("color", "#dc3545");
            usernameMsg.text("Must be between 1 - 64 characters.");
            usernameMsg.css("visibility", "visible");
        }
        else {
            usernameMsg.css("color", "#28a745");
            usernameMsg.html("<i class=\"fas fa-check-square\"></i> Valid");
            usernameMsg.css("visibility", "visible");
        }
    });

    emailRegister.focus( function() {
        $(this).css("border-color", "#ced4da");
    });

    emailRegister.focusout(function() {
        if ($(this).val().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
            $(this).css("border-color", "#dc3545");
            emailMsg.css("color", "#dc3545");
            emailMsg.text("Please enter a valid address.");
            emailMsg.css("visibility", "visible");
        }
        else {
            emailMsg.css("color", "#28a745");
            emailMsg.html("<i class=\"fas fa-check-square\"></i> Valid");
            emailMsg.css("visibility", "visible");
        }
    });

    passwordRegister.focus( function() {
        $(this).css("border-color", "#ced4da");
    });

    passwordRegister.focusout(function() {
        if ($(this).val().match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/) == null) {
            $(this).css("border-color", "#dc3545");
            passwordMsg.css("color", "#dc3545");
            passwordMsg.text("Needs length of 8 characters with a number and special character.");
            passwordMsg.css("visibility", "visible");
        }
        else {
            passwordMsg.css("color", "#28a745");
            passwordMsg.html("<i class=\"fas fa-check-square\"></i> Valid.");
            passwordMsg.css("visibility", "visible");
        }
    });

    passwordVerify.focus( function() {
        $(this).css("border-color", "#ced4da");
    });

    passwordVerify.focusout(function() {
        if ($(this).val() != passwordRegister.val()) {
            $(this).css("border-color", "#dc3545");
            verifyPasswordMsg.css("color", "#dc3545");
            verifyPasswordMsg.text("Passwords don't match.");
            verifyPasswordMsg.css("visibility", "visible");
        }
        else {
            verifyPasswordMsg.css("color", "#28a745");
            verifyPasswordMsg.html("<i class=\"fas fa-check-square\"></i> Verified.");
            verifyPasswordMsg.css("visibility", "visible");
        }
    });
});