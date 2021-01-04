$(function() {
    console.log('TEST');

    if ($(window).width() < 574) {
        $(".venue").each(function() {
            console.log('YES')
            $(this).css({"font-size":".9em"})
        });

        $(".announced").html("NEW");
    }

    $(".clone").click(function() {
        $("#copied").css({"display":"inline"});
    });
    $("#shareModal").on('hidden.bs.modal', function() {
        $("#copied").css({"display":"none"});
    });
});