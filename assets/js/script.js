$(document).ready(function () {

    var today = moment().format('dddd, MMMM Do');
    $("#currentDay").html(today);

    
    var containerDiv = $(".container"); 
    var strTime = ""
    var hourNow = moment().hour();
    for (x=9; x<= 17; x++) {
        if (x>12) {
            strTime = x-12 + " PM";
        }
        else if (x===12) {
            strTime = x + " PM";
        }
        else {
            strTime = x + " AM";
        }
        if (x<hourNow) {
            $(".container").append("<div id='hour" + x + "' class='row time-block'>");
            $("#hour" + x).append("<div class='col-md-1 hour'>" + strTime + "</div>");
            $("#hour" + x).append("<textarea class='col-md-10 description past'></textarea>")
            $("#hour" + x).append("<button class='btn saveBtn col-md-1'><i class='fas fa-save'></i></button></div>");     
        }
        else if (x===hourNow) {
            $(".container").append("<div id='hour" + x + "' class='row time-block'>");
            $("#hour" + x).append("<div class='col-md-1 hour'>" + strTime + "</div>");
            $("#hour" + x).append("<textarea class='col-md-10 description present'></textarea>")
            $("#hour" + x).append("<button class='btn saveBtn col-md-1'><i class='fas fa-save'></i></button></div>");     
        }
        else {  
            $(".container").append("<div id='hour" + x + "' class='row time-block'>");
            $("#hour" + x).append("<div class='col-md-1 hour'>" + strTime + "</div>");
            $("#hour" + x).append("<textarea class='col-md-10 description future'></textarea>")
            $("#hour" + x).append("<button class='btn saveBtn col-md-1'><i class='fas fa-save'></i></button></div>");     
        }
    }
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

})