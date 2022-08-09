import React, { useState } from 'react';

function PostNav() {
  const [heart, setHeart] = useState(
    'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
  );
  const [bookmark, setBookmark] = useState('./images/bookmark.png');

  function handleLikes() {
    if (
      heart ===
      'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
    ) {
      setHeart('./images/redheart.png');
    } else if (heart === './images/redheart.png') {
      setHeart(
        'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
      );
    }
  }

  function handleBookmark() {
    if (bookmark === './images/bookmark.png') {
      setBookmark('./images/bookmarkfilled.png');
    } else if (bookmark === './images/bookmarkfilled.png') {
      setBookmark('./images/bookmark.png');
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
            <img src="./images/bubble-chat.png" alt=" " />
          </li>
          <li>
            <img src="./images/send.png" alt=" " />
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
