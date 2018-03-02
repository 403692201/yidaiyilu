var time_delay;
$(document).ready(function () {

   $("#all-content").mouseleave(function () {
        $("#right-content ").css("display","block");
    });
    $("#all-content").mouseenter(function () {
        $(".d1").css("display","block");
        $("#right-content ").css("display","block");
        // $("#right-content").css("background-image","none")
    });

    $("#table li").each(function (index) {
        $(this).mouseenter(function () {
            time_delay=setTimeout(function () {
                $("#right-content div.content").removeClass("content");
                $("#table li.label").removeClass("label");
                $("#right-content .div1").eq(index).addClass("content");
                $(this).addClass("label");
            },200)
        }).mouseleave(function () {
            clearTimeout(time_delay);
        });
    });
});
