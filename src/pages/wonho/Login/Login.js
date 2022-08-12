import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';
import '../../../styles/common.scss';

function LoginWonho() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({ username: '', password: '' });

  const activateButton =
    userInfo.username.includes('@') && userInfo.password.length >= 5;

  const handleUserInfo = e => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const goToMain = () => {
    navigate('/mainWonho');
  };

  return (
    <div className="container">
      <div className="inner-container">
        <h1 className="title">Westagram</h1>
        <input
          id="username"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleUserInfo}
          onKeyUp={activateButton}
        />
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          onChange={handleUserInfo}
          onKeyUp={activateButton}
        />
        <button
          className="loginBtn"
          type="button"
          disabled={!activateButton}
          onClick={goToMain}
        >
          로그인
        </button>
        <span id="errorMsg" />
        <Link to="/loginWonho">비밀번호를 잊으셨나요?</Link>
      </div>
    </div>
  );
}

export default LoginWonho;
