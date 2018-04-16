import React from 'react';

class Header extends React.Component {
  render() {
    return (
    <header className="top-header">
        <div className="hamburger-menu">
          <svg className="menu-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
          <svg className="close-icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </div>
        <div className="dropdown-menu">
          <ul>
            <li><a href="/">AO</a></li>
            <li><a href="/about/index.html">About</a></li>
            <li><a href="/art/index.html">Art</a></li>
            <li><a href="/projects/index.html">Projects</a></li>
            <li><a href="/contact/index.html">Contact</a></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;