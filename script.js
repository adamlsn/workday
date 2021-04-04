$(document).ready(function() {
    //setting "global variables"
    let presentDay = moment();
    $("#currentDay").text(presentDay.format("dddd" + ", " + "MMMM do YYYY"));

    //adding event listeners for buttons
    $(".saveBtn").on("click", function() {
        let currentHour = $(this).parent().attr("id");
        let currentEvent = $(this).siblings(".description").val();
        localStorage.setItem(currentHour, currentEvent);
    });

    //getting data to display on page after refresh
    $("#9a .description").val(localStorage.getItem("9a"));
    $("#10a .description").val(localStorage.getItem("10a"));
    $("#11a .description").val(localStorage.getItem("11a"));
    $("#12p .description").val(localStorage.getItem("12p"));
    $("#1p .description").val(localStorage.getItem("1p"));
    $("#2p .description").val(localStorage.getItem("2p"));
    $("#3p .description").val(localStorage.getItem("3p"));
    $("#4p .description").val(localStorage.getItem("4p"));
    $("#5p .description").val(localStorage.getItem("5p"));
});