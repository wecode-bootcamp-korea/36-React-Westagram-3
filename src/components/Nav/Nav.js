function Nav() {
  return (
    <div className="header-wrap">
      <div className="header-left">
        <a href=" ">
          <img className="homeLogo" src="./images/instagram.png" alt=" " />
        </a>
        <h1>Westagram</h1>
      </div>
      <div className="header-center">
        <input className="search-bar" type="text" placeholder="검색" />
        <i className="fa-solid fa-magnifying-glass glass" />
      </div>
      <nav>
        <ul className="nav-items">
          <li>
            <a href=" ">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt=" "
              />
            </a>
          </li>
          <li>
            <a href=" ">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt=" "
              />
            </a>
          </li>
          <li>
            <a href=" ">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt=" "
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
