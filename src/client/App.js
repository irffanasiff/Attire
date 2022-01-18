import React, { useEffect, useState } from 'react';
import './app.css';
import ReactImage from './react.png';

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    fetch('/api/getUsername')
      .then((res) => res.json())
      .then((user) => setUserName(user.username));
  }, [userName]);

  return (
    <div>
      {userName ? (
        <h1>{`Hello ${userName}`}</h1>
      ) : (
        <h1>Loading.. please wait!</h1>
      )}
      <img src={ReactImage} alt='react' />
    </div>
  );
}

export default App;
