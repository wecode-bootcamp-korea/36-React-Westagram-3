import { useState } from 'react';
import OneChat from './OneChat';

function SectionFeed({ img }) {
  const [chat, setChat] = useState('');
  const [chatArr, setChatArr] = useState([]);
  const [id, setId] = useState(1);
  const chatting = e => {
    setChat(e.target.value);
  };
  const submitChat = e => {
    e.preventDefault();
    chatLis.push({ id, chat });
    setChatArr(
      chatLis.map(x => {
        return (
          <div className="create" key={x.id}>
            <p className="createP">juno :{x.chat}</p>
            <button
              className="createBtn"
              onClick={e => {
                const btn = e.target.parentElement;
                btn.remove();
              }}
            >
              삭제
            </button>
          </div>
        );
      })
    );
    setChat('');
    setId(id + 1);
  };
  const [isvalid, setIsvalid] = useState('disabled');
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
          {chatArr.map(x => (
            <OneChat chatArr={x} key={x.key} />
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

const chatLis = [];
