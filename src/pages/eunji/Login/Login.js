import { Link } from 'react-router-dom';
function LoginEunji() {
  return (
    <>
      <h1>Login</h1>
      <Link to="./Main">
        <button>로그인</button>
      </Link>
    </>
  );
}
export default LoginEunji;
