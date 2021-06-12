$(function () {
    $("#video-button").click(function () {
        let about = $(".modal");

        if (about.css("display") === "none") {
            about.css("display", "block");
        } else {
            about.css("display", "none");
        }
    });

    $('.modal-closed').click(function (){
        $('.modal').css("display", "none");
    })
});
