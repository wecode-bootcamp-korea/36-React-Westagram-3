import './main.scss';
import { useState } from 'react';
import SectionTop from './sectionTop';
import SectionFeed from './sectionFeed';
import MyProfile from './myProfile';
import SuggestionMember from './suggestionMember';
import { MEMBERS, SUGGESTION_NAME, NAME, chatLis } from './data';

function MainJunho() {
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
  return (
    <>
      <nav>
        <div className="topLine basic">
          <span className="westarFont">WeStagram</span>
          <div className="searchLocation">
            <div className="searchPosion">
              <img
                className="searchIcon"
                src="images/junho/search.png"
                alt=""
              />
              <input className="search" type="text" placeholder="검색" />
            </div>
          </div>
          <div className="icon">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </nav>
      <div className="layout">
        <div />
        <main>
          <SectionTop members={MEMBERS} />
          <SectionFeed
            chat={chat}
            onChage={chatting}
            onSubmit={submitChat}
            chatArr={chatArr}
          />
        </main>
        <aside>
          <MyProfile name={NAME} />
          <SuggestionMember name={SUGGESTION_NAME} />
        </aside>
        <div />
      </div>
      <div className="reference">
        <a href="https://www.flaticon.com/kr/free-icons/" title="집 아이콘">
          집 아이콘 제작자: Dave Gandy - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/kr/free-icons/instagram-"
          title="instagram 공유 아이콘"
        >
          , Instagram 공유 아이콘 제작자: Freepik - Flaticon
        </a>
      </div>
    </>
  );
}
export default MainJunho;
