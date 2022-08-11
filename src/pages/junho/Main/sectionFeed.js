import { useState } from 'react';
import OneChat from './OneChat';

function SectionFeed({ img }) {
  const [chat, setChat] = useState('');
  const [chatLis, setChatLis] = useState([]);
  const [isvalid, setIsvalid] = useState('disabled');
  const chatting = e => {
    setChat(e.target.value);
  };
  const submitChat = e => {
    e.preventDefault();
    const seconds = Math.floor(Date.now() / 1000);
    setChatLis([...chatLis, { id: seconds, chat: chat }]);
    setChat('');
  };
  const chatListDelete = e => {
    setChatLis(chatLis.filter(x => x.id !== Number(e.target.parentElement.id)));
  };
  return (
    <section className="feed">
      <div className="feedBox basic">
        <div className="feedtop">
          <img src="images/junho/who.jpg" alt="누구?" />
          <span> Front-end developer</span>
        </div>
        <img className="feedImg" src={img} alt="feed" />
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
          {chatLis.map(x => (
            <OneChat
              chatArr={x.chat}
              key={x.id}
              id={x.id}
              del={chatListDelete}
            />
          ))}
        </div>
        <form className="chatting" action="" onSubmit={submitChat}>
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
            onChange={e => chatting(e)}
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

// const chatLis = [];
