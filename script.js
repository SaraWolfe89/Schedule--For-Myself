

        $(function () {
    $(".saveBtn").on("click", function () {
        var block = $(this).parent().attr("id");
        var userInput = $(this).siblings(".description").val();
        localStorage.setItem(Block, userInput);
    });

    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
            $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past future").addClass("present");
        } else {
            $(this).removeClass("past present").addClass("future");
        }
    });

    $(".time-block").each(function () {
        var block = $(this).attr("id");
        var storedInput = localStorage.getItem(block);
        $(this).find(".description").val(storedInput);
    });

    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
