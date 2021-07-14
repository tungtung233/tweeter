/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}


$(document).ready(function () {
  
  const createTweetElement = function (tweetData) {
    
    const {user, content, created_at} = tweetData;

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
          <div class="tweetDate">${created_at}</div>
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

  const $tweet = createTweetElement(tweetData);
  console.log("tweet:", $tweet);
  $('.tweets-container').append($tweet);
  
  
});


