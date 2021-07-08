$(document).ready(function () {

    $("#input").keypress(function (event) {
        if (event.which == 13 && inputPresent()) {
            $("#to-do-list").append("<li class='list-group-item listItem'><span class='spanElement'><button class='fa fa-trash deleteButton'></button></span><div class='liText'>" + $('#input').val() + "</div></li>");
            $("input").val('');
            altColor();
        }
    });

    $("#input").focus(function () {
        $(this).addClass("redBorder");
    });

    $("#input").blur(function () {
        $(this).removeClass("redBorder");
    })

    $("ul").on("click", ".deleteButton", function () {
        $(this).parents("li").remove();
        altColor();
    })

    $("#btn").click(function () {
        $("input").toggle("hidden");
    });

    $(".list-group").on("click", "li", function () {
        $(this).toggleClass("strikeThrough");
    });

    $("ul").on("mouseenter", "li", function () {
        $(this).find("span").show();
    });

    $("ul").on("mouseleave", "li", function () {
        $(this).find("span").hide();
    });

    function inputPresent() {
        return ($("#input").val() != 'null' && $("#input").val() != "");
    }

    function altColor() {
        $("#to-do-list li:nth-child(odd)").addClass('listColor');
        $("#to-do-list li:nth-child(even)").removeClass('listColor');
    }

});