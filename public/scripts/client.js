const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


$(document).ready(function () {
  

  const createTweetElement = function (tweet) {
    
    const {user, content, created_at} = tweet;

    const tweetDate = timeago.format(created_at)

    let html = 
    `<article>

      <header>
        <div class="avatar-userName">
          <img src=${user.avatars}>
          <p class="userName">${user.name}</p>
        </div>
        <div class="handle">
          <p>${user.handle}</p>
        </div>
      </header>

      <p class="tweet">${content.text}</p>

      <footer>

        <div class="tweetInfo">
          <div class="tweetDate">${tweetDate}</div>
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
    
    const tweetsContainer = $('.tweets-container');

    tweets.forEach(tweet => {
      $tweet = createTweetElement(tweet);
      tweetsContainer.append($tweet)
    })

  }

  renderTweets(data)

  
});


