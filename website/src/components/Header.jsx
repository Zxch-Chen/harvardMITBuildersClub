import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-fixed">
        <img className="logo-img" src="/HMBClogo.png" alt="Harvard MIT Builders Club Logo" />
      </div>
      <div className="header-content">
        <h1 className="club-name">Harvard MIT Builders Club</h1>
        <div className="disclaimer" style={{ fontSize: '16px', color: '#222', marginTop: '0.5rem', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          This is an independent, student-led community and is NOT affiliated with, endorsed by, or sponsored by Harvard University or the Massachusetts Institute of Technology.
        </div>
      </div>
    </header>
  );
}

export default Header;
