import React from 'react';

const MainNav = () => {
  return (
    <div className="nav">
      <div className="insta_logo_left">
        <i className="fa-brands fa-instagram-square" />
        <img
          alt="instagram Logo"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
        />
      </div>

      <div className="search">
        <div className="outline">
          <i className="fa-solid fa-magnifying-glass" />
          <input type="text" name="검색" placeholder="검색" />
        </div>
      </div>

      <div className="insta_logo">
        <div className="insta_logo_right">
          <div className="compass">
            <img
              alt="compass"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
          </div>

          <div className="heart">
            <img
              alt="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
          </div>

          <div className="person">
            <img
              alt="person"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
