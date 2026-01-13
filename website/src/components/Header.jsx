import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-placeholder">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill="black"/>
            <rect x="10" y="10" width="20" height="20" fill="white"/>
          </svg>
        </div>
        <h1 className="club-name">Harvard MIT Builders Club</h1>
      </div>
      <p className="tagline">Building the future, one project at a time.</p>
    </header>
  );
}

export default Header;
