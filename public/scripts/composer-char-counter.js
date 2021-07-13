$(document).ready(function() {
  
  $("#tweet-text").on("input", function(event) {

    const value = $("#tweet-text").val()
    console.log("characters left:", 140 - value.length)

    let counter = 140 - value.length;

    if (counter < 0) {
      $("#tweet-text").siblings().children("output.counter").val(counter).css({"color" : "red"})
    } else if (counter >= 0) {
      $("#tweet-text").siblings().children("output.counter").val(counter).css({"color" : "#545149"})
    } 
  
  })







});
