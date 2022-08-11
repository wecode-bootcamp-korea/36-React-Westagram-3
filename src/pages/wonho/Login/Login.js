import React, { useState } from 'react';
import './Login.scss';
import '../../../styles/common.scss';
import { useNavigate } from 'react-router-dom';

function LoginWonho() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [button, setButton] = useState(true);

  const activateButton = () => {
    id.includes('@') && pw.length >= 5 ? setButton(false) : setButton(true);
  };

  const myId = 'cwonho16@gmail.com';
  const myPw = 'cjstk0824!';

  const goToMain = () => {
    navigate('/main');
  };

  // 회원가입
  /*
    const handleLogin = () => {

        fetch( 'http://10.58.0.32:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: id, password: pw}),
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
*/

  // 로그인
  /*      const handleLogin = () => {

        fetch( 'http://10.58.0.32:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: id, password: pw}),
        })
        .then((response) => {
            if(response.ok === true) {
                return response.json();
            }
            throw new Error('통신실패');
        })
        .catch((error) => console.log(error))
        .then((data) => {
            if(data.message === "success") {
                localStorage.setItem('token', data.token);
                goToMain();
            } else if(data.message === "invalid") {
                alert('아이디 또는 비밀번호를 확인해주세요');
            }
        });
    */

  return (
    <div className="container">
      <div className="inner-container">
        <h1 className="title">Westagram</h1>
        <input
          id="username"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={e => {
            setId(e.target.value);
          }}
          onKeyUp={activateButton}
        />
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          onChange={e => {
            setPw(e.target.value);
          }}
          onKeyUp={activateButton}
        />
        <button
          className="loginBtn"
          type="button"
          disabled={button}
          onClick={() => {
            if (id === myId) {
              if (pw === myPw) {
                goToMain();
              } else {
                alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
              }
            }
          }}
        >
          로그인
        </button>
        <span id="errorMsg" />
        <a href=" ">
          <p>비밀번호를 잊으셨나요?</p>
        </a>
      </div>
    </div>
  );
}

export default LoginWonho;
