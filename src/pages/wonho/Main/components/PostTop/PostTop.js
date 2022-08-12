import '../PostTop/PostTop.scss';

function PostTop({ img, user }) {
  return (
    <div className="post-top">
      <div className="user">
        <div className="profile-picture">
          <img src={img} alt=" " />
        </div>
        <p className="username">{user}</p>
      </div>
      <a href=" ">
        <i className="fa-solid fa-ellipsis" />
      </a>
    </div>
  );
}

export default PostTop;
