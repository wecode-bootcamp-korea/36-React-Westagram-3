function Suggestions() {
  return (
    <div className="suggestions-wrapper">
      <div className="stories-header">
        <p className="grayfont">회원님을 위한 추천</p>
        <p className="bold">모두 보기</p>
      </div>
      <div className="stories">
        <div className="profile-status">
          <img src="./images/recommended1.jpg" alt=" " />
        </div>
        <div className="profile-names">
          <p className="username">recommended_1</p>
          <p className="grayfont">human_1님 외 1명이 좋아합니다</p>
        </div>
      </div>
      <div className="stories">
        <div className="profile-status">
          <img src="./images/recommended2.jpg" alt=" " />
        </div>
        <div className="profile-names">
          <p className="username">recommended_2</p>
          <p className="grayfont">human_2님 외 2명이 좋아합니다</p>
        </div>
      </div>
      <div className="stories">
        <div className="profile-status">
          <img src="./images/recommended3.jpg" alt=" " />
        </div>
        <div className="profile-names">
          <p className="username">recommended_3</p>
          <p className="grayfont">human_3님 외 3명이 좋아합니다</p>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
