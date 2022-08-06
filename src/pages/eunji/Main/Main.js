import React from 'react';
import './Main.scss';
import { useState } from 'react';
import Comment from './Comment';
import MainNav from './MainNav';

const MainEunji = () => {
  const [commentInput, setCommentInput] = useState('');
  const [feedComments, setFeedComments] = useState([]);

  const onChangeInput = e => setCommentInput(e.target.value);
  const handleComment = e => {
    e.preventDefault();
    const feedArray = [...feedComments];
    feedArray.push(commentInput);
    setFeedComments(feedArray);
    setCommentInput('');
  };
  // console.log(feedComments);

  return (
    <div className="main">
      <div className="container">
        <MainNav />
      </div>

      <div className="second-container">
        <div className="second-container-left">
          <div className="main">
            <div className="main-head">
              <div className="main-head-three">
                <div className="main-head-profile">
                  <div className="main-head-img">
                    <img alt="main_profile" src="./images/bong22.jpg" />
                  </div>

                  <div className="main-head-text">
                    <p>bongbong123</p>
                  </div>
                </div>

                <div className="main-head-share">
                  <i className="fa-solid fa-ellipsis" />
                </div>
              </div>
            </div>

            <div className="main-img">
              <img alt="main_bong" src="./images/bong22.jpg" />
            </div>

            <div className="main-bottom">
              <div className="main-bottom-icon">
                <div className="main-bottom-icon-heart">
                  <i className="fa-solid fa-heart" />
                </div>

                <div className="main-bottom-icon-comment">
                  <i className="fa-regular fa-comment" />
                </div>

                <div className="main-bottom-icon-share">
                  <i className="fa-solid fa-share" />
                </div>

                <div className="main-bottom-icon-bookmake-zone">
                  <div className="main-bottom-icon-bookmark">
                    <i className="fa-regular fa-bookmark" />
                  </div>
                </div>
              </div>

              <div className="main-bottom-like">
                <div className="main-bottom-like-box">
                  <div className="main-bottom-like-in">
                    <img alt="main-bottom-img" src="./images/bong22.jpg" />
                  </div>

                  <div className="main-bottom-like-realtext">
                    <div className="main-bottom-like-realtext-name">eunji</div>
                    <div className="main-bottom-like-realtext-name2">
                      {' '}
                      님 외 10명이 좋아합니다
                    </div>
                  </div>
                </div>
              </div>

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
                      <span className="name">eunji </span>
                      <span name="saying"> saying</span>

                      {feedComments.map(feed => {
                        return <Comment commentContent={feed} />;
                      })}

                      <Comment commentContent=" eunji : :)" />
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
                      // value={pushButton}
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

        <div className="main-right">
          <div className="main-right-firstBox">
            <div className="main-right-firstBox-box">
              <div className="main-right-firstBox-img">
                <img alt="main-right-img" src="./images/bong22.jpg" />
              </div>
              <div className="main-right-firstBox-text">
                <div className="firstBox-text-bold">wecode_bootcamp</div>
                <div className="firstBox-text-normal">WeCode | 위코드</div>
              </div>
            </div>
          </div>

          <div className="main-right-secondBox">
            <div className="main-right-secondBox-header">
              <div className="secondBox-header-normal">스토리</div>
              <div className="secondBox-header-bold">모두보기</div>
            </div>

            <div className="main-right-secondBox-container">
              <div className="firstman">
                <div className="firstman-img">
                  <img alt="firstman-profile" src="./images/bong22.jpg" />
                </div>
                <div className="firstman-text">
                  <div className="firstman-text-bold">_yum_s</div>
                  <div className="firstman-text-normal">16분전</div>
                </div>
              </div>

              <div className="secondman">
                <div className="secondman-img">
                  <img alt="secondman-profile" src="./images/bong22.jpg" />
                </div>

                <div className="secondman-text">
                  <div className="secondman-text-bold">drink_eat_drink</div>

                  <div className="secondman-text-normal">3시간 전</div>
                </div>
              </div>

              <div className="thirdman">
                <div className="thirdman-img">
                  <img alt="thirdman-profile" src="./images/bong22.jpg" />
                </div>

                <div className="thirdman-text">
                  <div className="thirdman-text-bold">hyukyc</div>

                  <div className="thirdman-text-normal">20시간 전</div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-right-thirdBox">
            <div className="main-right-thirdBox-header">
              <div className="main-right-thirdBox-header-textbox">
                <div className="thirdBox-normal">회원님을 위한 추천</div>
                <div className="thirdBox-bold">모두 보기</div>
              </div>
            </div>

            <div className="main-right-thirdBox-box">
              <div className="thirdBox-firstman">
                <div className="thirdBox-firstman-img-text">
                  <div className="thirdBox-firstman-img">
                    <img
                      alt="thirdBox-firstman-profile"
                      src="./images/bong22.jpg"
                    />
                  </div>
                  <div className="thirdBox-firstman-text">
                    <div className="thirdBox-firstman-text-bold">joaaahye</div>
                    <div className="thirdBox-firstman-text-normal">
                      _legend_a외 2명이...
                    </div>
                  </div>
                </div>
                <div className="thirdBox-firstman-follow">팔로우</div>
              </div>

              <div className="thirdBox-secondman">
                <div className="thirdBox-secondman-img-text">
                  <div className="thirdBox-secondman-img">
                    <img
                      alt="thirdBox-secondman-profile"
                      src="./images/bong22.jpg"
                    />
                  </div>
                  <div className="thirdBox-secondman-text">
                    <div className="thirdBox-secondman-text-bold">
                      rampart81
                    </div>
                    <div className="thirdBox-secondman-text-normal">
                      ring.in.seoul님 외 12...
                    </div>
                  </div>
                </div>
                <div className="thirdBox-secondman-follow">팔로우</div>
              </div>

              <div className="thirdBox-thirdman">
                <div className="thirdBox-secondman-img-text">
                  <div className="thirdBox-thirdman-img">
                    <img
                      alt="thirdBox-thirdman-profile"
                      src="./images/bong22.jpg"
                    />
                  </div>
                  <div className="thirdBox-thirdman-text">
                    <div className="thirdBox-thirdman-text-bold">shawnoojo</div>
                    <div className="thirdBox-thirdman-text-normal">
                      jimmylee님 외 1...
                    </div>
                  </div>
                </div>
                <div className="thirdBox-thirdman-follow">팔로우</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script type="text/javascript" src="./westagram_main.js" />
    </div>
  );
};

export default MainEunji;
