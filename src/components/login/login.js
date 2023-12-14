import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



  const Login = () => {
  const navigate  = useNavigate();
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim()) {
      setLoggedIn(true);
      navigate('/main');
    } else {
      alert('사용자 아이디를 입력하세요.');
    }
  };
  return (
    <div>
      {loggedIn ? (
        <div>
          <p>로그인 성공!</p>
        </div>
      ) : (
        <div>
          <label>사용자 아이디:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>로그인</button>
        </div>
      )}
    </div>
  );
};

export default Login;