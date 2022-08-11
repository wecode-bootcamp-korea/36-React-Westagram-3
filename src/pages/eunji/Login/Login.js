import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginEunji = () => {
  const [info, setInfo] = useState({
    userEmail: '',
    userPw: '',
  });

  const onChangeinfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const passed =
    info.userEmail.includes('@') &&
    info.userEmail.length > 5 &&
    info.userPw.length > 5;

  const navigate = useNavigate();
  const goToMain = e => {
    if (e.key === 'Enter') {
      navigate('/mainEunji');
    }
  };

  // TODO : 월요일에 실습 해보려고 남겨둔 코드

  // function dataSend(e) {
  //   e.preventDefault(); // 폼태그가 없어서 없어두 댐
  //   fetch('http://10.58.6.117:3000/auth/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: info.userEmail,
  //       password:info.userPw,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data =>{
  //       if(data.message === "SUCCESS"){
  //         navigate('/mainEunji')
  //       }
  //     };
  // }

  // function dataSend(e) {

  //   if(e.key === "Enter")

  //   fetch('http://10.58.6.117:3000/auth/signin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: info.userEmail,
  //       password: info.userPw,
  //     }),
  //   })
  //     .then(response => {
  //       if (response.ok === true) {
  //         navigate('/mainEunji');
  //       }
  //       throw new Error('에러 발생!'); //reponse.ok가 true가 아닐 경우 error를 throw
  //     })
  //     .catch(error => console.log(error));
  // }

  return (
    <div className="login">
      <article className="total">
        <nav className="westagram">
          <img
            alt="instagramlogo"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          />
        </nav>

        <main className="box">
          <form className="put">
            <input
              type="text"
              value={info.userEmail}
              onChange={onChangeinfo}
              name="userEmail"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />

            <input
              type="password"
              value={info.userPw}
              onChange={onChangeinfo}
              name="userPw"
              placeholder="비밀번호"
            />

            <button
              id="button"
              type="button"
              onKeyUp={goToMain}
              disabled={passed}
            >
              {' '}
              로그인
            </button>
          </form>

          <div className="or">
            <div className="orThree">
              <div className="line" />
              <div className="orThreeText">또는</div>
              <div className="line" />
            </div>
          </div>
        </main>

        <footer className="forget">비밀번호를 잊으셨나요? </footer>
      </article>
    </div>
  );
};

export default LoginEunji;
