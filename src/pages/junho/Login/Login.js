import './login.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginJunho() {
  const [inputValue, setInpustValue] = useState({
    email: '',
    password: '',
  });
  const [btnColor, setBtnColor] = useState('rgba(var(--d69,0,149,246),.3)');
  const [toggle, setToggle] = useState('disabled');
  const navigate = useNavigate();
  const canToMain = () =>
    inputValue.email.includes('@') && inputValue.password.length >= 5
      ? (setToggle(''), setBtnColor('#0095f6'))
      : (setToggle('disabled'), setBtnColor('rgba(var(--d69,0,149,246),.3)'));
  const goToMain = () => {
    navigate('/mainJunho');
  };
  const saveInput = e => {
    const { name, value } = e.target;
    setInpustValue({ ...inputValue, [name]: value });
  };
  return (
    <section className="section">
      <article className="loginImgCenter">
        <div className="loginFont">WeStagram</div>
      </article>
      <article className="loginBox">
        <form
          id="facebookForm"
          method="get"
          onKeyUp={canToMain}
          onSubmit={goToMain}
        >
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
              disabled={toggle}
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
        <div className="facebookLogin">
          <img
            className="facebook"
            src="./images/junho/Facebook.jpg"
            alt="facebook"
          />
          <span className="btnSpan">Facebook으로 로그인</span>
        </div>
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
