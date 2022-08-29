import React from "react";

function HomePage() {
  // I tried the logout when page is closed but I couldn't manage it.
  // I need a little time to fix it.
  // Temporally I handle it manualy.

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <button onClick={handleClick}>Logout</button>
      <h1>Home Page</h1>
    </>
  );
}
export default HomePage;
