import React, { useState } from 'react';
import '../../../../../styles/common.scss';
import '../Comments/Comments.scss';

function Comments({ content }) {
  const [heart, setHeart] = useState(
    'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
  );

  function handleHeart() {
    if (
      heart ===
      'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
    ) {
      setHeart('../../../../../../public/images/wonho/redheart.png');
    } else if (heart === '../../../../../../public/images/wonho/redheart.png') {
      setHeart(
        'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
      );
    }
  }

  return (
    <div className="comment">
      <p>
        <span className="bold">c_wonho</span> {content}
      </p>
      <img src={heart} alt="" onClick={handleHeart} />
    </div>
  );
}

export default Comments;
