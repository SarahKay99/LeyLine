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
            }
            else {
                $('#profile-input-2-a').prop("disabled", true);
                $('#profile-input-2-b').prop("disabled", true);
            }
        }
        else {
            if ($(`#profile-input-${num}`).prop("disabled")) {
                $(`#profile-input-${num}`).prop("disabled", false);
            }
            else {
                $(`#profile-input-${num}`).prop("disabled", true);
            }
        }

        $(`#edit-btn-${num}`).html("<i class=\"far fa-times-circle\"></i>");
    });
});