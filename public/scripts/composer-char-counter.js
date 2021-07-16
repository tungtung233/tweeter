$(document).ready(function() {
  
  $("#tweet-text").on("input", function(event) {

    //ensures no error messages are showing when typing
    $('#error-message').empty();

    const value = $("#tweet-text").val();
    let counter = 140 - value.length;

    //changes the colour of the counter depending on the length of text written
    if (counter < 0) {
      $("#tweet-text").siblings().children().children("output.counter").val(counter).css({"color" : "red"});
    } else if (counter >= 0) {
      $("#tweet-text").siblings().children().children("output.counter").val(counter).css({"color" : "#545149"});
    }
  
  });
});
