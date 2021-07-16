$(document).ready(function() {
  
  $(window).scroll (function() {
    
    if (window.pageYOffset > 200) {
      
      $(".write-new-tweet").css({"visibility" : "hidden"})
      
      $(".fas.fa-chevron-circle-up").css({"visibility" : "visible"})
    }
  })

  $('.fas.fa-chevron-circle-up').on("click", function (event) {
    
    $(".write-new-tweet").css({"visibility" : "visible"})
      
    $(".fas.fa-chevron-circle-up").css({"visibility" : "hidden"})

    event.preventDefault()
    $("#tweet-text").focus();
  })







});
