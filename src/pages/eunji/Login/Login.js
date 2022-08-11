import React from 'react';
import './Login.scss';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginEunji = () => {
  const [info, setInfo] = useState({
    userEmail: '',
    userPw: '',
  });
  // const [textpw, setTextpw] = useState('');
  const [isActive, setIsActive] = useState(false);

  console.log(info);
  // console.log(info.userEmail);
  // const onChangeid = e => {
  //   setTextid(e.target.value);
  // };

  // const onChangepw = e => {
  //   setTextpw(e.target.value);
  // };

  const passed = () => {
    info.userEmail.includes('@') &&
    info.userEmail.length > 5 &&
    info.userPw.length > 5
      ? setIsActive(true)
      : setIsActive(false);
  };

  const onChangeinfo = e => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/mainEunji');
  };

  // function dataSend(e) {
  //   e.preventDefault();
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
  //     .then(data => console.log('data', data));
  // }
  // function dataSend(e) {
  //   e.preventDefault();
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
          <div className="put">
            <input
              type="text"
              value={info.userEmail}
              onChange={onChangeinfo}
              onKeyUp={passed}
              name="userEmail"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />

            <input
              type="password"
              value={info.userPw}
              onChange={onChangeinfo}
              onKeyUp={passed}
              name="userPw"
              placeholder="비밀번호"
            />
            {/* <Link to="./Main"> */}
            <button
              id="button"
              type="button"
              style={isActive ? { opacity: 1 } : { opacity: 0.5 }}
              onClick={goToMain}
            >
              {' '}
              로그인
            </button>
            {/* </Link> */}
          </div>

          <div className="or">
            <div className="orThree">
              <div className="line" />
              <div className="orThreeText">또는</div>
              <div className="line" />
            </div>
          </div>
        </main>

        <footer className="forget">비밀번호를 잊으셨나요?</footer>
      </article>
      <script type="text/javascript" src="./Login" />
    </div>
  );
};

export default LoginEunji;
