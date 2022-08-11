import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

function LoginJunho() {
  const [inputValue, setInpustValue] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const disabled =
    inputValue.email.includes('@') && inputValue.password.length >= 5;
  const btnColor =
    inputValue.email.includes('@') && inputValue.password.length >= 5
      ? '#0095f6'
      : 'rgba(var(--d69,0,149,246),.3)';

  const goToMain = e => {
    // 로그인
    e.preventDefault();
    fetch('http://10.58.0.111:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'login success') {
          localStorage.setItem('data', JSON.stringify(data));
          navigate('/mainJunho');
          alert('로그인 성공');
        } else {
          alert('로그인 실패');
        }
      });
  };

  const saveInput = e => {
    const { name, value } = e.target;
    setInpustValue({ ...inputValue, [name]: value });
  };

  // 회원가입부분
  const signUP = () =>
    fetch('http://10.58.0.111:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    });
  // .then(response => response.json())
  // .then(data => console.log(data));

  return (
    <section className="section">
      <article className="loginImgCenter">
        <div className="loginFont">WeStagram</div>
      </article>
      <article className="loginBox">
        <form id="facebookForm" method="get" onSubmit={goToMain}>
          <div className="idInput">
            <input
              name="email"
              className="idInputStyle"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
              value={inputValue.email}
              onChange={saveInput}
            />
          </div>
          <div className="pwdInput">
            <input
              name="password"
              className="pwdInputStyle"
              type="password"
              placeholder="비밀번호"
              value={inputValue.password}
              onChange={saveInput}
            />
          </div>
          <div className="loginBtn">
            <button
              type="submit"
              className="login"
              style={{ backgroundColor: btnColor }}
              disabled={!disabled}
            >
              로그인
            </button>
          </div>
        </form>
        <div className="midLine">
          <div className="borderLine" />
          <div className="or">또는</div>
          <div className="borderLine" />
        </div>
        <button
          style={{ border: 'none', background: 'white', cursor: 'pointer' }}
          onClick={signUP}
        >
          <div className="facebookLogin">
            <img
              className="facebook"
              src="./images/junho/Facebook.jpg"
              alt="facebook"
            />
            <span className="btnSpan">Facebook 회원가입</span>
          </div>
        </button>
        <a
          className="pwdFind"
          href="https://www.instagram.com/accounts/password/reset/"
        >
          비밀번호를 잊으셨나요?
        </a>
      </article>
    </section>
  );
}

export default LoginJunho;
