$(document).ready(function () {
  

  // Cross-Site Scripting - this function ensures we aren't evaluating the text that is coming from the form submission 
  // (e.g. some one could maliciously input code that wipes our database clean)
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  
  const createTweetElement = function (tweet) {
    
    const {user, content, created_at} = tweet;

    const tweetDate = timeago.format(created_at)

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

    </article>`

    return html;
  }


  const renderTweets = function (tweets) {
    
    //empties out the tweets-container - so pre-existing tweets don't get prepended to it - starts with a clean slate
    const tweetsContainer = $('.tweets-container').empty();

    tweets.forEach(tweet => {
      $tweet = createTweetElement(tweet);
      tweetsContainer.prepend($tweet)
    })

  }

  // intercepts the submit event from the 'tweet' button / form
  // prevents the button from doing it's default POST/refresh action - instead it submits the data as a query string using serialize
  // (fields are separated from their value by '=' and each pair is spearated from the next pair using '&')
  $("form").on("submit", function(event) {
    
    event.preventDefault();

    const data = $(this).serialize()

    if (data.length > 145) {
      alert("You have exceeded the maximum of 140 characters per tweet")
    } else if (data.length === 5) {
      alert("Please insert a message")
    } else {
      $.post("/tweets", data) 
      .then((res) => {
        loadTweets()
      })
    }
  });
  

  const loadTweets = function () {
    $.ajax({
      url:"http://localhost:8080/tweets",
      method: "GET",
    })
    .then((res) => {
      console.log("response:", res)
      renderTweets(res)
    })
  }
  
  loadTweets()

});


