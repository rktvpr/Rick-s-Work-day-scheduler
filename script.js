var button = $(".saveBtn")
//adds current day to top of page using moment
$(document).ready(function () {
    var date = moment().format("dddd");
    $("#currentDay").text(date);
    //adds coloring to time depending on past present and future
    function TimeBlocks() {
        var currentTime = moment().hours()
        for (var i = 9; i < 18; i++) {
            if (i === currentTime) {
                $("#" + i).children(".col-sm-10").attr("class", "present col-sm-10 description")
            } else if (currentTime > i) {
                $("#" + i).children(".col-sm-10").attr("class", "past col-sm-10 description")
            } else {
                $("#" + i).children(".col-sm-10").attr("class", "future col-sm-10 description")
            }

        }
    };
    //runs the function
    TimeBlocks()
//on click input data is saved to local storage
    button.on("click", function (event) {
        event.preventDefault();
        var input = $(this).siblings(".col-sm-10").val().replace(/[""]+/g, "");
        var parentEl = $(this).parent().attr("id");

        localStorage.setItem(date + "-" + parentEl, JSON.stringify(input))
    });

    for (var i = 9; i < 18; i++) {
        if (localStorage.getItem(date + "-" + i)) {
            $("#txt" + i).val(localStorage.getItem(date + "-" + i).replace(/[""]+/g, ""))
        }
    }
})