$(document).ready(function() {
  
  $(window).scroll(function() {

    // if you have scrolled down 200px, the up-arrow will appear    
    if (window.pageYOffset > 200) {
      $(".fas.fa-chevron-circle-up").css({"visibility" : "visible"});

    // if you have scrolled down and then back up, the up-arrow will disapear again
    } else {
      $(".fas.fa-chevron-circle-up").css({"visibility" : "hidden"});

    }
  });

  $('.fas.fa-chevron-circle-up').on("click", function(event) {
    // after clicking on the up-arrow, the window should scroll back to the top and the write-new-tweet button should reappear and the up-arrow disappear
    $(".write-new-tweet").css({"visibility" : "visible"});
    $(".fas.fa-chevron-circle-up").css({"visibility" : "hidden"});

    event.preventDefault();
    // puts the cursor into the input box
    $("#tweet-text").focus();

    $(window).scrollTop(0);
  });


});
