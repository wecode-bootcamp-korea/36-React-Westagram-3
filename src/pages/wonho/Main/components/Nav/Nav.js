import '../Nav/Nav.scss';

const NAV_LIST = [
  {
    id: 1,
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png',
    alt: 'explore',
  },
  {
    id: 2,
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png',
    alt: 'heart',
  },
  {
    id: 3,
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png',
    alt: 'profile',
  },
];

function Nav() {
  return (
    <div className="header-wrap">
      <div className="header-left">
        <a href=" ">
          <img
            className="homeLogo"
            src="./images/wonho/instagram.png"
            alt="instagramLogo"
          />
        </a>
        <h1>Westagram</h1>
      </div>
      <div className="header-center">
        <input className="search-bar" type="text" placeholder="검색" />
        <i className="fa-solid fa-magnifying-glass glass" />
      </div>
      <nav>
        <ul className="nav-items">
          {NAV_LIST.map(navList => (
            <li key={navList.id}>
              <a href=" ">
                <img src={navList.src} alt={navList.alt} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
