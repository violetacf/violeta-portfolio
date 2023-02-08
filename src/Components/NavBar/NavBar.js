import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

export default function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <div className="navbar-container">
      <header>
        <nav className="about-my-portfolio" ref={navRef}>
          <a href="/">&lt;About/&gt;</a>
          <a href="/portfolio">&lt;Portfolio/&gt;</a>
          <button className="nav-button nav-close-button" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-button" onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
      <hr className="divider"></hr>
    </div>
  );
}
