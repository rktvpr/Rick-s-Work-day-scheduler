var button = $(".saveBtn")

$(document).ready(function () {
    var date = moment().format("dddd");
    $("#currentDay").text(date);

    function TimeBlocks() {
        var currentTime = moment().hours()
        var times = $(".time-block");
        times.each(function() {
            var hour = parseInt($(this).attr("id"))
            if (hour === current) {
                $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
            } else if (current > hour) {
                $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
            } else {
                $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
            }
        })
    };
    TimeBlocks()

    button.on("click", function(event){
        event.preventDefault();
        var input = $(this).siblings(".col-sm-10").val().replace(/[""]+/g, "");
        var parentEl = $(this).parent().attr("id");

        localStorage.setItem(parentEl, JSON.stringify(input))
    });

    $("#9AM textarea").val(localStorage.getItem("9AM").replace(/[""]+/g, ""))
    $("#10AM textarea").val(localStorage.getItem("10AM").replace(/[""]+/g, ""))
    $("#11AM textarea").val(localStorage.getItem("11AM").replace(/[""]+/g, ""))
    $("#12PM textarea").val(localStorage.getItem("12PM").replace(/[""]+/g, ""))
    $("#1PM textarea").val(localStorage.getItem("1PM").replace(/[""]+/g, ""))
    $("#2PM textarea").val(localStorage.getItem("2PM").replace(/[""]+/g, ""))
    $("#3PM textarea").val(localStorage.getItem("3PM").replace(/[""]+/g, ""))
    $("#4PM textarea").val(localStorage.getItem("4PM").replace(/[""]+/g, ""))
    $("#5PM textarea").val(localStorage.getItem("5PM").replace(/[""]+/g, ""))
})