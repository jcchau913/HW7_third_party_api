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
        $(".container").append("<div id='hour" + x + "' class='row time-block'>");
        $("#hour" + x).append("<div class='col-md-1 hour'>" + strTime + "</div>");
        if (x<hourNow) {
            $("#hour" + x).append("<textarea class='col-md-10 description past'></textarea>")
        }
        else if (x===hourNow) {
            $("#hour" + x).append("<textarea class='col-md-10 description present'></textarea>")
        }
        else {  
            $("#hour" + x).append("<textarea class='col-md-10 description future'></textarea>")
        }
        $("#hour" + x).append("<button class='btn saveBtn col-md-1'><i class='fas fa-save'></i></button></div>");           
        $("#hour" + x + " .description").val(localStorage.getItem("hour" + x));
    }
    $(".saveBtn").on("click", function () {
        var strText = $(this).siblings(".description").val();
        var timeId = $(this).parent().attr("id");
        localStorage.setItem(timeId, strText);
    })

})