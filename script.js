let presentDay = moment();
$("#currentDay").text(presentDay.format("dddd" + ", " + "MMMM do YYYY"));

$(document).ready(function() {
    //adding event listeners for buttons
    $(".saveBtn").on("click", function() {
        let currentHour = $(this).parent().attr("id");
        var currentEvent = $(this).siblings(".description").val();
        localStorage.setItem(currentHour, currentEvent);
    });
});