import React, { useState } from 'react';

function StateFunction(props) {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  const handleData = () => {
    const id = 'gdhong';
    const name = '홍길동';
    setLoading(false);
    setUserInfo({
      id,
      name,
    });
  };

  setTimeout(handleData, 4000);

  return (
    <div>
      <span>{loading ? '로딩중' : JSON.stringify(userInfo)}</span>
    </div>
  );
}

export default StateFunction;
