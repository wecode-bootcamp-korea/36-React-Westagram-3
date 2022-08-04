import './login.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginJunho() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [btnColor, setBtnColr] = useState('rgba(var(--d69,0,149,246),.3)');
  const [toggle, setToggle] = useState('disabled');
  const navigate = useNavigate();
  const canToMain = () => {
    if (id.includes('@') && pwd.length >= 5) {
      setToggle('');
      setBtnColr('#0095f6');
    } else {
      setToggle('disabled');
      setBtnColr('rgba(var(--d69,0,149,246),.3)');
    }
  };
  const goToMain = () => {
    navigate('/mainJunho');
  };
  const saveUserId = e => {
    setId(e.target.value);
  };
  const pwdWorking = e => {
    setPwd(e.target.value);
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
              className="idInputStyle"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
              value={id}
              onChange={saveUserId}
            />
          </div>
          <div className="pwdInput">
            <input
              className="pwdInputStyle"
              type="password"
              placeholder="비밀번호"
              value={pwd}
              onChange={pwdWorking}
            />
          </div>
          <div className="loginBtn">
            {/* <Link to='/main'> */}
            <button
              className="login"
              style={{ backgroundColor: btnColor }}
              disabled={toggle}
            >
              로그인
            </button>
            {/* </Link> */}
          </div>
        </form>
        <div className="midLine">
          <div className="borderLine"></div>
          <div className="or">또는</div>
          <div className="borderLine"></div>
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
