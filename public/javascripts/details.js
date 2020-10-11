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

    $("#delete-confirm").focusout(function() {
        
    });
});