import React from "react";
import "./HomePage.css";

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
      <div className="header">
        <h3>The Movie Database </h3>
      </div>
    </>
  );
}
export default HomePage;
