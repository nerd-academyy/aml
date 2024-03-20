$(".active button").click(function () {
    let power = $(this).attr("power");
    if (power == "off") {
        $(this).find("i").addClass("fa-caret-up").removeClass("fa-caret-down")
        $(this).attr("power", "on");
        $(".list").slideDown()
    } else {
        $(this).find("i").addClass("fa-caret-down").removeClass("fa-caret-up")
        $(this).attr("power", "off");
        $(".list").slideUp()
    }
})

$(".list button").click(function () {
    let blur = $(this).attr("quality");
    $(".img").css({ "filter": "blur(" + blur + ")", "background-image": "url(moon.avif)" })
})
$(".choose").click(function () {
    $(".img").css({ "background-image": "url(aml.jpg)" })
})