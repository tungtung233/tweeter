$(document).ready(function() {
  

  // Cross-Site Scripting - this function ensures we aren't evaluating the text that is coming from the form submission
  // (e.g. some one could maliciously input code that wipes our database clean)
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  
  const createTweetElement = function(tweet) {
    
    const {user, content, created_at} = tweet;

    const tweetDate = timeago.format(created_at);

    //html code for how the new tweet container should look
    let html =
    `<article>

      <header>
        <div class="avatar-userName">
          <img src=${escape(user.avatars)}>
          <p class="userName">${escape(user.name)}</p>
        </div>
        <div class="handle">
          <p>${escape(user.handle)}</p>
        </div>
      </header>

      <p class="tweet">${escape(content.text)}</p>

      <footer>

        <div class="tweetInfo">
          <div class="tweetDate">${escape(tweetDate)}</div>
          <div class="tweetOptions">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </div>

      </footer>

    </article>`;

    return html;
  };


  const renderTweets = function(tweets) {
    
    //empties out the tweets-container - so pre-existing tweets don't get prepended to it - starts with a clean slate
    const tweetsContainer = $('.tweets-container').empty();

    //goes through every tweet, applies the html code to the data, attaches them to the top of the tweet container
    tweets.forEach(tweet => {
      $tweet = createTweetElement(tweet);
      tweetsContainer.prepend($tweet);
    });

  };

  // intercepts the submit event from the 'tweet' button / form
  // prevents the button from doing it's default POST/refresh action - instead it submits the data as a query string using serialize
  $("form").on("submit", function(event) {
    
    //ensures that spamming the submit button only produces one error message (not multiple errors appended to each other)
    $('#error-message').empty();
    
    event.preventDefault();

    // this reads the exact input message from the form - not serialized
    // this way, we can accurately gauge the length of the tweet
    const value = $('#tweet-text').val();
    
    if (value.length > 140) {
      const errorMessage = `<i class="fas fa-exclamation-circle"></i>  Tweets can be no longer than 140 characters!`;
      $("#error-message").append(errorMessage);
      
    } else if (value.length === 0) {
      const errorMessage = `<i class="fas fa-exclamation-circle"></i>  You didn't type anything!`;
      $("#error-message").append(errorMessage);
      
    } else {
      // serializes the tweet message
      // (fields are separated from their value by '=' and each pair is spearated from the next pair using '&')
      const serializedMessage = $(this).serialize();

      $.post("/tweets", serializedMessage)
        .then((res) => {

          //clears the input form
          this.reset();
          loadTweets();
        });
    }

  });
  

  const loadTweets = function() {
    $.ajax({
      url:"http://localhost:8080/tweets",
      method: "GET",
    })
      .then((res) => {
        renderTweets(res);
      });
  };


  // calling this function first so the page loads with the pre-existing tweets
  loadTweets();

});


