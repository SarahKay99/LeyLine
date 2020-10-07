$(document).ready(function() {
    $("[id^=side-btn-]").click(function() {
        var id = $(this).attr('id');
        var num = id.split("-")[2];

        $(`#tab-${num}`).show();

        for (var i = 1; i < 10; i++) {
            if (i != num) {
                $(`#tab-${i}`).hide();
            }
        }
    });
});