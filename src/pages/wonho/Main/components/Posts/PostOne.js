import React, { useState } from 'react';
import PostTop from '../PostTop/PostTop';
import PostNav from '../PostNav/PostNav';
import PostContent from '../PostContent/PostContent';

function PostOne() {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(array => [...array, comment]);
    setComment('');
  };

  return (
    <div className="post">
      <PostTop />
      <img className="post-image" src="./images/welshcorgi.jpg" alt=" " />
      <PostNav />
      <PostContent
        title="Corgi"
        hash="#welshcorgi #shortlegs #butt"
        likes="30,000"
        comments={commentArray}
      />
      <form className="comments-wrapper" onSubmit={onSubmit}>
        <input
          placeholder="댓글 달기..."
          value={comment}
          onChange={e => {
            setComment(e.target.value);
          }}
        />
        <button className="button">게시</button>
      </form>
    </div>
  );
}

export default PostOne;
