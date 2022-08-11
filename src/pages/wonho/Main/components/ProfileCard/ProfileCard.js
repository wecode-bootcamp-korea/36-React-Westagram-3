import '../ProfileCard/ProfileCard.scss';

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-left">
        <div className="profile-status">
          <img src="./images/wonho/IMG_1937.JPG" alt=" " />
        </div>
        <div className="profile-names">
          <p className="username">c_wonho</p>
          <p className="grayfont">정원호</p>
        </div>
      </div>
      <button className="button">전환</button>
    </div>
  );
}

export default ProfileCard;
