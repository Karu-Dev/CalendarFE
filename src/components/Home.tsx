import React from 'react';

const Home: React.FC = () => {
  const userId = localStorage.getItem("userId")
  console.log(userId);
  
  const login = () : void => {
    window.location.href = "http://localhost:4000/auth/google/"
  }
  const logout = () : void => {
    localStorage.removeItem("userId");
    fetch(`http://localhost:4000/logout?userId=${userId}`)
    window.location.href="/"
  }
  const openEvents = () : void => {
    window.location.href = "/events"
  }
  return (
    <div className="Home">
      { userId ? <button className='button' onClick={logout}> Logout </button> : <button className='button' onClick={login}>Login</button>}
      <button className='button' onClick={openEvents}>Events</button>
    </div>
  );
};

export default Home;