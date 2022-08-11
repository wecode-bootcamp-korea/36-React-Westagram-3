import './myprofile.scss';

function MyProfile({ name }) {
  return (
    <>
      <img
        className="member"
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
        alt="회원"
      />
      <span className="enName">{name[0].split(',')[0]}</span>
      <span className="koName">{name[0].split(',')[1]}</span>
    </>
  );
}
export default MyProfile;