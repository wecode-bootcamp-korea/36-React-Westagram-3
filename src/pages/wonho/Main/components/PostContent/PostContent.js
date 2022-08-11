import Comments from '../Comments/Comments';
import '../PostContent/PostContent.scss';

function PostContent({ title, user, likes, time, comments, hash }) {
  return (
    <div className="post-content-wrap">
      <div className="likes">
        <div className="likes-user">
          <div className="likes-profile">
            <img src="./images/wecode.jpg" alt=" " />
          </div>
          <p className="username">
            <span className="bold">wecode_bootcamp</span>님{' '}
            <span className="bold">외 {likes}명</span>이 좋아합니다
          </p>
        </div>
      </div>
      <div className="post-content">
        <p>
          <span className="bold">{user}</span> {title}
        </p>
        <p>.</p>
        <p className="hashtag">{hash}</p>
        <p className="grayfont">댓글 모두 보기</p>
        <div className="comment-post">
          {comments.map((comment, index) => {
            return <Comments key={index} content={comment} />;
          })}
        </div>
      </div>
      <p className="grayfont post-time">{time}</p>
    </div>
  );
}

export default PostContent;
