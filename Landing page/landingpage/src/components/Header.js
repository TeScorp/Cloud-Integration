import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://gomycodelearn.blob.core.windows.net/assets/images/general/gomycodeLogo.svg"
          alt="Logo"
        />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Learn</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </nav>
      <div className="btn">
        <button type="button">login</button>
      </div>
    </div>
  );
};

export default Header;
