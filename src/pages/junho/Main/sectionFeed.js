import { useState } from 'react';
import Chatting from './Chatting';

function SectionFeed({ chatArr, chat, onChage, onSubmit }) {
  const [isvalid, setIsvalid] = useState('disabled');
  return (
    <section className="feed">
      <div className="feedBox basic">
        <div className="feedtop">
          <img src="images/junho/who.jpg" alt="누구?" />
          <span> Front-end developer</span>
        </div>
        <img className="feedImg" src="images/junho/instar.jpg" alt="feed" />
        <div className="clickedIcon">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="좋아요"
          />
          <img src="images/junho/message.png" alt="댓글" />
          <img src="images/junho/airplane.png" alt="공유" />
          <div className="hartClick">좋아요 2만개</div>
        </div>
        <div className="chat">
          <Chatting chatArr={chatArr} />
        </div>
        <form
          className="chatting"
          action=""
          onSubmit={e => {
            onSubmit(e);
          }}
        >
          <img
            className="inputImg"
            src="images/junho/smaile.png"
            alt="댓글아이콘"
          />
          <input
            className="chatInput"
            type="text"
            placeholder="댓글 달기..."
            value={chat}
            onChange={e => onChage(e)}
            onKeyUp={e => {
              e.target.value.length > 0
                ? setIsvalid('')
                : setIsvalid('disabled');
            }}
          />
          <button className="chatSubmit" disabled={isvalid}>
            게시
          </button>
        </form>
      </div>
    </section>
  );
}
export default SectionFeed;
