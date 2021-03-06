$(document).ready(function() {
    var completableFields = 10;
    var progress = $("#profile-progress");
    progress.css("width", "75%");
});

$(document).ready(function() {
    $("[id^=side-btn-]").click(function() {
        var id = $(this).attr('id');
        var num = id.split("-")[2];

        $(`#tab-${num}`).show();
        $(`#side-btn-${num}`).addClass("active-side-btn");

        for (var i = 1; i < 10; i++) {
            if (i != num) {
                $(`#side-btn-${i}`).removeClass("active-side-btn");
                $(`#tab-${i}`).hide();
            }
        }
    });

    $("[id^=edit-btn-]").click(function() {
        var id = $(this).attr('id');
        var num = id.split("-")[2];

        if (num == 2) {
            if ($('#profile-input-2-a').prop("disabled") && $('#profile-input-2-b').prop("disabled")) {
                $('#profile-input-2-a').prop("disabled", false);
                $('#profile-input-2-b').prop("disabled", false);
                $(`#edit-btn-${num} i`).css("color", "rgb(170, 170, 170)");
                $(`#edit-warning-${num}`).text("Editing...");
                $(`#edit-btn-${num}`).attr('data-original-title', "Cancel").tooltip('show');
            }
            else {
                $('#profile-input-2-a').prop("disabled", true);
                $('#profile-input-2-b').prop("disabled", true);
                $(`#edit-btn-${num} i`).css("color", "black");
                $(`#edit-warning-${num}`).text("");
                $(`#edit-btn-${num}`).attr('data-original-title', "Edit").tooltip('show');
            }
        }
        else {
            if ($(`#profile-input-${num}`).prop("disabled")) {
                $(`#profile-input-${num}`).prop("disabled", false);
                $(`#edit-btn-${num} i`).css("color", "rgb(170, 170, 170)");
                $(`#edit-warning-${num}`).text("Editing...");
                $(`#edit-btn-${num}`).attr('data-original-title', "Cancel").tooltip('show');
            }
            else {
                $(`#profile-input-${num}`).prop("disabled", true);
                $(`#edit-btn-${num} i`).css("color", "black");
                $(`#edit-warning-${num}`).text("");
                $(`#edit-btn-${num}`).attr('data-original-title', "Edit").tooltip('show');
            }
        }
    });

    $("#delete-confirm").keyup(function() {
        if ($(this).val() == $("#current-username").text()) {
            $("#delete-confirm-btn").prop("disabled", false);
        }
        else {
            $("#delete-confirm-btn").prop("disabled", true);
        }
    });

    $('#2fa-tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });

    $('#custom').click(function() {
        if ($("input[id='custom']:checked").val()) {
            $("#custom-wrapper").prop("disabled", false);
            $("#default-wrapper").prop("disabled", true);
        }
    });

    $('#default').click(function() {
        if ($("input[id='default']:checked").val()) {
            $("#custom-wrapper").prop("disabled", true);
            $("#default-wrapper").prop("disabled", false);
        }
    });

    $('#phone-field').keyup(function() {
        if ($(this).val().match(/^\+[1-9]{1}[0-9]{1,14}$/) == null) {
            $('#phone-warning').text("Make sure you enter a valid phone number.");
        }
        else {
            $('#phone-warning').text("");
        }
    });
});