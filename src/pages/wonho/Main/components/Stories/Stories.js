function Stories() {
  return (
    <div className="stories-wrapper">
      <div className="stories-header">
        <p className="grayfont">스토리</p>
        <p className="bold">모두 보기</p>
      </div>
      <div className="stories">
        <div className="profile-status">
          <img src="./images/human1.jpg" alt=" " />
        </div>
        <div className="profile-names">
          <p className="username">human_1</p>
          <p className="grayfont">사람1</p>
        </div>
      </div>
      <div className="stories">
        <div className="profile-status">
          <img src="./images/human2.jpg" alt=" " />
        </div>
        <div className="profile-names">
          <p className="username">human_2</p>
          <p className="grayfont">사람2</p>
        </div>
      </div>
      <div className="stories">
        <div className="profile-status">
          <img src="./images/human3.jpg" alt=" " />
        </div>
        <div className="profile-names">
          <p className="username">human_3</p>
          <p className="grayfont">사람3</p>
        </div>
      </div>
      <div className="stories">
        <div className="profile-status">
          <img src="./images/human4.jpg" alt=" " />
        </div>
        <div className="profile-names">
          <p className="username">human_4</p>
          <p className="grayfont">사람4</p>
        </div>
      </div>
    </div>
  );
}

export default Stories;
