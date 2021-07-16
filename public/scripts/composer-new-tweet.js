$(document).ready(function() {

  $('.write-new-tweet').on("click", function (event) {
    event.preventDefault()
    $("#tweet-text").focus();

    $(window).scrollTop(0);
  })

})