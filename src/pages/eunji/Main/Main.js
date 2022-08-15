import React from 'react';
import { useState } from 'react';
import MainNav from './MainNav';
import MainFirst from './MainFirst';
import MainSecond from './MainSecond';
import MainThird from './MainThird';
import Comment from './Comment';
import MainRight from './MainRight';
import './Main.scss';

// import '/src/assets/images/eunji/bong22.jpg';

const MainEunji = () => {
  const [commentInput, setCommentInput] = useState('');
  const [feedComments, setFeedComments] = useState([]);

  const onChangeInput = e => setCommentInput(e.target.value);
  const handleComment = e => {
    e.preventDefault();
    const feedArray = [...feedComments, commentInput];
    setFeedComments(feedArray);
    setCommentInput('');
  };

  return (
    <div className="main">
      <div className="container">
        <MainNav />
      </div>

      <div className="second-container">
        <div className="second-container-left">
          <div className="main">
            <MainFirst />

            <div className="main-img">
              <img alt="main_bong" src="" />
            </div>

            <div className="main-bottom">
              <MainSecond />
              <MainThird />

              <div className="comment">
                <div className="show-comment">
                  <div>
                    <span className="strong post">hi im bongbong</span> 산책{' '}
                    <a href="/">더 보기</a>
                  </div>
                </div>

                <div className="commentBox">
                  <div className="commentbox">
                    <ul className="commentlist" value="messageList">
                      {feedComments.map((feed, id) => {
                        return <Comment commentContent={feed} key={id} />;
                      })}

                      <Comment commentContent=":)" />
                      <Comment commentContent=":)" />
                      <Comment commentContent=":)" />
                    </ul>
                  </div>
                  <form className="comment-in">
                    <input
                      id="writeComment"
                      type="text"
                      placeholder="댓글 달기..."
                      onChange={onChangeInput}
                      value={commentInput}
                    />

                    <button
                      className="btn"
                      type="button"
                      onClick={handleComment}
                    >
                      게시
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainRight />
      </div>
      <script type="text/javascript" src="./westagram_main.js" />
    </div>
  );
};

export default MainEunji;
