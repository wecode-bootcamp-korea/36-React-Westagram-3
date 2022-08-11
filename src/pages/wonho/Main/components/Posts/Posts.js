import { useState } from 'react';
import PostTop from '../PostTop/PostTop';
import PostNav from '../PostNav/PostNav';
import PostContent from '../PostContent/PostContent';

function Posts({ posts }) {
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
    <>
      {posts.map(post => (
        <div key={post.id} className="post">
          <PostTop img="./" user={post.username} />
          <img className="post-image" src={post.img} alt={post.alt} />
          <PostNav />
          <PostContent
            title={post.title}
            hash={post.hash}
            likes={post.likes}
            comments={commentArray}
            user={post.user}
            time={post.time}
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
      ))}
    </>
  );
}

export default Posts;
