import React from 'react';
import './Login.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginEunji = () => {
  const [textid, setTextid] = useState('');
  const [textpw, setTextpw] = useState('');
  const [isActive, setInActive] = useState(false);

  const onChangeid = e => {
    setTextid(e.target.value);
  };

  const onChangepw = e => {
    setTextpw(e.target.value);
  };

  // console.log (isActive)a

  const passed = () => {
    textid.includes('@') && textid.length > 5 && textpw.length > 5
      ? setInActive(true)
      : setInActive(false);
  };

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
              value={textid}
              onChange={onChangeid}
              onKeyUp={passed}
              id="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />

            <input
              type="password"
              value={textpw}
              onChange={onChangepw}
              onKeyUp={passed}
              id="pw"
              placeholder="비밀번호"
            />
            <Link to="./Main">
              <button
                id="button"
                type="button"
                style={isActive ? { opacity: 1 } : { opacity: 0.5 }}
              >
                {' '}
                로그인
              </button>
            </Link>
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
