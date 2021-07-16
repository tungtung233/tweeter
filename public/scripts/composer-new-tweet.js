$(document).ready(function() {

  $(window).scroll(function() {

    // if you have scrolled down 150px, the write-new-tweet button will appear   
    if (window.pageYOffset > 150) {
      $(".write-new-tweet").css({"visibility" : "visible"});

    // if you have scrolled down and then back up, the write-new-tweet button will disappear again
    } else {
      $(".write-new-tweet").css({"visibility" : "hidden"});

    }
  });


  //after clicking the write-new-tweet button, it should take you back to the top of the page and the cursor should be inside the input box
  $('.write-new-tweet').on("click", function(event) {
    event.preventDefault();
    $("#tweet-text").focus();

    $(window).scrollTop(0);
  });

});