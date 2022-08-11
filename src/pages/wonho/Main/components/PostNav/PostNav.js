import React, { useState } from 'react';
import '../PostNav/PostNav.scss';

function PostNav() {
  const [heart, setHeart] = useState(
    'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
  );
  const [bookmark, setBookmark] = useState('./images/wonho/bookmark.png');

  function handleLikes() {
    if (
      heart ===
      'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
    ) {
      setHeart('./images/wonho/redheart.png');
    } else if (heart === './images/wonho/redheart.png') {
      setHeart(
        'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
      );
    }
  }

  function handleBookmark() {
    if (bookmark === './images/wonho/bookmark.png') {
      setBookmark('./images/wonho/bookmarkfilled.png');
    } else if (bookmark === './images/wonho/bookmarkfilled.png') {
      setBookmark('./images/wonho/bookmark.png');
    }
  }

  return (
    <div className="post-nav-wrap">
      <div>
        <ul className="post-likes">
          <li>
            <img src={heart} alt=" " onClick={handleLikes} />
          </li>
          <li>
            <img src="./images/wonho/bubble-chat.png" alt="bubble-chat" />
          </li>
          <li>
            <img src="./images/wonho/send.png" alt="send-message" />
          </li>
        </ul>
      </div>
      <img
        className="bookmark"
        src={bookmark}
        alt=" "
        onClick={handleBookmark}
      />
    </div>
  );
}

export default PostNav;
