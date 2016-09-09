/**
 * Created by WANG's computer on 2016/9/8.
 */
function getQuote() {
    var forismatic = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
    $.ajax({
        url: forismatic,
        dataType: "jsonp",
        success: function(response) {
            $("#quote").text(response.quoteText);
            $("#author").text("-" + response.quoteAuthor);
            $(".btn1").click(function() {
                window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(response.quoteText + " — " + response.quoteAuthor));
            });
        }
        }
    );
    var backgroundColors = ["#222222","#d11250","#db5800", "#006899", "#008f68"];
    var color = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    $("body").css("background-color",color);
    $("#quote").css("color",color);
    $(".btn2").css("color",color);
    $(".btn1").css("color",color);
    $("#author").css("color",color);
}
$(document).ready(function () {
    getQuote();
   $(".btn2").click(getQuote);

});