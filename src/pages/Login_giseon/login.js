import './login.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function formWorking() {
    const form = document.getElementById("facebookForm");
    const btn = document.querySelector(".login");
    const inputId = document.querySelector("input.idInputStyle");
    const inputPwd = document.querySelector("input.pwdInputStyle");
    
    form.addEventListener("keyup", () => {
        if(inputId.value.includes('@') && inputPwd.value.length>=5) {
            btn.disabled = false
            btn.style.backgroundColor ='#0095f6'
        }else {
            btn.disabled = true
            btn.style.backgroundColor ='rgba(var(--d69,0,149,246),.3)'
        }
    });
}

function Login() {
    const navigate = useNavigate();
    const goToMain = () => {
        navigate('/main');
    }
    return (
    <section className="section">
        <article className="loginImgCenter">
            <div className="loginFont">WeStagram</div>
        </article>
        <article className="loginBox">
            {/* useNavigate 사용했을 때 */}
        <form id="facebookForm" method="get" onChange={()=>formWorking()} onSubmit={() =>goToMain()}>
            <div className="idInput">
                <input className="idInputStyle" type="text" placeholder="전화번호,사용자 이름 또는 이메일" />
            </div>
            <div className="pwdInput">
                <input className="pwdInputStyle"type="text" placeholder="비밀번호" />
            </div>
            <div className="loginBtn">
                {/* <Link to='/main'> */}
                    <button className="login" disabled >로그인</button>
                {/* </Link> */}
            </div>
        </form>   
        <div className="midLine">
            <div className="borderLine"></div>
            <div className="or">또는</div>
            <div className="borderLine"></div>
        </div>
        <div className="facebookLogin">
            <img className="facebook" src="./img/Facebook.jpg" alt="facebook" />
            <span className="btnSpan">Facebook으로 로그인</span>
        </div>
        <a className="pwdFind" href="https://www.instagram.com/accounts/password/reset/" >비밀번호를 잊으셨나요?</a>
        </article>
    </section>
    )
}

export default Login;