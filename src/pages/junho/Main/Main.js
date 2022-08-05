import './main.scss';
import { useState } from 'react';
import SectionTop from './sectionTop';
import SectionFeed from './sectionFeed';
import MyProfile from './myProfile';
import SuggestionMember from './suggestionMember';

function MainJunho() {
  const [chat, setChat] = useState('');
  const [chatArr, setChatArr] = useState([]);
  const [id, setId] = useState(1);
  const [name, setName] = useState(['juno97, 김준호']);
  const chatting = e => {
    setChat(e.target.value);
  };

  const submitChat = e => {
    e.preventDefault();
    const upload = [...chatArr];
    upload.push(
      <div className="create" key={id}>
        <p className="createP">juno :{chat}</p>
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
    setChatArr(upload);
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
              <input className="search" type="text" placeholder="검색"></input>
            </div>
          </div>
          <div className="icon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
      <div className="layout">
        <div></div>
        <main>
          <SectionTop members={members}></SectionTop>
          <SectionFeed
            chat={chat}
            onChage={chatting}
            onSubmit={submitChat}
            chatArr={chatArr}
          ></SectionFeed>
        </main>
        <aside>
          <MyProfile name={name}></MyProfile>
          <SuggestionMember name={suggestionName}></SuggestionMember>
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

const members = [
  { id: 1, src: 'images/junho/bighead.jpg', alt: '빡빡이' },
  { id: 2, src: 'images/junho/boram.jpg', alt: '보람' },
  { id: 3, src: 'images/junho/juno.jpg', alt: 'juno' },
  { id: 4, src: 'images/junho/wecode.jpg', alt: 'wecode' },
  { id: 5, src: 'images/junho/who.jpg', alt: '누구?' },
  { id: 6, src: 'images/junho/ingyeng.jpg', alt: '97인경' },
];
const suggestionName = [
  { id: 1, name: 'hcchang13' },
  { id: 2, name: 'hyeong7777' },
  { id: 3, name: 'fine_artian' },
  { id: 4, name: 'likeavenger' },
  { id: 5, name: 'lee_ej__09ll' },
];
