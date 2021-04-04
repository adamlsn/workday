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
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
});