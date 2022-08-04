function MyProfile(props) {
  return (
    <>
      <img
        className="member"
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
        alt="회원"
      />
      <span className="enName">{props.name.split(',')[0]}</span>
      <span className="koName">{props.name.split(',')[1]}</span>
    </>
  );
}
export default MyProfile;
