import './main.scss';
import SectionTop from './sectionTop';
import SectionFeed from './sectionFeed';
import MyProfile from './myProfile';
import SuggestionMember from './suggestionMember';
import { MEMBERS, NAME } from './data';
import { useEffect, useState } from 'react';

function MainJunho() {
  const [feed, setFeed] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  useEffect(
    () =>
      fetch('./data/feedimg.json')
        .then(response => response.json())
        .then(data => {
          setFeed(data);
        }),
    []
  );
  useEffect(
    () =>
      fetch('./data/suggetion.json')
        .then(response => response.json())
        .then(data => {
          setSuggestion(data);
        }),
    []
  );
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
          {feed.map(x => {
            return <SectionFeed key={x.id} img={x.img} />;
          })}
        </main>
        <aside>
          <MyProfile name={NAME} />
          <SuggestionMember name={suggestion} />
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
