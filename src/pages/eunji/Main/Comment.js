import React from 'react';

const Comment = feed => {
  const eraseComment = e => {
    feed.remove();
  };

  return (
    <ul className="commentlist">
      <span className="name">eunji </span>
      <button className="commentlist-btn" onClick={eraseComment}>
        x
      </button>
      {feed.commentContent}
    </ul>
  );
};

export default Comment;
